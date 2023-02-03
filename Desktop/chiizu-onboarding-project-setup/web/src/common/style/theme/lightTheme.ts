import { createTheme } from "@fluentui/react";

import FontFamily from "common/style/enums/fontFamily";

const themePrimaryLight = "#67DEF2";
const pureWhite = "#fff";
const menuItemBackgroundHovered = "#F6F7F9";
const errorText = "#C22929";
const inputPlaceholderText = "#B2C2CD";
const disabledBackground = "#F8F8FB";
const inputIcon = "#91A1BB";
const borderColor = "#F1F3F4";

const lightTheme = createTheme({
  defaultFontStyle: {
    fontFamily: FontFamily.GraphikRegular,
    MozOsxFontSmoothing: "antialiased",
    WebkitFontSmoothing: "antialiased",
  },
  palette: {
    themePrimary: "#2a82ff",
    themeLighterAlt: "#f6faff",
    themeLighter: "#ddebff",
    themeLight: "#bfdaff",
    themeTertiary: "#7eb4ff",
    themeSecondary: "#4391ff",
    themeDarkAlt: "#2575e6",
    themeDark: "#1475FF",
    themeDarker: "#0D5ED1",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#f3f2f1",
    neutralLight: "#edebe9",
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c6c4",
    neutralTertiary: "#a19f9d",
    neutralSecondary: "#717185",
    neutralPrimaryAlt: "#3b3a39",
    neutralPrimary: "#323130",
    neutralDark: "#201f1e",
    black: "#000000",
    white: "#ffffff",
  },
  semanticColors: {
    // Default button
    buttonBackground: pureWhite,
    buttonTextHovered: pureWhite,

    // Primary button
    primaryButtonBackgroundHovered: themePrimaryLight,
    primaryButtonBackgroundPressed: themePrimaryLight,

    // Callout buttons(menu items)
    menuItemBackgroundHovered,
    menuBackground: pureWhite,

    // Card
    cardShadow: "#1e1e1e12",

    // Input
    errorText,
    inputPlaceholderText,
    inputBorder: inputPlaceholderText,
    inputBorderHovered: inputPlaceholderText,
    inputBackground: pureWhite,
    disabledBackground,
    inputIcon,
    bodyDivider: borderColor
  },
});

export default lightTheme;