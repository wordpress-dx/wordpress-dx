---
title: Export & Import
description: One-shot export and import of WordPress code snippets in multiple formats.
badge:
  text: Coming Soon
  variant: caution
---

import { Aside } from '@astrojs/starlight/components';

<Aside type="caution" title="CLI commands not yet available">
The `lps export` and `lps import` commands are not yet implemented. They will be added in a future release.
</Aside>

The top-level `export` and `import` commands will provide a quick way to migrate snippet data to and from a single file. Unlike `snippets push/pull`, these are designed for **one-off migrations** rather than day-to-day Git workflows.

## Planned commands

### `lps export`

Download all snippets from WordPress and write them to a single file (JSON or PHP format).

### `lps import`

Upload snippets from a previously exported file back to WordPress.

## When to use export/import vs snippets push/pull

| Scenario | Recommended command |
|----------|-------------------|
| Day-to-day development, version control | `snippets push` / `snippets pull` |
| One-time migration between two sites | `export` + `import` (coming soon) |
| Backup before a big change | `export snippets-backup.json` (coming soon) |
