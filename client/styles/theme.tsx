import { Theme } from "@emotion/react";

const colors = {
  // primary
  primary100: '#e7f9f9',
  primary200: '#b9eeee',
  primary300: '#8be4e4',
  primary400: '#5cdede',
  primary500: '#2ed5d5',
  primary600: '#00c4c4',
  primary700: '#00b2b2',
  primary800: '#00a2a2',

  // danger
  danger100: '#fff1f1',
  danger200: '#ffd5d5',
  danger300: '#ffb9b9',
  danger400: '#ff9d9d',
  danger500: '#ff8181',
  danger600: '#f66',
  danger700: '#f25555',
  danger800: '#e54545',

  // yellow
  yellow100: '#fff8e7',
  yellow200: '#ffeab9',
  yellow300: '#ffdd8b',
  yellow400: '#ffcc4c',
  yellow500: '#ffbe1a',
  yellow600: '#ffad15',
  yellow700: '#faa60a',
  yellow800: '#f69301',

  // grey
  grey000: '#f9fafb',
  grey100: '#f2f4f6',
  grey200: '#e9ecef',
  grey300: '#dde2e6',
  grey400: '#cdd3d8',
  grey500: '#adb5bd',
  grey600: '#868e96',
  grey700: '#495057',
  grey800: '#343a40',
  grey900: '#212529',

  // white
  white100: '#fff',

  // black
  black100: '#000',
};

const fonts = {
  title1: {
    lineHeight: "48px",
    letterSpacing: "-0.6px",
    fontSize: "36px",
  },
  title2: {
    lineHeight: "44px",
    letterSpacing: "-0.6px",
    fontSize: "32px",
  },
  title3: {
    lineHeight: "38px",
    letterSpacing: "-0.6px",
    fontSize: "28px",
  },
  title4: {
    lineHeight: "34px",
    letterSpacing: "-0.51px",
    fontSize: "24px",
  },
  title5: {
    lineHeight: "30px",
    letterSpacing: "-0.6px",
    fontSize: "20px",
  },

  body1Regular: {
    lineHeight: "28px",
    letterSpacing: "-0.6px",
    fontSize: "18px",
  },
  body1bold: {
    lineHeight: "28px",
    letterSpacing: "-0.6px",
    fontSize: "18px",
    fontWeight: "700"
  },
  body2Regular: {
    lineHeight: "28px",
    letterSpacing: "-0.3px",
    fontSize: "16px",
  },
  body2bold: {
    lineHeight: "28px",
    letterSpacing: "-0.3px",
    fontSize: "16px",
    fontWeight: "700"
  },
  body3Regular: {
    lineHeight: "20px",
    fontSize: "14px",
  },
  body3bold: {
    lineHeight: "20px",
    fontSize: "14px",
    fontWeight: "700"
  },
  
  caption1Regular: {
    lineHeight: "18px",
    fontSize: "12px",
  },
  caption1Bold: {
    lineHeight: "18px",
    fontSize: "12px",
    fontWeight: "700"
  },
  caption2Regular: {
    lineHeight: "14px",
    fontSize: "10px",
  },
  caption2Bold: {
    lineHeight: "14px",
    fontSize: "10px",
    fontWeight: "700"
  },
};

const theme: Theme = {
  colors,
  fonts,
};

export default theme;