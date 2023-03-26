import { extendTheme } from '@chakra-ui/react';
import tokens from '@contentful/f36-tokens';

import { colors } from './colors';

export const theme = extendTheme({
  f36: tokens,
  styles: {
    global: {
      body: {
        color: colors.grey.dark,
        bg: colors.beige.light,
      },
    },
  },
  colors: {
    brand: {...colors},
  },
});

export type CustomTheme = typeof theme;
