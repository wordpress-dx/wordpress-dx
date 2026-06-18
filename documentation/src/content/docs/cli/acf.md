---
title: ACF Field Groups
description: Pull and push Advanced Custom Fields field groups from the command line.
badge:
  text: Coming Soon
  variant: caution
---

import { Aside } from '@astrojs/starlight/components';

<Aside type="caution" title="CLI commands not yet available">
The `lps acf` commands are not yet implemented in the CLI. The Loopress WordPress plugin already exposes the required REST endpoints — see [ACF Sync (plugin)](/wordpress-plugin/acf/) — but the CLI commands will be added in a future release.
</Aside>

The `acf` command group will let you version-control [Advanced Custom Fields](https://www.advancedcustomfields.com/) field group definitions. Each field group will be stored as a `.json` file that you commit to Git and deploy across environments.

## Requirements (once available)

- Loopress plugin installed and active on the WordPress site
- Advanced Custom Fields (free or Pro) installed and active
- Administrator credentials configured via `lps project config`

## Planned commands

### `lps acf pull`

Download all ACF field groups from WordPress and write them as JSON files.

```bash
lps acf pull [path]
```

| Argument | Default | Description |
|----------|---------|-------------|
| `path` | `./acf` | Directory where field group files are written |

| Flag | Description |
|------|-------------|
| `--dryRun` / `-d` | Show what would be written without touching the filesystem |

---

### `lps acf push`

Upload field group JSON files to WordPress. If a group with the same key already exists it is updated; otherwise a new group is created.

```bash
lps acf push [path]
```

| Argument | Default | Description |
|----------|---------|-------------|
| `path` | `./acf` | Directory containing `*.json` field group files |

| Flag | Description |
|------|-------------|
| `--dryRun` / `-d` | Show what would be pushed without making any changes |

## File format

```
acf/
  group_64abc123.json    ← one file per field group
  group_64def456.json
```

Each file is standard ACF export JSON, identical to what you would get from ACF's own **Tools → Export** screen.
