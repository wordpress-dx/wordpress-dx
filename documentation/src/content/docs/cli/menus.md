---
title: Menus
description: Pull and push WordPress navigation menus from the command line.
badge:
  text: Coming Soon
  variant: caution
---

import { Aside } from '@astrojs/starlight/components';

<Aside type="caution" title="CLI commands not yet available">
The `lps menu` commands are not yet implemented. They will be added in a future release.
</Aside>

The `menu` command group will sync [Block-based Navigation menus](https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json/) created via the Full-Site Editing interface. Menus will be saved as a JSON file that you can commit and deploy.

## Planned commands

### `lps menu pull`

Download all navigation menus from WordPress.

### `lps menu push`

Upload menus from a local JSON file back to WordPress.

## Typical workflow (once available)

```bash
# 1. Pull menus from staging
lps project switch   # select staging
lps menu pull --config menus.json

# 2. Commit to Git
git add menus.json && git commit -m "sync: menus from staging"

# 3. Push to production
lps project switch   # select production
lps menu push --config menus.json
```
