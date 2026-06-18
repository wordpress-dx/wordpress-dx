import {Command, Flags} from '@oclif/core'

import {configManager} from '../config/project-config.manager.js'
import {EnvironmentConfig} from '../config/types.js'

export abstract class LoopressCommand extends Command {
  protected siteConfig!: EnvironmentConfig

  static baseFlags = {
    password: Flags.string({
      description: 'WordPress application password (fallback; prefer `lps project config`)',
      helpGroup: 'GLOBAL',
    }),
    url: Flags.string({
      description: 'WordPress URL (fallback; prefer `lps project config`)',
      helpGroup: 'GLOBAL',
    }),
    user: Flags.string({
      description: 'WordPress username (fallback; prefer `lps project config`)',
      helpGroup: 'GLOBAL',
    }),
  }

  async init(): Promise<void> {
    await super.init()

    const env = configManager.getCurrentEnv()
    if (env) {
      this.siteConfig = env
      return
    }

    this.error('No environment configured. Run `lps project config` first.')
  }

  async buildAuthHeaders(): Promise<Record<string, string>> {
    const {token, url} = this.siteConfig

    if (token) {
      return {Authorization: `Basic ${Buffer.from(token).toString('base64')}`}
    }

    this.error(`No credentials configured for ${url}. Run \`lps project config\` to add them.`)
  }
}
