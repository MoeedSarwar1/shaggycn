import {darkColors, lightColors} from './colors';

const palette = {
  // Primary
  primary50: lightColors.blue50,
  primary100: lightColors.blue100,
  primary200: lightColors.blue200,
  primary300: lightColors.blue300,
  primary400: lightColors.blue400,
  primary500: lightColors.blue500,
  primary600: lightColors.blue600,
  primary700: lightColors.blue700,
  primary800: lightColors.blue800,
  primary900: lightColors.blue900,

  // Secondary
  secondary50: lightColors.purple50,
  secondary100: lightColors.purple100,
  secondary200: lightColors.purple200,
  secondary300: lightColors.purple300,
  secondary400: lightColors.purple400,
  secondary500: lightColors.purple500,
  secondary600: lightColors.purple600,
  secondary700: lightColors.purple700,
  secondary800: lightColors.purple800,
  secondary900: lightColors.purple900,

  // Success
  success50: lightColors.green50,
  success100: lightColors.green100,
  success200: lightColors.green200,
  success300: lightColors.green300,
  success400: lightColors.green400,
  success500: lightColors.green500,
  success600: lightColors.green600,
  success700: lightColors.green700,
  success800: lightColors.green800,
  success900: lightColors.green900,

  // Error
  error50: lightColors.red50,
  error100: lightColors.red100,
  error200: lightColors.red200,
  error300: lightColors.red300,
  error400: lightColors.red400,
  error500: lightColors.red500,
  error600: lightColors.red600,
  error700: lightColors.red700,
  error800: lightColors.red800,
  error900: lightColors.red900,

  // Warning
  warning50: lightColors.amber50,
  warning100: lightColors.amber100,
  warning200: lightColors.amber200,
  warning300: lightColors.amber300,
  warning400: lightColors.amber400,
  warning500: lightColors.amber500,
  warning600: lightColors.amber600,
  warning700: lightColors.amber700,
  warning800: lightColors.amber800,
  warning900: lightColors.amber900,

  // Info
  info50: lightColors.cyan50,
  info100: lightColors.cyan100,
  info200: lightColors.cyan200,
  info300: lightColors.cyan300,
  info400: lightColors.cyan400,
  info500: lightColors.cyan500,
  info600: lightColors.cyan600,
  info700: lightColors.cyan700,
  info800: lightColors.cyan800,
  info900: lightColors.cyan900,

  // Muted/Gray
  muted50: lightColors.gray50,
  muted100: lightColors.gray100,
  muted200: lightColors.gray200,
  muted300: lightColors.gray300,
  muted400: lightColors.gray400,
  muted500: lightColors.gray500,
  muted600: lightColors.gray600,
  muted700: lightColors.gray700,
  muted800: lightColors.gray800,
  muted900: lightColors.gray900,

  // Backgrounds and Surfaces
  background: lightColors.white,
  surface: lightColors.gray50,
  onPrimary: lightColors.white,
  onSecondary: lightColors.white,
  onBackground: lightColors.gray900,
  onSurface: lightColors.gray900,
  onError: lightColors.white,

  // Tertiary
  tertiary50: lightColors.teal50,
  tertiary100: lightColors.teal100,
  tertiary200: lightColors.teal200,
  tertiary300: lightColors.teal300,
  tertiary400: lightColors.teal400,
  tertiary500: lightColors.teal500,
  tertiary600: lightColors.teal600,
  tertiary700: lightColors.teal700,
  tertiary800: lightColors.teal800,
  tertiary900: lightColors.teal900,

  // Neutral
  neutral50: lightColors.neutral50,
  neutral100: lightColors.neutral100,
  neutral200: lightColors.neutral200,
  neutral300: lightColors.neutral300,
  neutral400: lightColors.neutral400,
  neutral500: lightColors.neutral500,
  neutral600: lightColors.neutral600,
  neutral700: lightColors.neutral700,
  neutral800: lightColors.neutral800,
  neutral900: lightColors.neutral900,
  neutral950: lightColors.neutral950,
};

const darkPalette = {
  // Primary
  primary50: darkColors.blue50,
  primary100: darkColors.blue100,
  primary200: darkColors.blue200,
  primary300: darkColors.blue300,
  primary400: darkColors.blue400,
  primary500: darkColors.blue500,
  primary600: darkColors.blue600,
  primary700: darkColors.blue700,
  primary800: darkColors.blue800,
  primary900: darkColors.blue900,

  // Secondary
  secondary50: darkColors.purple50,
  secondary100: darkColors.purple100,
  secondary200: darkColors.purple200,
  secondary300: darkColors.purple300,
  secondary400: darkColors.purple400,
  secondary500: darkColors.purple500,
  secondary600: darkColors.purple600,
  secondary700: darkColors.purple700,
  secondary800: darkColors.purple800,
  secondary900: darkColors.purple900,

  // Success
  success50: darkColors.green50,
  success100: darkColors.green100,
  success200: darkColors.green200,
  success300: darkColors.green300,
  success400: darkColors.green400,
  success500: darkColors.green500,
  success600: darkColors.green600,
  success700: darkColors.green700,
  success800: darkColors.green800,
  success900: darkColors.green900,

  // Error
  error50: darkColors.red50,
  error100: darkColors.red100,
  error200: darkColors.red200,
  error300: darkColors.red300,
  error400: darkColors.red400,
  error500: darkColors.red500,
  error600: darkColors.red600,
  error700: darkColors.red700,
  error800: darkColors.red800,
  error900: darkColors.red900,

  // Warning
  warning50: darkColors.amber50,
  warning100: darkColors.amber100,
  warning200: darkColors.amber200,
  warning300: darkColors.amber300,
  warning400: darkColors.amber400,
  warning500: darkColors.amber500,
  warning600: darkColors.amber600,
  warning700: darkColors.amber700,
  warning800: darkColors.amber800,
  warning900: darkColors.amber900,

  // Info
  info50: darkColors.cyan50,
  info100: darkColors.cyan100,
  info200: darkColors.cyan200,
  info300: darkColors.cyan300,
  info400: darkColors.cyan400,
  info500: darkColors.cyan500,
  info600: darkColors.cyan600,
  info700: darkColors.cyan700,
  info800: darkColors.cyan800,
  info900: darkColors.cyan900,

  // Muted/Gray
  muted50: darkColors.gray50,
  muted100: darkColors.gray100,
  muted200: darkColors.gray200,
  muted300: darkColors.gray300,
  muted400: darkColors.gray400,
  muted500: darkColors.gray500,
  muted600: darkColors.gray600,
  muted700: darkColors.gray700,
  muted800: darkColors.gray800,
  muted900: darkColors.gray900,

  // Backgrounds and Surfaces
  background: darkColors.white,
  surface: darkColors.gray50,
  onPrimary: darkColors.white,
  onSecondary: darkColors.white,
  onBackground: darkColors.gray900,
  onSurface: darkColors.gray900,
  onError: darkColors.white,

  // Tertiary
  tertiary50: darkColors.teal50,
  tertiary100: darkColors.teal100,
  tertiary200: darkColors.teal200,
  tertiary300: darkColors.teal300,
  tertiary400: darkColors.teal400,
  tertiary500: darkColors.teal500,
  tertiary600: darkColors.teal600,
  tertiary700: darkColors.teal700,
  tertiary800: darkColors.teal800,
  tertiary900: darkColors.teal900,

  // Neutral
  neutral50: darkColors.neutral50,
  neutral100: darkColors.neutral100,
  neutral200: darkColors.neutral200,
  neutral300: darkColors.neutral300,
  neutral400: darkColors.neutral400,
  neutral500: darkColors.neutral500,
  neutral600: darkColors.neutral600,
  neutral700: darkColors.neutral700,
  neutral800: darkColors.neutral800,
  neutral900: darkColors.neutral900,
  neutral950: darkColors.neutral950,
};

export type Palette = typeof palette;
export type PaletteKey = keyof Palette;

export function getLightPalette() {
  return palette;
}

export function getDarkPalette() {
  return darkPalette;
}
