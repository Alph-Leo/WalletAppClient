import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')

export const COLORS = {

    //base colors
  primary: "#24C168", // green
  secondary: "#0C381F", // dark green

  lime: "#00BA63",
  emerald: "#2BC978",

  red: "#FF4134",
  lightRed: "#FFF1F0",

  purple: "#683CE9",
  lightPurple: "F3EFFF",

  yellow: "#FFC664",
  lightYellow: "FFF9EC",

  green: "#66D59A",
  lightGreen: "#E6FEF0",

  black: "#1E1F20",
  white: "#FFFFFF",

  darkGray: "#C3C6C7",
  lightGray: "#FCFBFC",
  gray: "#C1C3C5",
  
  transparent: "transparent",
  
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimension
  height,
  width
};

export const FONTS = {
  largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 30 },
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
  body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = {COLORS, SIZES, FONTS};
export default appTheme;
