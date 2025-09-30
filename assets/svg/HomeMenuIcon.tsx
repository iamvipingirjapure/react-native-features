import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const HomeMenuIcon = (props:SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4 18H14"
      stroke="#181C2E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 12L20 12"
      stroke="#181C2E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 6H10"
      stroke="#181C2E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default HomeMenuIcon;
