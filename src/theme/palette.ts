import {darkColors, lightColors} from './colors';

const palette = {
  // Background
  backgroundDefault: lightColors.white,
  backgroundMuted: lightColors.gray100,
  backgroundElevated: lightColors.gray50,
  backgroundOverlay: lightColors.overlay,
  backgroundInverse: lightColors.gray900,

  // Text
  textPrimary: lightColors.gray900,
  textSecondary: lightColors.gray600,
  textMuted: lightColors.gray400,
  textInverse: lightColors.white,
  textLink: lightColors.blue500,
  textDanger: lightColors.red700,

  // Border
  borderLight: lightColors.gray200,
  borderMedium: lightColors.gray400,
  borderDark: lightColors.gray600,
  borderFocus: lightColors.blue500,
  borderError: lightColors.red500,
  borderSuccess: lightColors.green500,

  // Primary
  primary: lightColors.blue500,
  primaryLight: lightColors.blue300,
  primaryDark: lightColors.blue700,

  // Secondary
  secondary: lightColors.purple500,
  secondaryLight: lightColors.purple300,
  secondaryDark: lightColors.purple700,

  // Success
  success: lightColors.green500,
  successLight: lightColors.green300,
  successDark: lightColors.green700,

  // Error
  error: lightColors.red500,
  errorLight: lightColors.red300,
  errorDark: lightColors.red700,

  // Warning
  warning: lightColors.amber500,
  warningLight: lightColors.amber300,
  warningDark: lightColors.amber700,

  // Info
  info: lightColors.cyan500,
  infoLight: lightColors.cyan300,
  infoDark: lightColors.cyan700,

  // Overlay
  overlayLight: lightColors.overlayLight,
  overlay: lightColors.overlay,
  overlayDark: lightColors.overlayDark,

  // Shadow
  shadow: lightColors.shadow,

  // Grays
  gray50: lightColors.gray50,
  gray100: lightColors.gray100,
  gray200: lightColors.gray200,
  gray300: lightColors.gray300,
  gray400: lightColors.gray400,
  gray500: lightColors.gray500,
  gray600: lightColors.gray600,
  gray700: lightColors.gray700,
  gray800: lightColors.gray800,
  gray900: lightColors.gray900,

  // All other color scales are available via lightColors
};

const darkPalette = {
  backgroundDefault: darkColors.white,
  backgroundMuted: darkColors.gray100,
  backgroundElevated: darkColors.gray50,
  backgroundOverlay: darkColors.overlay,
  backgroundInverse: darkColors.gray900,

  textPrimary: darkColors.gray900,
  textSecondary: darkColors.gray600,
  textMuted: darkColors.gray400,
  textInverse: darkColors.white,
  textLink: darkColors.blue500,
  textDanger: darkColors.red700,

  borderLight: darkColors.gray200,
  borderMedium: darkColors.gray400,
  borderDark: darkColors.gray600,
  borderFocus: darkColors.blue500,
  borderError: darkColors.red500,
  borderSuccess: darkColors.green500,

  primary: darkColors.blue500,
  primaryLight: darkColors.blue300,
  primaryDark: darkColors.blue700,

  secondary: darkColors.purple500,
  secondaryLight: darkColors.purple300,
  secondaryDark: darkColors.purple700,

  success: darkColors.green500,
  successLight: darkColors.green300,
  successDark: darkColors.green700,

  error: darkColors.red500,
  errorLight: darkColors.red300,
  errorDark: darkColors.red700,

  warning: darkColors.amber500,
  warningLight: darkColors.amber300,
  warningDark: darkColors.amber700,

  info: darkColors.cyan500,
  infoLight: darkColors.cyan300,
  infoDark: darkColors.cyan700,

  overlayLight: darkColors.overlayLight,
  overlay: darkColors.overlay,
  overlayDark: darkColors.overlayDark,

  shadow: darkColors.shadow,

  gray50: darkColors.gray50,
  gray100: darkColors.gray100,
  gray200: darkColors.gray200,
  gray300: darkColors.gray300,
  gray400: darkColors.gray400,
  gray500: darkColors.gray500,
  gray600: darkColors.gray600,
  gray700: darkColors.gray700,
  gray800: darkColors.gray800,
  gray900: darkColors.gray900,

  // All other color scales are available via darkColors
};

export function getLightPalette() {
  return palette;
}

export function getDarkPalette() {
  return darkPalette;
}

export type Palette = typeof palette;
export type PaletteKey = keyof Palette;
