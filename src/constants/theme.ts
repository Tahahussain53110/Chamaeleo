import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#283278',
  secondary: '#8E2B29',
};

export const SIZES = {
  largTitle: 32,
  title: 24,
  subTitle: 20,

  h: 18,
  h1: 16,
  h2: 15,
  h3: 14,
  h4: 12,

  body1: 16,
  body2: 15,
  body3: 14,
  body4: 12,
  small: 12,
  xsmall: 10,

  arrow_down: 16,
  calender: 20,

  width,
  height,
};

export const FONTS = {
  heading: 'FuzzyBubbles-Bold',
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
