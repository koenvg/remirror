# @remirror/preset-list

> The list preset and accompanying extensions.

[![Version][version]][npm] [![Weekly Downloads][downloads-badge]][npm] [![Bundled size][size-badge]][size] [![Typed Codebase][typescript]](#) [![MIT License][license]](#)

[version]: https://flat.badgen.net/npm/v/@remirror/preset-list/next
[npm]: https://npmjs.com/package/@remirror/preset-list/v/next
[license]: https://flat.badgen.net/badge/license/MIT/purple
[size]: https://bundlephobia.com/result?p=@remirror/preset-list@next
[size-badge]: https://flat.badgen.net/bundlephobia/minzip/@remirror/preset-list@next
[typescript]: https://flat.badgen.net/badge/icon/TypeScript?icon=typescript&label
[downloads-badge]: https://badgen.net/npm/dw/@remirror/preset-list/red?icon=npm

<br />

## Installation

```bash
# yarn
yarn add @remirror/preset-list@next @remirror/pm@next

# pnpm
pnpm add @remirror/preset-list@next @remirror/pm@next

# npm
npm install @remirror/preset-list@next @remirror/pm@next
```

This is included by default when you install the recommended `remirror` package. All exports are also available via the entry-point, `remirror/preset/list`.

<br />

## Usage

The following creates an instance of the preset.

```ts
import { ListPreset } from 'remirror/preset/list';

// Create the preset
const preset = new ListPreset();
```
