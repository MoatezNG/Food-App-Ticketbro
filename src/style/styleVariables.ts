import {scale} from 'react-native-size-matters/extend';
const baseFontSize = {
  xSmall: 10,
  small: 13.33,
  medium: 17,
  xmedium: 22,
  large: 24.8,
  xLarge: 34,
};
export const COLORS = {
  PRIMARY: '#FA4A0C',
  SECONDARY: '#ADADAF',
  BACKGROUND: '#E5E5E5',
  SECONDARYLIGHTER: '#EFEEEE',
};
export const FONT_SIZE = {
  xSmall: scale(baseFontSize.xSmall),
  small: scale(baseFontSize.small),
  medium: scale(baseFontSize.medium),
  xmedium: scale(baseFontSize.xmedium),
  large: scale(baseFontSize.large),
  xLarge: scale(baseFontSize.xLarge),
};

export const DEFAULT_SPACE = scale(10);
