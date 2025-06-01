// packages/theme/palette.ts

import colors, {darkColors} from './colors';

const palette = {
  background: {
    default: colors.white,
    muted: colors.gray100,
    elevated: colors.gray50,
    overlay: colors.overlay,
    inverse: colors.gray900,
  },
  text: {
    primary: colors.gray900,
    secondary: colors.gray600,
    muted: colors.gray400,
    inverse: colors.white,
    link: colors.primary,
    danger: colors.errorDark,
  },
  border: {
    light: colors.gray200,
    medium: colors.gray400,
    dark: colors.gray600,
    focus: colors.primary,
    error: colors.error,
    success: colors.success,
  },
  primary: {
    default: colors.primary,
    light: colors.primaryLight,
    dark: colors.primaryDark,
    tint: colors.primaryTint,
    shade: colors.primaryShade,
  },
  secondary: {
    default: colors.secondary,
    light: colors.secondaryLight,
    dark: colors.secondaryDark,
    tint: colors.secondaryTint,
    shade: colors.secondaryShade,
  },
  tertiary: {
    default: colors.tertiary,
    light: colors.tertiaryLight,
    dark: colors.tertiaryDark,
    tint: colors.tertiaryTint,
    shade: colors.tertiaryShade,
  },
  success: {
    default: colors.success,
    light: colors.successLight,
    dark: colors.successDark,
    tint: colors.successTint,
    shade: colors.successShade,
  },
  error: {
    default: colors.error,
    light: colors.errorLight,
    dark: colors.errorDark,
    tint: colors.errorTint,
    shade: colors.errorShade,
  },
  warning: {
    default: colors.warning,
    light: colors.warningLight,
    dark: colors.warningDark,
    tint: colors.warningTint,
    shade: colors.warningShade,
  },
  info: {
    default: colors.info,
    light: colors.infoLight,
    dark: colors.infoDark,
    tint: colors.infoTint,
    shade: colors.infoShade,
  },
  overlay: {
    light: colors.overlayLight,
    default: colors.overlay,
    dark: colors.overlayDark,
  },
  shadow: {
    default: colors.shadow,
  },
  gray: {
    50: colors.gray50,
    100: colors.gray100,
    200: colors.gray200,
    300: colors.gray300,
    400: colors.gray400,
    500: colors.gray500,
    600: colors.gray600,
    700: colors.gray700,
    800: colors.gray800,
    900: colors.gray900,
  },
};

const darkPalette = {
  background: {
    default: darkColors.white,
    muted: darkColors.gray100,
    elevated: darkColors.gray50,
    overlay: darkColors.overlay,
    inverse: darkColors.gray900,
  },
  text: {
    primary: darkColors.gray900,
    secondary: darkColors.gray600,
    muted: darkColors.gray400,
    inverse: darkColors.white,
    link: darkColors.primary,
    danger: darkColors.errorDark,
  },
  border: {
    light: darkColors.gray200,
    medium: darkColors.gray400,
    dark: darkColors.gray600,
    focus: darkColors.primary,
    error: darkColors.error,
    success: darkColors.success,
  },
  primary: {
    default: darkColors.primary,
    light: darkColors.primaryLight,
    dark: darkColors.primaryDark,
    tint: darkColors.primaryTint,
    shade: darkColors.primaryShade,
  },
  secondary: {
    default: darkColors.secondary,
    light: darkColors.secondaryLight,
    dark: darkColors.secondaryDark,
    tint: darkColors.secondaryTint,
    shade: darkColors.secondaryShade,
  },
  tertiary: {
    default: darkColors.tertiary,
    light: darkColors.tertiaryLight,
    dark: darkColors.tertiaryDark,
    tint: darkColors.tertiaryTint,
    shade: darkColors.tertiaryShade,
  },
  success: {
    default: darkColors.success,
    light: darkColors.successLight,
    dark: darkColors.successDark,
    tint: darkColors.successTint,
    shade: darkColors.successShade,
  },
  error: {
    default: darkColors.error,
    light: darkColors.errorLight,
    dark: darkColors.errorDark,
    tint: darkColors.errorTint,
    shade: darkColors.errorShade,
  },
  warning: {
    default: darkColors.warning,
    light: darkColors.warningLight,
    dark: darkColors.warningDark,
    tint: darkColors.warningTint,
    shade: darkColors.warningShade,
  },
  info: {
    default: darkColors.info,
    light: darkColors.infoLight,
    dark: darkColors.infoDark,
    tint: darkColors.infoTint,
    shade: darkColors.infoShade,
  },
  overlay: {
    light: darkColors.overlayLight,
    default: darkColors.overlay,
    dark: darkColors.overlayDark,
  },
  shadow: {
    default: darkColors.shadow,
  },
  gray: {
    50: darkColors.gray50,
    100: darkColors.gray100,
    200: darkColors.gray200,
    300: darkColors.gray300,
    400: darkColors.gray400,
    500: darkColors.gray500,
    600: darkColors.gray600,
    700: darkColors.gray700,
    800: darkColors.gray800,
    900: darkColors.gray900,
  },
};

export function getLightPalette() {
  return palette;
}

export function getDarkPalette() {
  return darkPalette;
}
