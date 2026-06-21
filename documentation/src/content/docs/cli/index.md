---
title: Loopress CLI
description: Version-control your WordPress code snippets, styles, and menus in Git.
---

The Loopress CLI (`lps`) is a Node.js command-line tool that connects to the WordPress REST API to sync code snippets, Global Styles, and navigation menus between your local machine and any WordPress instance.

## Command overview

| Group | Command | Description |
|-------|---------|-------------|
| **Auth** | `lps login` | Log in to Loopress via the console |
| | `lps logout` | Remove the stored authentication token |
| **Snippets** | `lps snippets pull` | Download snippets from WordPress |
| | `lps snippets push` | Upload local snippet files to WordPress |
| | `lps snippets list` | List all snippets on the site |
| **Styles** | `lps styles pull` | Download Global Styles from WordPress |
| | `lps styles push` | Upload Global Styles (with optional CSS bundle) |
| **Project** | `lps project config` | Add or update a project/environment credential |
| | `lps project list` | List all configured projects |
| | `lps project switch` | Switch the active project |
| | `lps project switch-env` | Switch the active environment |
| | `lps project remove` | Remove a saved project |
| | `lps project remove-env` | Remove a saved environment |

## Quick start

```bash
# 1. Configure your first project
lps project config

# 2. Pull your snippets
lps snippets pull

# 3. Edit, commit, push
git add snippets/ && git commit -m "update snippet"
lps snippets push
```

→ [Full setup guide](/cli/getting-started/)

## Authentication

All commands authenticate against WordPress using an [Application Password](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/). These are generated in **Users → Profile → Application Passwords**.

The CLI supports managing multiple projects (`lps project config`) and switching between them (`lps project switch`).
