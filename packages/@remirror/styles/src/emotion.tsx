/**
 * AUTO GENERATED FILE - TO UPDATE RUN: `pnpm run fix:css`
 */

import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const coreStyledCss: ReturnType<typeof css> = css`
  /**
 * Styles extracted from: packages/@remirror/core/src/styles.ts
 */
  .remirror-editor.ProseMirror {
    word-wrap: break-word;
    white-space: pre-wrap;
    white-space: break-spaces;
    position: relative;
    font-variant-ligatures: none;
    font-feature-settings: 'liga' 0;
  }

  .remirror-editor.ProseMirror pre {
    white-space: pre-wrap;
  }

  .remirror-editor.ProseMirror li {
    position: relative;
  }

  .remirror-editor.ProseMirror[contenteditable='false'] {
    white-space: normal;
  }

  .remirror-editor.ProseMirror[contenteditable='true'] {
    white-space: pre-wrap;
  }

  .remirror-editor.ProseMirror hr {
    border-color: #2e2e2e;
  }
  .remirror-editor .ProseMirror-hideselection *::-moz-selection {
    background: transparent;
  }
  .remirror-editor .ProseMirror-hideselection *::selection {
    background: transparent;
  }
  .remirror-editor .ProseMirror-hideselection *::-moz-selection {
    background: transparent;
  }
  .remirror-editor .ProseMirror-hideselection {
    caret-color: transparent;
  }
  .remirror-editor .ProseMirror-selectednode {
    outline: 2px solid #8cf;
  }
  /* Make sure li selections wrap around markers */
  .remirror-editor li.ProseMirror-selectednode {
    outline: none;
  }
  .remirror-editor li.ProseMirror-selectednode:after {
    content: '';
    position: absolute;
    left: -32px;
    right: -2px;
    top: -2px;
    bottom: -2px;
    border: 2px solid #8cf;
    pointer-events: none;
  }
`;

export const CoreStyledComponent: ReturnType<typeof styled.div> = styled.div`
  ${coreStyledCss}
`;

export const extensionBlockquoteStyledCss: ReturnType<typeof css> = css`
  /**
 * Styles extracted from: packages/@remirror/extension-blockquote/src/styles.ts
 */
  .remirror-editor blockquote {
    border-left: 2px solid #ddd;
    margin-left: 0;
    margin-right: 0;
    padding-left: 10px;
    font-style: italic;
  }
  .remirror-editor blockquote p {
    color: #888;
  }
`;

export const ExtensionBlockquoteStyledComponent: ReturnType<typeof styled.div> = styled.div`
  ${extensionBlockquoteStyledCss}
`;

export const extensionCalloutStyledCss: ReturnType<typeof css> = css`
  /**
 * Styles extracted from: packages/@remirror/extension-callout/src/styles.ts
 */
  .remirror-editor div[data-callout-type] {
    border-left: 2px solid transparent;
    margin-left: 0;
    margin-right: 0;
    padding-left: 10px;
  }
  .remirror-editor div[data-callout-type='info'] {
    background: #eef6fc;
    border-left-color: #3298dc;
  }
  .remirror-editor div[data-callout-type='warning'] {
    background: #fffbeb;
    border-left-color: #ffdd57;
  }
  .remirror-editor div[data-callout-type='error'] {
    background: #feecf0;
    border-left-color: #f14668;
  }
  .remirror-editor div[data-callout-type='success'] {
    background: #effaf3;
    border-left-color: #48c774;
  }
`;

export const ExtensionCalloutStyledComponent: ReturnType<typeof styled.div> = styled.div`
  ${extensionCalloutStyledCss}
`;

export const extensionGapCursorStyledCss: ReturnType<typeof css> = css`
  /**
 * Styles extracted from: packages/@remirror/extension-gap-cursor/src/styles.ts
 */
  .remirror-editor .ProseMirror-gapcursor {
    display: none;
    pointer-events: none;
    position: absolute;
  }
  .remirror-editor .ProseMirror-gapcursor:after {
    content: '';
    display: block;
    position: absolute;
    top: -2px;
    width: 20px;
    border-top: 1px solid black;
    -webkit-animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
    animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
  }
  @-webkit-keyframes ProseMirror-cursor-blink {
    to {
      visibility: hidden;
    }
  }
  @keyframes ProseMirror-cursor-blink {
    to {
      visibility: hidden;
    }
  }
  .remirror-editor .ProseMirror-focused .ProseMirror-gapcursor {
    display: block;
  }
`;

export const ExtensionGapCursorStyledComponent: ReturnType<typeof styled.div> = styled.div`
  ${extensionGapCursorStyledCss}
`;

export const extensionPlaceholderStyledCss: ReturnType<typeof css> = css`
  /**
 * Styles extracted from: packages/@remirror/extension-placeholder/src/placeholder-extension.ts
 */
  .remirror-is-empty:first-of-type::before {
    position: absolute;
    color: #aaa;
    pointer-events: none;
    height: 0;
    font-style: italic;
    content: attr(data-placeholder);
  }
`;

export const ExtensionPlaceholderStyledComponent: ReturnType<typeof styled.div> = styled.div`
  ${extensionPlaceholderStyledCss}
`;

export const extensionYjsStyledCss: ReturnType<typeof css> = css`
  /**
 * Styles extracted from: packages/@remirror/extension-yjs/src/yjs-extension.ts
 */
  .remirror-editor .ProseMirror .ProseMirror-yjs-cursor {
    position: absolute;
    border-left: black;
    border-left-style: solid;
    border-left-width: 2px;
    border-color: orange;
    height: 1em;
    word-break: normal;
    pointer-events: none;
  }

  .remirror-editor .ProseMirror .ProseMirror-yjs-cursor > div {
    position: relative;
    top: -1.05em;
    font-size: 13px;
    background-color: rgb(250, 129, 0);
    font-family: serif;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: white;
    padding-left: 2px;
    padding-right: 2px;
  }
  .remirror-editor .ProseMirror > .ProseMirror-yjs-cursor:first-child {
    margin-top: 16px;
  }
  .remirror-editor .ProseMirror p:first-child,
  .remirror-editor .ProseMirror h1:first-child,
  .remirror-editor .ProseMirror h2:first-child,
  .remirror-editor .ProseMirror h3:first-child,
  .remirror-editor .ProseMirror h4:first-child,
  .remirror-editor .ProseMirror h5:first-child,
  .remirror-editor .ProseMirror h6:first-child {
    margin-top: 16px;
  }
  .remirror-editor #y-functions {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .remirror-editor #y-functions > * {
    display: inline-block;
  }
`;

export const ExtensionYjsStyledComponent: ReturnType<typeof styled.div> = styled.div`
  ${extensionYjsStyledCss}
`;

export const presetTableStyledCss: ReturnType<typeof css> = css`
  /**
 * Styles extracted from: packages/@remirror/preset-table/src/table-styles.ts
 */
  .remirror-editor .ProseMirror .tableWrapper {
    overflow-x: auto;
  }
  .remirror-editor .ProseMirror table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    overflow: hidden;
  }
  .remirror-editor .ProseMirror td,
  .remirror-editor .ProseMirror th {
    vertical-align: top;
    box-sizing: border-box;
    position: relative;
  }
  .remirror-editor .ProseMirror .column-resize-handle {
    position: absolute;
    right: -2px;
    top: 0;
    bottom: 0;
    width: 4px;
    z-index: 20;
    background-color: var(--remirror-hue-blue-9);
    pointer-events: none;
  }
  .remirror-editor .ProseMirror .resize-cursor {
    cursor: ew-resize;
    cursor: col-resize;
  }
  /* Give selected cells a blue overlay */
  .remirror-editor .ProseMirror .selectedCell:after {
    z-index: 2;
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(200, 200, 255, 0.4);
    pointer-events: none;
  }
`;

export const PresetTableStyledComponent: ReturnType<typeof styled.div> = styled.div`
  ${presetTableStyledCss}
`;

export const reactSocialStyledCss: ReturnType<typeof css> = css`
  /**
 * Styles extracted from: packages/@remirror/react-social/src/social-styles.ts
 */
  .remirror-emoji-suggestions-item {
    padding: 8px;
    text-overflow: ellipsis;
    max-width: 250px;
    width: 250px;
    overflow: hidden;
    white-space: nowrap;
    color: white;
  }
  .remirror-emoji-suggestions-item.hovered {
    background-color: var(--remirror-hue-gray-2);
  }
  .remirror-emoji-suggestions-item.highlighted {
    background-color: var(--remirror-hue-gray-3);
  }

  .remirror-emoji-suggestions-dropdown-wrapper {
    position: absolute;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: hsla(205, 70%, 15%, 0.25) 0 4px 8px, hsla(205, 70%, 15%, 0.31) 0px 0px 1px;
    background-color: white;
    z-index: 10;
    max-height: 250px;
    overflow-y: scroll;
  }

  .remirror-mention-suggestions-dropdown-wrapper {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    flex-basis: auto;
    flex-shrink: 0px;
    margin: 4px;
    overflow: hidden;
    list-style: none;
    padding: 0px;
    box-shadow: hsla(205, 70%, 15%, 0.25) 0 4px 8px, hsla(205, 70%, 15%, 0.31) 0px 0px 1px;
    background-color: white;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .remirror-mention-suggestions-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid rgb(230, 236, 240);
    padding: 7px 15px 6px 10px;
    font-size: 14px;
    color: white;
  }

  .remirror-mention-suggestions-item.highlighted {
    background-color: #e8f5fd;
  }

  .remirror-mention-suggestions-item:hover {
    background-color: #e8f5fd;
  }

  .remirror-mention-suggestions-item:hover span {
    color: #1da1f2;
  }

  .remirror-mention-suggestions-user-item-image {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50%;
  }

  .remirror-mention-suggestions-user-item-display-name {
    margin-right: 5px;
    color: #14171a;
    word-break: break-all;
    font-weight: bold;
  }

  .remirror-mention-suggestions-user-item-username {
    color: #657786;
  }

  .remirror-mention-suggestions-tag-item-tag {
    font-weight: bold;
    color: #66757f;
  }

  .remirror-mention-suggestions-tag-item-tag:hover {
    text-decoration: underline;
    color: #1da1f2;
  }

  /**
 * Styles extracted from: packages/@remirror/react-social/src/components/social-character-count.tsx
 */
  .remirror-social-character-count-wrapper {
    position: absolute;
    bottom: 0px;
    right: 0px;
    margin: 0 8px 10px 4px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .remirror-character-count-circle-background {
    stroke: #ccd6dd;
    fill: none;
  }

  .remirror-character-count-circle {
    fill: none;
  }

  .remirror-character-count-circle-wrapper {
    margin-bottom: -4px;
    overflow: visible;
    transform: rotate(-90deg);
  }

  /**
 * Styles extracted from: packages/@remirror/react-social/src/components/social-editor-emoji.tsx
 */
  .remirror-emoji-suggestions-item-name {
    color: rgb(121, 129, 134);
  }

  .remirror-emoji-suggestions-item-char {
    font-size: 1.25em;
    padding-right: 5px;
  }

  /**
 * Styles extracted from: packages/@remirror/react-social/src/components/social-editor.tsx
 */
  .remirror-social-editor .ProseMirror {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    box-sizing: border-box;
    position: relative;
    border-width: 1px;
    border-style: solid;
    border-color: #99cfeb;
    box-shadow: 0 0 0 1px #99cfeb;
    line-height: 1.625rem;
    border-radius: 8px;
    width: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    max-height: calc(90vh - 124px);
    min-height: 142px;
    padding: 8px;
    padding-right: 40px;
  }

  .remirror-social-editor .ProseMirror p {
    margin: 0px;
    letter-spacing: 0.6px;
    color: text;
  }

  .remirror-social-editor .ProseMirror a.mention {
    pointer-events: none;
    cursor: default;
  }

  .remirror-social-editor .ProseMirror a {
    text-decoration: none !important;
    color: #1da1f2;
  }

  .remirror-social-editor .ProseMirror:focus {
    outline: none;
    box-shadow: focus;
  }

  .remirror-social-editor .ProseMirror .Prosemirror-selectednode {
    background-color: grey;
  }

  .remirror-social-editor-container {
    position: relative;
    height: 100%;
  }
`;

export const ReactSocialStyledComponent: ReturnType<typeof styled.div> = styled.div`
  ${reactSocialStyledCss}
`;

export const reactWysiwygStyledCss: ReturnType<typeof css> = css`
  /**
 * Styles extracted from: packages/@remirror/react-wysiwyg/src/components/wysiwyg-editor.tsx
 */
  .remirror-wysiwyg-editor .ProseMirror {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    box-sizing: border-box;
    position: relative;
    border-width: 1px;
    border-style: solid;
    border-color: black;
    box-shadow: 0 0 0 1px black;
    line-height: 1.625rem;
    border-radius: 8px;
    width: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    max-height: calc(90vh - 124px);
    min-height: 142px;
    padding: 8px;
    padding-right: 40px;
  }

  .remirror-wysiwyg-editor .ProseMirror p {
    margin: 0px;
    letter-spacing: 0.6px;
    color: text;
  }

  .remirror-wysiwyg-editor .ProseMirror a.mention {
    pointer-events: none;
    cursor: default;
  }

  .remirror-wysiwyg-editor .ProseMirror a {
    text-decoration: none !important;
    color: blue;
  }

  .remirror-wysiwyg-editor .ProseMirror:focus {
    outline: none;
    box-shadow: focus;
  }

  .remirror-wysiwyg-editor .ProseMirror .Prosemirror-selectednode {
    background-color: grey;
  }

  .remirror-wysiwyg-editor-container {
    position: relative;
    height: 100%;
  }
`;

export const ReactWysiwygStyledComponent: ReturnType<typeof styled.div> = styled.div`
  ${reactWysiwygStyledCss}
`;

export const themeStyledCss: ReturnType<typeof css> = css`
  /**
 * Styles extracted from: packages/@remirror/theme/src/theme-styles.ts
 */
  .remirror-theme {
    --remirror-color-black: #000000;
    --remirror-color-white: #ffffff;
    --remirror-color-text: #252103;
    --remirror-color-background: #ffffff;
    --remirror-color-primary: #7963d2;
    --remirror-color-secondary: #bcd263;
    --remirror-color-muted: #f1f3f5;
    --remirror-color-shadow-1: rgba(10, 31, 68, 0.08);
    --remirror-color-shadow-2: rgba(10, 31, 68, 0.1);
    --remirror-color-shadow-3: rgba(10, 31, 68, 0.12);
    --remirror-hue-gray-0: #f8f9fa;
    --remirror-hue-gray-1: #f1f3f5;
    --remirror-hue-gray-2: #e9ecef;
    --remirror-hue-gray-3: #dee2e6;
    --remirror-hue-gray-4: #ced4da;
    --remirror-hue-gray-5: #adb5bd;
    --remirror-hue-gray-6: #868e96;
    --remirror-hue-gray-7: #495057;
    --remirror-hue-gray-8: #343a40;
    --remirror-hue-gray-9: #212529;
    --remirror-hue-red-0: #fff5f5;
    --remirror-hue-red-1: #ffe3e3;
    --remirror-hue-red-2: #ffc9c9;
    --remirror-hue-red-3: #ffa8a8;
    --remirror-hue-red-4: #ff8787;
    --remirror-hue-red-5: #ff6b6b;
    --remirror-hue-red-6: #fa5252;
    --remirror-hue-red-7: #f03e3e;
    --remirror-hue-red-8: #e03131;
    --remirror-hue-red-9: #c92a2a;
    --remirror-hue-pink-0: #fff0f6;
    --remirror-hue-pink-1: #ffdeeb;
    --remirror-hue-pink-2: #fcc2d7;
    --remirror-hue-pink-3: #faa2c1;
    --remirror-hue-pink-4: #f783ac;
    --remirror-hue-pink-5: #f06595;
    --remirror-hue-pink-6: #e64980;
    --remirror-hue-pink-7: #d6336c;
    --remirror-hue-pink-8: #c2255c;
    --remirror-hue-pink-9: #a61e4d;
    --remirror-hue-grape-0: #f8f0fc;
    --remirror-hue-grape-1: #f3d9fa;
    --remirror-hue-grape-2: #eebefa;
    --remirror-hue-grape-3: #e599f7;
    --remirror-hue-grape-4: #da77f2;
    --remirror-hue-grape-5: #cc5de8;
    --remirror-hue-grape-6: #be4bdb;
    --remirror-hue-grape-7: #ae3ec9;
    --remirror-hue-grape-8: #9c36b5;
    --remirror-hue-grape-9: #862e9c;
    --remirror-hue-violet-0: #f3f0ff;
    --remirror-hue-violet-1: #e5dbff;
    --remirror-hue-violet-2: #d0bfff;
    --remirror-hue-violet-3: #b197fc;
    --remirror-hue-violet-4: #9775fa;
    --remirror-hue-violet-5: #845ef7;
    --remirror-hue-violet-6: #7950f2;
    --remirror-hue-violet-7: #7048e8;
    --remirror-hue-violet-8: #6741d9;
    --remirror-hue-violet-9: #5f3dc4;
    --remirror-hue-indigo-0: #edf2ff;
    --remirror-hue-indigo-1: #dbe4ff;
    --remirror-hue-indigo-2: #bac8ff;
    --remirror-hue-indigo-3: #91a7ff;
    --remirror-hue-indigo-4: #748ffc;
    --remirror-hue-indigo-5: #5c7cfa;
    --remirror-hue-indigo-6: #4c6ef5;
    --remirror-hue-indigo-7: #4263eb;
    --remirror-hue-indigo-8: #3b5bdb;
    --remirror-hue-indigo-9: #364fc7;
    --remirror-hue-blue-0: #e7f5ff;
    --remirror-hue-blue-1: #d0ebff;
    --remirror-hue-blue-2: #a5d8ff;
    --remirror-hue-blue-3: #74c0fc;
    --remirror-hue-blue-4: #4dabf7;
    --remirror-hue-blue-5: #339af0;
    --remirror-hue-blue-6: #228be6;
    --remirror-hue-blue-7: #1c7ed6;
    --remirror-hue-blue-8: #1971c2;
    --remirror-hue-blue-9: #1864ab;
    --remirror-hue-cyan-0: #e3fafc;
    --remirror-hue-cyan-1: #c5f6fa;
    --remirror-hue-cyan-2: #99e9f2;
    --remirror-hue-cyan-3: #66d9e8;
    --remirror-hue-cyan-4: #3bc9db;
    --remirror-hue-cyan-5: #22b8cf;
    --remirror-hue-cyan-6: #15aabf;
    --remirror-hue-cyan-7: #1098ad;
    --remirror-hue-cyan-8: #0c8599;
    --remirror-hue-cyan-9: #0b7285;
    --remirror-hue-teal-0: #e6fcf5;
    --remirror-hue-teal-1: #c3fae8;
    --remirror-hue-teal-2: #96f2d7;
    --remirror-hue-teal-3: #63e6be;
    --remirror-hue-teal-4: #38d9a9;
    --remirror-hue-teal-5: #20c997;
    --remirror-hue-teal-6: #12b886;
    --remirror-hue-teal-7: #0ca678;
    --remirror-hue-teal-8: #099268;
    --remirror-hue-teal-9: #087f5b;
    --remirror-hue-green-0: #ebfbee;
    --remirror-hue-green-1: #d3f9d8;
    --remirror-hue-green-2: #b2f2bb;
    --remirror-hue-green-3: #8ce99a;
    --remirror-hue-green-4: #69db7c;
    --remirror-hue-green-5: #51cf66;
    --remirror-hue-green-6: #40c057;
    --remirror-hue-green-7: #37b24d;
    --remirror-hue-green-8: #2f9e44;
    --remirror-hue-green-9: #2b8a3e;
    --remirror-hue-lime-0: #f4fce3;
    --remirror-hue-lime-1: #e9fac8;
    --remirror-hue-lime-2: #d8f5a2;
    --remirror-hue-lime-3: #c0eb75;
    --remirror-hue-lime-4: #a9e34b;
    --remirror-hue-lime-5: #94d82d;
    --remirror-hue-lime-6: #82c91e;
    --remirror-hue-lime-7: #74b816;
    --remirror-hue-lime-8: #66a80f;
    --remirror-hue-lime-9: #5c940d;
    --remirror-hue-yellow-0: #fff9db;
    --remirror-hue-yellow-1: #fff3bf;
    --remirror-hue-yellow-2: #ffec99;
    --remirror-hue-yellow-3: #ffe066;
    --remirror-hue-yellow-4: #ffd43b;
    --remirror-hue-yellow-5: #fcc419;
    --remirror-hue-yellow-6: #fab005;
    --remirror-hue-yellow-7: #f59f00;
    --remirror-hue-yellow-8: #f08c00;
    --remirror-hue-yellow-9: #e67700;
    --remirror-hue-orange-0: #fff4e6;
    --remirror-hue-orange-1: #ffe8cc;
    --remirror-hue-orange-2: #ffd8a8;
    --remirror-hue-orange-3: #ffc078;
    --remirror-hue-orange-4: #ffa94d;
    --remirror-hue-orange-5: #ff922b;
    --remirror-hue-orange-6: #fd7e14;
    --remirror-hue-orange-7: #f76707;
    --remirror-hue-orange-8: #e8590c;
    --remirror-hue-orange-9: #d9480f;
    --remirror-font-family-default: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', sans-serif;
    --remirror-font-family-heading: inherit;
    --remirror-font-family-mono: Menlo, monospace;
    --remirror-font-size-0: 12px;
    --remirror-font-size-1: 14px;
    --remirror-font-size-2: 16px;
    --remirror-font-size-3: 20px;
    --remirror-font-size-4: 24px;
    --remirror-font-size-5: 32px;
    --remirror-font-size-6: 48px;
    --remirror-font-size-7: 64px;
    --remirror-font-size-8: 96px;
    --remirror-font-size-default: 16px;
    --remirror-space-1: 4px;
    --remirror-space-2: 8px;
    --remirror-space-3: 16px;
    --remirror-space-4: 32px;
    --remirror-space-5: 64px;
    --remirror-space-6: 128px;
    --remirror-space-7: 256px;
    --remirror-space-8: 512px;
    --remirror-font-weight-bold: 700;
    --remirror-font-weight-default: 400;
    --remirror-font-weight-heading: 700;
    --remirror-letter-spacing-tight: -1px;
    --remirror-letter-spacing-default: normal;
    --remirror-letter-spacing-loose: 1px;
    --remirror-letter-spacing-wide: 3px;
    --remirror-line-height-heading: 1.25em;
    --remirror-line-height-default: 1.5em;

    font-family: var(--remirror-font-family-default);
    line-height: var(--remirror-line-height-default);
    font-weight: var(--remirror-font-weight-default);
  }

  .remirror-theme h1,
  .remirror-theme h2,
  .remirror-theme h3,
  .remirror-theme h4,
  .remirror-theme h5,
  .remirror-theme h6 {
    color: var(--remirror-color-text);
    font-family: var(--remirror-font-family-heading);
    line-height: var(--remirror-line-height-heading);
    font-weight: var(--remirror-font-weight-heading);
  }

  .remirror-theme h1 {
    font-size: var(--remirror-font-size-5);
  }

  .remirror-theme h2 {
    font-size: var(--remirror-font-size-4);
  }

  .remirror-theme h3 {
    font-size: var(--remirror-font-size-3);
  }

  .remirror-theme h4 {
    font-size: var(--remirror-font-size-2);
  }

  .remirror-theme h5 {
    font-size: var(--remirror-font-size-1);
  }

  .remirror-theme h6 {
    font-size: var(--remirror-font-size-0);
  }
`;

export const ThemeStyledComponent: ReturnType<typeof styled.div> = styled.div`
  ${themeStyledCss}
`;

export const allStyledCss: ReturnType<typeof css> = css`
  ${coreStyledCss}
  ${extensionBlockquoteStyledCss}
  ${extensionCalloutStyledCss}
  ${extensionGapCursorStyledCss}
  ${extensionPlaceholderStyledCss}
  ${extensionYjsStyledCss}
  ${presetTableStyledCss}
  ${reactSocialStyledCss}
  ${reactWysiwygStyledCss}
  ${themeStyledCss}
`;

export const AllStyledComponent: ReturnType<typeof styled.div> = styled.div`
  ${coreStyledCss}
  ${extensionBlockquoteStyledCss}
  ${extensionCalloutStyledCss}
  ${extensionGapCursorStyledCss}
  ${extensionPlaceholderStyledCss}
  ${extensionYjsStyledCss}
  ${presetTableStyledCss}
  ${reactSocialStyledCss}
  ${reactWysiwygStyledCss}
  ${themeStyledCss}
`;
