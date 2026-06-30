import {describe, expect, it} from 'vitest'

import {resolvePluginVersion} from '../../src/commands/plugin/require.js'
import {InstalledPlugin} from '../../src/types/plugin.js'
import {diffPlugins, mergePluginManifest} from '../../src/utils/plugins.js'

const makePlugin = (slug: string, version: string, active = true): InstalledPlugin => ({
  active,
  file: `${slug}/${slug}.php`,
  name: slug,
  slug,
  version,
})

describe('plugins', () => {
  describe('mergePluginManifest', () => {
    it('adds all plugins when existing manifest is empty', () => {
      const {added, merged, updated} = mergePluginManifest({}, {woocommerce: '8.9.1', acf: '6.3.2'})
      expect(merged).toEqual({woocommerce: '8.9.1', acf: '6.3.2'})
      expect([...added].sort()).toEqual(['acf', 'woocommerce'])
      expect(updated).toHaveLength(0)
    })

    it('keeps existing plugins that are not in incoming', () => {
      const {merged} = mergePluginManifest({wpcode: '2.0.0'}, {woocommerce: '8.9.1'})
      expect(merged).toHaveProperty('wpcode', '2.0.0')
      expect(merged).toHaveProperty('woocommerce', '8.9.1')
    })

    it('updates a plugin version present in both existing and incoming', () => {
      const {merged, updated, added} = mergePluginManifest({woocommerce: '8.9.1'}, {woocommerce: '9.0.0'})
      expect(merged).toEqual({woocommerce: '9.0.0'})
      expect(updated).toEqual([{from: '8.9.1', slug: 'woocommerce', to: '9.0.0'}])
      expect(added).toHaveLength(0)
    })

    it('does not report a plugin as updated when the version is unchanged', () => {
      const {updated, added} = mergePluginManifest({woocommerce: '8.9.1'}, {woocommerce: '8.9.1'})
      expect(updated).toHaveLength(0)
      expect(added).toHaveLength(0)
    })

    it('handles an empty incoming manifest without touching existing entries', () => {
      const {merged, added, updated} = mergePluginManifest({woocommerce: '8.9.1'}, {})
      expect(merged).toEqual({woocommerce: '8.9.1'})
      expect(added).toHaveLength(0)
      expect(updated).toHaveLength(0)
    })

    it('reports added and updated separately in the same call', () => {
      const {added, updated} = mergePluginManifest({woocommerce: '8.9.1'}, {woocommerce: '9.0.0', acf: '6.0.0'})
      expect(added).toEqual(['acf'])
      expect(updated).toEqual([{from: '8.9.1', slug: 'woocommerce', to: '9.0.0'}])
    })
  })

  describe('diffPlugins', () => {
    it('puts a manifest plugin missing from site into toInstall', () => {
      const {toInstall, drifted, upToDate} = diffPlugins({woocommerce: '8.9.1'}, [])
      expect(toInstall).toEqual([{slug: 'woocommerce', targetVersion: '8.9.1'}])
      expect(drifted).toHaveLength(0)
      expect(upToDate).toHaveLength(0)
    })

    it('puts a version-matched active plugin into upToDate', () => {
      const {upToDate, toInstall, drifted, toActivate} = diffPlugins({woocommerce: '8.9.1'}, [makePlugin('woocommerce', '8.9.1')])
      expect(upToDate).toEqual(['woocommerce'])
      expect(toInstall).toHaveLength(0)
      expect(drifted).toHaveLength(0)
      expect(toActivate).toHaveLength(0)
    })

    it('puts a version-matched inactive plugin into toActivate', () => {
      const {toActivate, upToDate, toInstall, drifted} = diffPlugins(
        {woocommerce: '8.9.1'},
        [makePlugin('woocommerce', '8.9.1', false)],
      )
      expect(toActivate).toEqual([{slug: 'woocommerce'}])
      expect(upToDate).toHaveLength(0)
      expect(toInstall).toHaveLength(0)
      expect(drifted).toHaveLength(0)
    })

    it('puts a version-mismatched plugin into drifted', () => {
      const {drifted, toInstall, upToDate} = diffPlugins({woocommerce: '8.9.1'}, [makePlugin('woocommerce', '9.0.0')])
      expect(drifted).toEqual([{currentVersion: '9.0.0', slug: 'woocommerce', targetVersion: '8.9.1'}])
      expect(toInstall).toHaveLength(0)
      expect(upToDate).toHaveLength(0)
    })

    it('ignores installed plugins that are not in the manifest', () => {
      const {toInstall, drifted, upToDate} = diffPlugins({}, [makePlugin('woocommerce', '8.9.1')])
      expect(toInstall).toHaveLength(0)
      expect(drifted).toHaveLength(0)
      expect(upToDate).toHaveLength(0)
    })

    it('handles mixed install / drift / up-to-date / activate in one call', () => {
      const manifest = {
        acf: '6.3.2',
        'contact-form-7': '5.9.0',
        wpcode: '2.0.0',
        woocommerce: '8.9.1',
      }
      const installed = [
        makePlugin('woocommerce', '8.9.1'),
        makePlugin('acf', '6.0.0'),
        makePlugin('wpcode', '2.0.0', false),
      ]

      const {toInstall, drifted, upToDate, toActivate} = diffPlugins(manifest, installed)

      expect(toInstall).toEqual([{slug: 'contact-form-7', targetVersion: '5.9.0'}])
      expect(drifted).toEqual([{currentVersion: '6.0.0', slug: 'acf', targetVersion: '6.3.2'}])
      expect(upToDate).toEqual(['woocommerce'])
      expect(toActivate).toEqual([{slug: 'wpcode'}])
    })

    it('returns all empty arrays for an empty manifest', () => {
      const result = diffPlugins({}, [makePlugin('woocommerce', '8.9.1')])
      expect(result.toInstall).toHaveLength(0)
      expect(result.drifted).toHaveLength(0)
      expect(result.upToDate).toHaveLength(0)
    })
  })

  describe('resolvePluginVersion', () => {
    it('returns the version as-is when an explicit version is given', async () => {
      const version = await resolvePluginVersion('woocommerce', '8.9.1')
      expect(version).toBe('8.9.1')
    })

    it('resolves "latest" to a semver string from WordPress.org', async () => {
      const version = await resolvePluginVersion('woocommerce', 'latest')
      expect(version).toMatch(/^\d+\.\d+(\.\d+)?$/)
    })

    it('throws for an unknown slug', async () => {
      await expect(resolvePluginVersion('this-plugin-does-not-exist-xyzxyz', 'latest')).rejects.toThrow(
        'not found on WordPress.org',
      )
    })
  })
})
