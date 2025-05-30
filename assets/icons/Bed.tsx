import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const BedIcon = ({ width = 20, height = 20, color = '#334155' }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 7.25C3 6.55964 3.55964 6 4.25 6H10.75C11.4404 6 12 6.55964 12 7.25V10H20C21.1046 10 22 10.8954 22 12V19C22 19.4142 21.6642 19.75 21.25 19.75C20.8358 19.75 20.5 19.4142 20.5 19V17.5H3.5V19C3.5 19.4142 3.16421 19.75 2.75 19.75C2.33579 19.75 2 19.4142 2 19V7.25ZM4.25 7.5C4.11193 7.5 4 7.61193 4 7.75V12.5H11.5V7.75C11.5 7.61193 11.3881 7.5 11.25 7.5H4.25Z"
      fill={color}
    />
  </Svg>
);

export default BedIcon;
