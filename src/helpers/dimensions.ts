import {Dimensions} from 'react-native';

export const {height, width} = Dimensions.get('window');
export const deviceH = Math.max(
  Dimensions.get('screen').height,
  Dimensions.get('screen').width,
);
export const vmin = Math.min(height, width) / 100;
export const vmax = Math.max(height, width) / 100;
