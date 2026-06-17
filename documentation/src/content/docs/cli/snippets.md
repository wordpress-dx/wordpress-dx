---
title: Snippets
description: Push, pull and list WordPress code snippets from the command line.
---

The `snippets` command group lets you version-control PHP snippets as plain files in Git. Each snippet is stored as a `.php` file in a local directory that you commit like any other code.

Supports the [Code Snippets](https://wordpress.org/plugins/code-snippets/) plugin (default) and [WPCode](https://wpcode.com/).

## Typical workflow

```bash
# 1. Download existing snippets from WordPress
wdx snippets pull

# 2. Edit locally, commit to Git
git add snippets/ && git commit -m "feat: update price formatter snippet"

# 3. Deploy back to WordPress
wdx snippets push
```

## Commands

### `wdx snippets pull`

Download all snippets from WordPress and write them as `.php` files.

```bash
wdx snippets pull [path]
```

| Argument | Default | Description |
|----------|---------|-------------|
| `path` | `./snippets` | Local directory where snippets are written |

| Flag | Description |
|------|-------------|
| `--dryRun` / `-d` | Show what would be written without touching the filesystem |
| `--force` / `-f` | Overwrite existing local files |
| `--plugin` / `-p` | Target plugin: `code-snippets` (default) or `wpcode` |

**Example:**

```bash
wdx snippets pull ./wp-snippets --dryRun
wdx snippets pull --plugin wpcode
```

---

### `wdx snippets push`

Upload `.php` files from a local directory to WordPress. If a snippet with the same name already exists it is updated; otherwise a new snippet is created.

```bash
wdx snippets push [path]
```

| Argument | Default | Description |
|----------|---------|-------------|
| `path` | `./snippets` | Local directory to read `.php` files from |

| Flag | Description |
|------|-------------|
| `--dryRun` / `-d` | Show what would be pushed without making any changes |
| `--plugin` / `-p` | Target plugin: `code-snippets` (default) or `wpcode` |

**Example:**

```bash
wdx snippets push ./wp-snippets
wdx snippets push --plugin wpcode
```

---

### `wdx snippets list`

Print all snippets currently on WordPress.

```bash
wdx snippets list
```

| Flag | Description |
|------|-------------|
| `--json` / `-j` | Output raw JSON instead of formatted text |
| `--plugin` / `-p` | Target plugin: `code-snippets` (default) or `wpcode` |

**Example output:**

```
Found 3 snippets:

  1. price-formatter
     Active: ✓
     Tags: cli-import
     Description: Formats WooCommerce prices

  2. redirect-homepage
     Active: ✗
```

## File format

Each snippet is stored as a plain `.php` file named after the snippet. The filename (without extension) becomes the snippet name in WordPress.

```
snippets/
  price-formatter.php
  redirect-homepage.php
  custom-login-logo.php
```

## WPCode support

To target [WPCode](https://wpcode.com/) instead of Code Snippets, pass `--plugin wpcode` to any command. The WDX plugin must be installed and active on your WordPress site for this to work; it exposes the REST endpoint that the CLI uses.

```bash
wdx snippets pull --plugin wpcode
wdx snippets push --plugin wpcode
```
