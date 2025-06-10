import {StyleSheet} from 'react-native';
import {Spacing} from '../../../theme/spacing';

export const buttonStyles = () =>
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
