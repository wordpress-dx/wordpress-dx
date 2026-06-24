import {commands} from '@oclif/plugin-plugins'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class CliPluginsLink extends (commands['plugins:link'] as any) {}
