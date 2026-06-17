---
title: CLI - Getting Started
description: Install and configure the WDX CLI to connect to your WordPress instances.
---

The WDX CLI (`wdx`) is a Node.js command-line tool for version-controlling WordPress data and syncing it between your local machine and any WordPress instance.

## Installation

```bash
npm install -g @wordpress-dx/cli
```

Or with pnpm:

```bash
pnpm add -g @wordpress-dx/cli
```

Verify the installation:

```bash
wdx --version
```

## Requirements

- Node.js 18+
- A WordPress installation with the [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin active (for snippet commands)
- A WordPress [Application Password](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/) for authentication

## Configure a site

Before running any command, register your WordPress site:

```bash
wdx site config
```

You will be prompted for:

| Prompt | Description |
|--------|-------------|
| Site name | A local identifier (e.g. `production`, `staging`) |
| WordPress URL | Full URL including scheme (`https://example.com`) |
| Username | Your WordPress administrator username |
| Application password | Generated in **Users → Profile → Application Passwords** |

### Manage multiple sites

WDX stores site configurations in `~/.config/wdx/sites.json` and keeps track of the currently active site.

```bash
wdx site config          # Add or update a site
wdx site switch          # Interactively pick the active site
wdx site remove <name>   # Remove a saved site
```

All commands operate against the **active site** unless overridden via environment variables.

## Environment variable fallback

For CI/CD pipelines where interactive prompts are not available, you can bypass the site configuration entirely using environment variables:

```bash
export WP_URL=https://example.com
export WP_USERNAME=admin
export WP_APP_PASSWORD="xxxx xxxx xxxx xxxx xxxx xxxx"

wdx snippets push
```

## Dry run

Most commands accept a `--dryRun` (`-d`) flag that shows what would happen without making any changes:

```bash
wdx snippets push --dryRun
wdx snippets pull --dryRun
wdx acf pull --dryRun
```
