import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
const OpenEyeIcon = (props:SvgProps) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_7_435)">
      <Path
        d="M0.873047 12.0811C0.873047 12.0811 4.87305 4.08105 11.873 4.08105C18.873 4.08105 22.873 12.0811 22.873 12.0811C22.873 12.0811 18.873 20.0811 11.873 20.0811C4.87305 20.0811 0.873047 12.0811 0.873047 12.0811Z"
        stroke="#B4B9CA"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.873 15.0811C13.5299 15.0811 14.873 13.7379 14.873 12.0811C14.873 10.4242 13.5299 9.08105 11.873 9.08105C10.2162 9.08105 8.87305 10.4242 8.87305 12.0811C8.87305 13.7379 10.2162 15.0811 11.873 15.0811Z"
        stroke="#B4B9CA"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_7_435">
        <Rect width={24.6486} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default OpenEyeIcon;
