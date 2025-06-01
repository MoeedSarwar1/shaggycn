import colors, {darkColors} from './colors';

const palette = {
  // Background
  backgroundDefault: colors.white,
  backgroundMuted: colors.gray100,
  backgroundElevated: colors.gray50,
  backgroundOverlay: colors.overlay,
  backgroundInverse: colors.gray900,

  // Text
  textPrimary: colors.gray900,
  textSecondary: colors.gray600,
  textMuted: colors.gray400,
  textInverse: colors.white,
  textLink: colors.primary,
  textDanger: colors.errorDark,

  // Border
  borderLight: colors.gray200,
  borderMedium: colors.gray400,
  borderDark: colors.gray600,
  borderFocus: colors.primary,
  borderError: colors.error,
  borderSuccess: colors.success,

  // Primary
  primary: colors.primary,
  primaryLight: colors.primaryLight,
  primaryDark: colors.primaryDark,
  primaryTint: colors.primaryTint,
  primaryShade: colors.primaryShade,

  // Secondary
  secondary: colors.secondary,
  secondaryLight: colors.secondaryLight,
  secondaryDark: colors.secondaryDark,
  secondaryTint: colors.secondaryTint,
  secondaryShade: colors.secondaryShade,

  // Tertiary
  tertiary: colors.tertiary,
  tertiaryLight: colors.tertiaryLight,
  tertiaryDark: colors.tertiaryDark,
  tertiaryTint: colors.tertiaryTint,
  tertiaryShade: colors.tertiaryShade,

  // Success
  success: colors.success,
  successLight: colors.successLight,
  successDark: colors.successDark,
  successTint: colors.successTint,
  successShade: colors.successShade,

  // Error
  error: colors.error,
  errorLight: colors.errorLight,
  errorDark: colors.errorDark,
  errorTint: colors.errorTint,
  errorShade: colors.errorShade,

  // Warning
  warning: colors.warning,
  warningLight: colors.warningLight,
  warningDark: colors.warningDark,
  warningTint: colors.warningTint,
  warningShade: colors.warningShade,

  // Info
  info: colors.info,
  infoLight: colors.infoLight,
  infoDark: colors.infoDark,
  infoTint: colors.infoTint,
  infoShade: colors.infoShade,

  // Overlay
  overlayLight: colors.overlayLight,
  overlay: colors.overlay,
  overlayDark: colors.overlayDark,

  // Shadow
  shadow: colors.shadow,

  // Grays
  gray50: colors.gray50,
  gray100: colors.gray100,
  gray200: colors.gray200,
  gray300: colors.gray300,
  gray400: colors.gray400,
  gray500: colors.gray500,
  gray600: colors.gray600,
  gray700: colors.gray700,
  gray800: colors.gray800,
  gray900: colors.gray900,
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
  textLink: darkColors.primary,
  textDanger: darkColors.errorDark,

  borderLight: darkColors.gray200,
  borderMedium: darkColors.gray400,
  borderDark: darkColors.gray600,
  borderFocus: darkColors.primary,
  borderError: darkColors.error,
  borderSuccess: darkColors.success,

  primary: darkColors.primary,
  primaryLight: darkColors.primaryLight,
  primaryDark: darkColors.primaryDark,
  primaryTint: darkColors.primaryTint,
  primaryShade: darkColors.primaryShade,

  secondary: darkColors.secondary,
  secondaryLight: darkColors.secondaryLight,
  secondaryDark: darkColors.secondaryDark,
  secondaryTint: darkColors.secondaryTint,
  secondaryShade: darkColors.secondaryShade,

  tertiary: darkColors.tertiary,
  tertiaryLight: darkColors.tertiaryLight,
  tertiaryDark: darkColors.tertiaryDark,
  tertiaryTint: darkColors.tertiaryTint,
  tertiaryShade: darkColors.tertiaryShade,

  success: darkColors.success,
  successLight: darkColors.successLight,
  successDark: darkColors.successDark,
  successTint: darkColors.successTint,
  successShade: darkColors.successShade,

  error: darkColors.error,
  errorLight: darkColors.errorLight,
  errorDark: darkColors.errorDark,
  errorTint: darkColors.errorTint,
  errorShade: darkColors.errorShade,

  warning: darkColors.warning,
  warningLight: darkColors.warningLight,
  warningDark: darkColors.warningDark,
  warningTint: darkColors.warningTint,
  warningShade: darkColors.warningShade,

  info: darkColors.info,
  infoLight: darkColors.infoLight,
  infoDark: darkColors.infoDark,
  infoTint: darkColors.infoTint,
  infoShade: darkColors.infoShade,

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
};

export function getLightPalette() {
  return palette;
}

export function getDarkPalette() {
  return darkPalette;
}
