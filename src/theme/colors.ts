// packages/theme/colors.ts

const colors = {
  // Core
  white: '#FFFFFF',
  black: '#222222',

  // Grays (Neutral Scale)
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#E0E0E0',
  gray300: '#CCCCCC',
  gray400: '#B3B3B3',
  gray500: '#999999',
  gray600: '#666666',
  gray700: '#4D4D4D',
  gray800: '#333333',
  gray900: '#1A1A1A',

  // Primary (Blue)
  primary: '#1E90FF',
  primaryLight: '#63B3FF',
  primaryDark: '#005BB5',
  primaryTint: '#E6F2FF',
  primaryShade: '#0F62A0',

  // Secondary (Coral)
  secondary: '#FF6F61',
  secondaryLight: '#FFA195',
  secondaryDark: '#CC5246',
  secondaryTint: '#FFF1EF',
  secondaryShade: '#A9443A',

  // Tertiary (Purple)
  tertiary: '#9B51E0',
  tertiaryLight: '#BB7FF3',
  tertiaryDark: '#6B2BAA',
  tertiaryTint: '#F1E6FB',
  tertiaryShade: '#7536B4',

  // Success (Green)
  success: '#28A745',
  successLight: '#51D88A',
  successDark: '#1E7E34',
  successTint: '#DFF5E3',
  successShade: '#15793F',

  // Error (Red)
  error: '#DC3545',
  errorLight: '#FF6B81',
  errorDark: '#A71D2A',
  errorTint: '#F8D7DA',
  errorShade: '#821D26',

  // Warning (Yellow/Amber)
  warning: '#FFC107',
  warningLight: '#FFD54F',
  warningDark: '#C79100',
  warningTint: '#FFF3CD',
  warningShade: '#CC9A06',

  // Info (Cyan/Teal)
  info: '#17A2B8',
  infoLight: '#63C2D0',
  infoDark: '#0D6E79',
  infoTint: '#D1ECF1',
  infoShade: '#0A4A50',

  // Overlays & Shadows
  overlayLight: 'rgba(0, 0, 0, 0.05)',
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayDark: 'rgba(0, 0, 0, 0.75)',
  shadow: 'rgba(0, 0, 0, 0.1)',
};

export const darkColors = {
  // Core
  white: '#222222', // dark background for white
  black: '#FFFFFF', // light text for black

  // Grays (Neutral Scale)
  gray50: '#23242A',
  gray100: '#23242A',
  gray200: '#23242A',
  gray300: '#23242A',
  gray400: '#35363B',
  gray500: '#44464B',
  gray600: '#666870',
  gray700: '#888A92',
  gray800: '#B0B2B8',
  gray900: '#E0E0E0',

  // Primary (Blue)
  primary: '#63B3FF',
  primaryLight: '#1E90FF',
  primaryDark: '#005BB5',
  primaryTint: '#0F62A0',
  primaryShade: '#E6F2FF',

  // Secondary (Coral)
  secondary: '#FFA195',
  secondaryLight: '#FF6F61',
  secondaryDark: '#CC5246',
  secondaryTint: '#A9443A',
  secondaryShade: '#FFF1EF',

  // Tertiary (Purple)
  tertiary: '#BB7FF3',
  tertiaryLight: '#9B51E0',
  tertiaryDark: '#6B2BAA',
  tertiaryTint: '#7536B4',
  tertiaryShade: '#F1E6FB',

  // Success (Green)
  success: '#51D88A',
  successLight: '#28A745',
  successDark: '#1E7E34',
  successTint: '#15793F',
  successShade: '#DFF5E3',

  // Error (Red)
  error: '#FF6B81',
  errorLight: '#DC3545',
  errorDark: '#A71D2A',
  errorTint: '#821D26',
  errorShade: '#F8D7DA',

  // Warning (Yellow/Amber)
  warning: '#FFD54F',
  warningLight: '#FFC107',
  warningDark: '#C79100',
  warningTint: '#CC9A06',
  warningShade: '#FFF3CD',

  // Info (Cyan/Teal)
  info: '#63C2D0',
  infoLight: '#17A2B8',
  infoDark: '#0D6E79',
  infoTint: '#0A4A50',
  infoShade: '#D1ECF1',

  // Overlays & Shadows
  overlayLight: 'rgba(255,255,255,0.05)',
  overlay: 'rgba(0,0,0,0.7)',
  overlayDark: 'rgba(0,0,0,0.9)',
  shadow: 'rgba(0,0,0,0.7)',
};

export default colors;
