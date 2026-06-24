import {commands} from '@oclif/plugin-plugins'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class CliPluginsInspect extends (commands['plugins:inspect'] as any) {}
