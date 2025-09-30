import * as React from "react";
import Svg, { Circle, SvgProps } from "react-native-svg";
const SplashTop = (props:SvgProps) => (
  <Svg
    width={184}
    height={103}
    viewBox="0 0 184 103"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      opacity={0.05}
      cx={48.5}
      cy={-32.5001}
      r={88.5}
      transform="rotate(90 48.5 -32.5001)"
      stroke="#1E1E2E"
      strokeWidth={94}
      strokeDasharray="4 4"
    />
  </Svg>
);
export default SplashTop;
