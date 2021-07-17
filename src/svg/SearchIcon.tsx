import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SearchIcon = (props: SvgProps) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M19 19l-4.35-4.35M17 9A8 8 0 111 9a8 8 0 0116 0z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SearchIcon;
