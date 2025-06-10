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
  });
