import { StyleSheet } from 'react-native';

import { Spacing } from '../../../theme/spacing';

export const buttonStyles = () =>
  StyleSheet.create({
    button: {
      alignItems: 'center',
      borderRadius: 4,
      justifyContent: 'center',
    },
    large: {
      paddingHorizontal: Spacing.Padding12,
      paddingVertical: Spacing.Padding12,
    },
    medium: {
      paddingHorizontal: Spacing.Padding12,
      paddingVertical: Spacing.Padding10,
    },
    small: {
      paddingHorizontal: Spacing.Padding12,
      paddingVertical: Spacing.Padding8,
    },
    xsmall: {
      paddingHorizontal: Spacing.Padding12,
      paddingVertical: Spacing.Padding8,
    },
  });
