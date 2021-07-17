import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const MenuIcon = (props: SvgProps) => {
  return (
    <Svg width="25" height="17" viewBox="0 0 25 17" fill="none" {...props}>
      <Path
        d="M1.59857 8.33333H13.5M1.59857 1H23.5986M1.59857 15.6667H23.5986"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default MenuIcon;
