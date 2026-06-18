Loopress
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mynewcli.svg)](https://npmjs.org/package/mynewcli)
[![Downloads/week](https://img.shields.io/npm/dw/mynewcli.svg)](https://npmjs.org/package/mynewcli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @loopress/cli
$ @loopress/cli COMMAND
running command...
$ @loopress/cli (--version)
@loopress/cli/0.1.0 darwin-arm64 node-v24.11.0
$ @loopress/cli --help [COMMAND]
USAGE
  $ @loopress/cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`@loopress/cli base`](#loopresscli-base)
* [`@loopress/cli help [COMMAND]`](#loopresscli-help-command)
* [`@loopress/cli login`](#loopresscli-login)
* [`@loopress/cli logout`](#loopresscli-logout)
* [`@loopress/cli plugins`](#loopresscli-plugins)
* [`@loopress/cli plugins add PLUGIN`](#loopresscli-plugins-add-plugin)
* [`@loopress/cli plugins:inspect PLUGIN...`](#loopresscli-pluginsinspect-plugin)
* [`@loopress/cli plugins install PLUGIN`](#loopresscli-plugins-install-plugin)
* [`@loopress/cli plugins link PATH`](#loopresscli-plugins-link-path)
* [`@loopress/cli plugins remove [PLUGIN]`](#loopresscli-plugins-remove-plugin)
* [`@loopress/cli plugins reset`](#loopresscli-plugins-reset)
* [`@loopress/cli plugins uninstall [PLUGIN]`](#loopresscli-plugins-uninstall-plugin)
* [`@loopress/cli plugins unlink [PLUGIN]`](#loopresscli-plugins-unlink-plugin)
* [`@loopress/cli plugins update`](#loopresscli-plugins-update)
* [`@loopress/cli project config`](#loopresscli-project-config)
* [`@loopress/cli project list`](#loopresscli-project-list)
* [`@loopress/cli project remove`](#loopresscli-project-remove)
* [`@loopress/cli project remove-env`](#loopresscli-project-remove-env)
* [`@loopress/cli project switch`](#loopresscli-project-switch)
* [`@loopress/cli project switch-env`](#loopresscli-project-switch-env)
* [`@loopress/cli snippets list`](#loopresscli-snippets-list)
* [`@loopress/cli snippets pull [PATH]`](#loopresscli-snippets-pull-path)
* [`@loopress/cli snippets push [PATH]`](#loopresscli-snippets-push-path)
* [`@loopress/cli styles pull`](#loopresscli-styles-pull)
* [`@loopress/cli styles push`](#loopresscli-styles-push)

## `@loopress/cli base`

```
USAGE
  $ @loopress/cli base [--password <value>] [--url <value>] [--user <value>]

GLOBAL FLAGS
  --password=<value>  WordPress application password (fallback; prefer `lps project config`)
  --url=<value>       WordPress URL (fallback; prefer `lps project config`)
  --user=<value>      WordPress username (fallback; prefer `lps project config`)
```

_See code: [src/commands/base.ts](https://github.com/loopress/loopress/blob/v0.1.0/src/commands/base.ts)_

## `@loopress/cli help [COMMAND]`

Display help for @loopress/cli.

```
USAGE
  $ @loopress/cli help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for @loopress/cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/6.2.50/src/commands/help.ts)_

## `@loopress/cli login`

Log in to Loopress via the console

```
USAGE
  $ @loopress/cli login

DESCRIPTION
  Log in to Loopress via the console

EXAMPLES
  $ lps login
```

_See code: [src/commands/login.ts](https://github.com/loopress/loopress/blob/v0.1.0/src/commands/login.ts)_

## `@loopress/cli logout`

Log out from Loopress console

```
USAGE
  $ @loopress/cli logout

DESCRIPTION
  Log out from Loopress console

EXAMPLES
  $ lps logout
```

_See code: [src/commands/logout.ts](https://github.com/loopress/loopress/blob/v0.1.0/src/commands/logout.ts)_

## `@loopress/cli plugins`

List installed plugins.

```
USAGE
  $ @loopress/cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ @loopress/cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.74/src/commands/plugins/index.ts)_

## `@loopress/cli plugins add PLUGIN`

Installs a plugin into @loopress/cli.

```
USAGE
  $ @loopress/cli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into @loopress/cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the LOOPRESS_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the LOOPRESS_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ @loopress/cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ @loopress/cli plugins add myplugin

  Install a plugin from a github url.

    $ @loopress/cli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ @loopress/cli plugins add someuser/someplugin
```

## `@loopress/cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ @loopress/cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ @loopress/cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.74/src/commands/plugins/inspect.ts)_

## `@loopress/cli plugins install PLUGIN`

Installs a plugin into @loopress/cli.

```
USAGE
  $ @loopress/cli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into @loopress/cli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the LOOPRESS_CLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the LOOPRESS_CLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ @loopress/cli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ @loopress/cli plugins install myplugin

  Install a plugin from a github url.

    $ @loopress/cli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ @loopress/cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.74/src/commands/plugins/install.ts)_

## `@loopress/cli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ @loopress/cli plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ @loopress/cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.74/src/commands/plugins/link.ts)_

## `@loopress/cli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ @loopress/cli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ @loopress/cli plugins unlink
  $ @loopress/cli plugins remove

EXAMPLES
  $ @loopress/cli plugins remove myplugin
```

## `@loopress/cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ @loopress/cli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.74/src/commands/plugins/reset.ts)_

## `@loopress/cli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ @loopress/cli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ @loopress/cli plugins unlink
  $ @loopress/cli plugins remove

EXAMPLES
  $ @loopress/cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.74/src/commands/plugins/uninstall.ts)_

## `@loopress/cli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ @loopress/cli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ @loopress/cli plugins unlink
  $ @loopress/cli plugins remove

EXAMPLES
  $ @loopress/cli plugins unlink myplugin
```

## `@loopress/cli plugins update`

Update installed plugins.

```
USAGE
  $ @loopress/cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/5.4.74/src/commands/plugins/update.ts)_

## `@loopress/cli project config`

Add or update a WordPress project environment

```
USAGE
  $ @loopress/cli project config

DESCRIPTION
  Add or update a WordPress project environment

EXAMPLES
  $ lps project config
```

_See code: [src/commands/project/config.ts](https://github.com/loopress/loopress/blob/v0.1.0/src/commands/project/config.ts)_

## `@loopress/cli project list`

List configured WordPress projects

```
USAGE
  $ @loopress/cli project list

DESCRIPTION
  List configured WordPress projects

EXAMPLES
  $ lps project list
```

_See code: [src/commands/project/list.ts](https://github.com/loopress/loopress/blob/v0.1.0/src/commands/project/list.ts)_

## `@loopress/cli project remove`

Remove one or more WordPress project configurations

```
USAGE
  $ @loopress/cli project remove

DESCRIPTION
  Remove one or more WordPress project configurations

EXAMPLES
  $ lps project remove
```

_See code: [src/commands/project/remove.ts](https://github.com/loopress/loopress/blob/v0.1.0/src/commands/project/remove.ts)_

## `@loopress/cli project remove-env`

Remove one or more environments from the current project

```
USAGE
  $ @loopress/cli project remove-env

DESCRIPTION
  Remove one or more environments from the current project

EXAMPLES
  $ lps project remove-env
```

_See code: [src/commands/project/remove-env.ts](https://github.com/loopress/loopress/blob/v0.1.0/src/commands/project/remove-env.ts)_

## `@loopress/cli project switch`

Switch the active project

```
USAGE
  $ @loopress/cli project switch

DESCRIPTION
  Switch the active project

EXAMPLES
  $ lps project switch
```

_See code: [src/commands/project/switch.ts](https://github.com/loopress/loopress/blob/v0.1.0/src/commands/project/switch.ts)_

## `@loopress/cli project switch-env`

Switch the active environment within the current project

```
USAGE
  $ @loopress/cli project switch-env

DESCRIPTION
  Switch the active environment within the current project

EXAMPLES
  $ lps project switch-env
```

_See code: [src/commands/project/switch-env.ts](https://github.com/loopress/loopress/blob/v0.1.0/src/commands/project/switch-env.ts)_

## `@loopress/cli snippets list`

List snippets from WordPress

```
USAGE
  $ @loopress/cli snippets list [--password <value>] [--url <value>] [--user <value>] [-j] [-p code-snippets|wpcode]

FLAGS
  -j, --json             Output in JSON format
  -p, --plugin=<option>  [default: code-snippets] WordPress snippet plugin to target
                         <options: code-snippets|wpcode>

GLOBAL FLAGS
  --password=<value>  WordPress application password (fallback; prefer `lps project config`)
  --url=<value>       WordPress URL (fallback; prefer `lps project config`)
  --user=<value>      WordPress username (fallback; prefer `lps project config`)

DESCRIPTION
  List snippets from WordPress

EXAMPLES
  $ lps snippets list

  $ lps snippets list --url http://example.com

  $ lps snippets list --plugin wpcode
```

_See code: [src/commands/snippets/list.ts](https://github.com/loopress/loopress/blob/v0.1.0/src/commands/snippets/list.ts)_

## `@loopress/cli snippets pull [PATH]`

Pull snippets from WordPress

```
USAGE
  $ @loopress/cli snippets pull [PATH] [--password <value>] [--url <value>] [--user <value>] [-d] [-p
    code-snippets|wpcode]

ARGUMENTS
  [PATH]  Path to snippets directory (overrides project config)

FLAGS
  -d, --dryRun           Dry run - show what would happen without making changes
  -p, --plugin=<option>  [default: code-snippets] WordPress snippet plugin to target
                         <options: code-snippets|wpcode>

GLOBAL FLAGS
  --password=<value>  WordPress application password (fallback; prefer `lps project config`)
  --url=<value>       WordPress URL (fallback; prefer `lps project config`)
  --user=<value>      WordPress username (fallback; prefer `lps project config`)

DESCRIPTION
  Pull snippets from WordPress

EXAMPLES
  $ lps snippets pull

  $ lps snippets pull --url http://example.com

  $ lps snippets pull --path ./snippets

  $ lps snippets pull --plugin wpcode
```

_See code: [src/commands/snippets/pull.ts](https://github.com/loopress/loopress/blob/v0.1.0/src/commands/snippets/pull.ts)_

## `@loopress/cli snippets push [PATH]`

Push snippets to WordPress

```
USAGE
  $ @loopress/cli snippets push [PATH] [--password <value>] [--url <value>] [--user <value>] [-d] [-p
    code-snippets|wpcode]

ARGUMENTS
  [PATH]  Path to snippets directory (overrides project config)

FLAGS
  -d, --dryRun           Dry run - show what would happen without making changes
  -p, --plugin=<option>  [default: code-snippets] WordPress snippet plugin to target
                         <options: code-snippets|wpcode>

GLOBAL FLAGS
  --password=<value>  WordPress application password (fallback; prefer `lps project config`)
  --url=<value>       WordPress URL (fallback; prefer `lps project config`)
  --user=<value>      WordPress username (fallback; prefer `lps project config`)

DESCRIPTION
  Push snippets to WordPress

EXAMPLES
  $ lps snippets push

  $ lps snippets push --url http://example.com

  $ lps snippets push --path ./snippets

  $ lps snippets push --plugin wpcode
```

_See code: [src/commands/snippets/push.ts](https://github.com/loopress/loopress/blob/v0.1.0/src/commands/snippets/push.ts)_

## `@loopress/cli styles pull`

Pull Global Styles from WordPress

```
USAGE
  $ @loopress/cli styles pull [--password <value>] [--url <value>] [--user <value>] [-d]

FLAGS
  -d, --dryRun  Dry run - show what would happen without making changes

GLOBAL FLAGS
  --password=<value>  WordPress application password (fallback; prefer `lps project config`)
  --url=<value>       WordPress URL (fallback; prefer `lps project config`)
  --user=<value>      WordPress username (fallback; prefer `lps project config`)

DESCRIPTION
  Pull Global Styles from WordPress

EXAMPLES
  $ lps styles pull

  $ lps styles pull --url http://example.com
```

_See code: [src/commands/styles/pull.ts](https://github.com/loopress/loopress/blob/v0.1.0/src/commands/styles/pull.ts)_

## `@loopress/cli styles push`

Push Global Styles to WordPress

```
USAGE
  $ @loopress/cli styles push [--password <value>] [--url <value>] [--user <value>] [-d]

FLAGS
  -d, --dryRun  Dry run - show what would happen without making changes

GLOBAL FLAGS
  --password=<value>  WordPress application password (fallback; prefer `lps project config`)
  --url=<value>       WordPress URL (fallback; prefer `lps project config`)
  --user=<value>      WordPress username (fallback; prefer `lps project config`)

DESCRIPTION
  Push Global Styles to WordPress

EXAMPLES
  $ lps styles push

  $ lps styles push --url http://example.com
```

_See code: [src/commands/styles/push.ts](https://github.com/loopress/loopress/blob/v0.1.0/src/commands/styles/push.ts)_
<!-- commandsstop -->
