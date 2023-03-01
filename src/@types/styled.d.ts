import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
      LIGHT_BLUE: string,
      DARK_BLUE: string,

      MOSTARDA: string,

      CORAL_200: string,
      CORAL_100: string,

      BACKGROUND_1: string,
      BACKGROUND_2: string,
      BACKGROUND_3: string,

      WHITE: string,
      GRAY: string
    },

    FONTS: {
      TITLE: string,
      TEXT: string
    }
  }
}
