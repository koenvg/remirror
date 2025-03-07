import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';

import { ExtensionPriority, isEmptyArray, isUndefined } from '@remirror/core';
import {
  EmojiExtension,
  EmojiObject,
  EmojiSuggestCommand,
  EmojiSuggestionChangeHandler,
} from '@remirror/extension-emoji';
import type { SuggestChangeHandlerParameter } from '@remirror/pm/suggest';
import { useExtension, useRemirror } from '@remirror/react';

import { indexFromArrowPress } from './react-hook-utils';
import { useKeymap } from './use-keymap';

export interface EmojiState extends Pick<SuggestChangeHandlerParameter, 'range'> {
  /**
   * The list of emoji generated by the query.
   *
   * @default []
   */
  list: EmojiObject[];

  /**
   * The index of the currently matched emoji.
   *
   * @default 0
   */
  index: number;

  /**
   * The command to run to replace the query with the request emoji.
   *
   * @default undefined
   */
  command: EmojiSuggestCommand;
}

/**
 * A hook for managing changes in the emoji suggestions.
 */
function useEmojiChangeHandler(setState: SetEmojiState) {
  const onChange: EmojiSuggestionChangeHandler = useCallback(
    (parameter, command) => {
      const { emojiMatches, exitReason, changeReason, range } = parameter;

      if (changeReason) {
        setState({
          list: emojiMatches,
          index: 0,
          command: (emoji, skinVariation) => {
            setState(null);
            return command(emoji, skinVariation);
          },
          range,
        });
      }

      if (exitReason) {
        setState(null);
      }
    },
    [setState],
  );

  useExtension(
    EmojiExtension,
    ({ addHandler }) => {
      return addHandler('onChange', onChange);
    },
    [onChange],
  );
}

/**
 * A hook for adding keybindings to the emoji dropdown.
 */
function useEmojiKeyBindings(setState: SetEmojiState, state: EmojiState | null) {
  const { helpers } = useRemirror();

  /**
   * Create the arrow bindings for the emoji suggesters.
   */
  const createArrowBinding = useCallback(
    (key: 'up' | 'down') => () => {
      if (!state || isEmptyArray(state.list)) {
        return false;
      }

      const { list, index } = state;

      const direction = key === 'up' ? 'previous' : 'next';

      const activeIndex = indexFromArrowPress({
        direction,
        matchLength: list.length,
        previousIndex: index,
      });

      setState({ ...state, index: activeIndex });

      return true;
    },
    [state, setState],
  );

  const ArrowUp = useMemo(() => createArrowBinding('up'), [createArrowBinding]);
  const ArrowDown = useMemo(() => createArrowBinding('down'), [createArrowBinding]);

  const bindings = useMemo(
    () => ({
      /**
       * Handle the enter key being pressed
       */
      Enter: () => {
        if (!state || isEmptyArray(state.list)) {
          return false;
        }

        const { list, command, index } = state;

        const emoji: EmojiObject | undefined = list[index];

        // Check if a matching id exists because the user has selected
        // something.
        if (isUndefined(emoji)) {
          return false;
        }

        command(emoji);

        return true;
      },

      /**
       * Clear suggestions when the escape key is pressed.
       */
      Escape: () => {
        if (!state) {
          return false;
        }

        // Ignore the current mention so that it doesn't show again for this
        // matching area
        helpers
          .getSuggestMethods()
          .addIgnored({ from: state.range.from, name: 'emoji', specific: true });

        setState(null);
        return true;
      },

      ArrowDown,
      ArrowUp,
    }),
    [ArrowDown, ArrowUp, state, helpers, setState],
  );

  useKeymap(bindings, ExtensionPriority.High);
}

type SetEmojiState = Dispatch<SetStateAction<EmojiState | null>>;

/**
 * This hook provides the state for setting up an emoji state change handler. It
 * applies the keybindings and the required change handlers.
 *
 *
 */
export function useEmoji(): EmojiState | null {
  const [state, setState] = useState<EmojiState | null>(null);

  useEmojiChangeHandler(setState);
  useEmojiKeyBindings(setState, state);

  return state;
}
