import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      // primary
      primary100: string;
      primary200: string;
      primary300: string;
      primary400: string;
      primary500: string;
      primary600: string;
      primary700: string;
      primary800: string;

      // danger
      danger100: string;
      danger200: string;
      danger300: string;
      danger400: string;
      danger500: string;
      danger600: string;
      danger700: string;
      danger800: string;

      // yellow
      yellow100: string;
      yellow200: string;
      yellow300: string;
      yellow400: string;
      yellow500: string;
      yellow600: string;
      yellow700: string;
      yellow800: string;

      // grey
      grey000: string;
      grey100: string;
      grey200: string;
      grey300: string;
      grey400: string;
      grey500: string;
      grey600: string;
      grey700: string;
      grey800: string;
      grey900: string;

      // white
      white100: string;

      // black
      black100: string;
    };

    fonts: {
      title1: {
        lineHeight: string;
        letterSpacing: string;
        fontSize: string;
      };
      title2: {
        lineHeight: string;
        letterSpacing: string;
        fontSize: string;
      };
      title3: {
        lineHeight: string;
        letterSpacing: string;
        fontSize: string;
      };
      title4: {
        lineHeight: string;
        letterSpacing: string;
        fontSize: string;
      };
      title5: {
        lineHeight: string;
        letterSpacing: string;
        fontSize: string;
      };

      body1Regular: {
        lineHeight: string;
        letterSpacing: string;
        fontSize: string;
      };
      body1bold: {
        lineHeight: string;
        letterSpacing: string;
        fontSize: string;
        fontWeight: string;
      };
      body2Regular: {
        lineHeight: string;
        letterSpacing: string;
        fontSize: string;
      };
      body2bold: {
        lineHeight: string;
        letterSpacing: string;
        fontSize: string;
        fontWeight: string;
      };
      body3Regular: {
        lineHeight: string;
        fontSize: string;
      };
      body3bold: {
        lineHeight: string;
        fontSize: string;
        fontWeight: string;
      };

      caption1Regular: {
        lineHeight: string;
        fontSize: string;
      };
      caption1Bold: {
        lineHeight: string;
        fontSize: string;
        fontWeight: string;
      };
      caption2Regular: {
        lineHeight: string;
        fontSize: string;
      };
      caption2Bold: {
        lineHeight: string;
        fontSize: string;
        fontWeight: string;
      };
    };

    theme: {
      colors: colors;
      fonts: fonts;
    };
  }
}
