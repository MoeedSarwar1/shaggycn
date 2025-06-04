import {StyleSheet} from 'react-native';
import {AppTheme} from '../../../theme/context/themeContext';
import {Spacing} from '../../../theme/spacing';

export const buttonStyles = (theme: AppTheme) =>
  StyleSheet.create({
    button: {
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    xsmall: {
      paddingVertical: Spacing.Padding8,
      paddingHorizontal: Spacing.Padding12,
    },
    small: {
      paddingVertical: Spacing.Padding8,
      paddingHorizontal: Spacing.Padding12,
    },
    medium: {
      paddingVertical: Spacing.Padding10,
      paddingHorizontal: Spacing.Padding12,
    },
    large: {
      paddingVertical: Spacing.Padding12,
      paddingHorizontal: Spacing.Padding12,
    },
    solidPrimary: {
      backgroundColor: theme.palette.neutral900,
    },
    solidSecondary: {
      backgroundColor: theme.palette.secondary500,
    },
    solidDisabled: {
      backgroundColor: theme.palette.muted200,
    },
    subtlePrimary: {
      backgroundColor: theme.palette.primary100,
    },
    subtleSecondary: {
      backgroundColor: theme.palette.secondary100,
    },
    subtleDisabled: {
      backgroundColor: theme.palette.muted100,
    },
    outlinePrimary: {
      borderColor: theme.palette.primary500,
      borderWidth: 1,
    },
    outlineSecondary: {
      borderColor: theme.palette.secondary500,
      borderWidth: 1,
    },
    outlineDisabled: {
      borderColor: theme.palette.muted200,
      borderWidth: 1,
    },
    ghostPrimary: {
      backgroundColor: 'transparent',
    },
    ghostSecondary: {
      backgroundColor: 'transparent',
    },
    ghostDisabled: {
      backgroundColor: 'transparent',
    },
  });
