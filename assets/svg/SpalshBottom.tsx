import * as React from "react";
import Svg, { Ellipse, Defs, LinearGradient, Stop, SvgProps } from "react-native-svg";
const SplashBottom = (props:SvgProps) => (
  <Svg
    width={217}
    height={246}
    viewBox="0 0 217 246"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Ellipse
      cx={247.5}
      cy={246}
      rx={146}
      ry={147.5}
      transform="rotate(90 247.5 246)"
      stroke="url(#paint0_linear_38_1924)"
      strokeWidth={200}
      strokeDasharray="6 6"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_38_1924"
        x1={247.12}
        y1={206.833}
        x2={233.65}
        y2={481.82}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFD88C" />
        <Stop offset={1} stopColor="#FF7622" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SplashBottom;
