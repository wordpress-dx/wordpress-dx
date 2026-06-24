import {commands} from '@oclif/plugin-plugins'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class CliPluginsUpdate extends (commands['plugins:update'] as any) {}
