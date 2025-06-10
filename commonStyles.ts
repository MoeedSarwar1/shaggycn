import { StyleSheet } from 'react-native';

import { AppTheme } from './src/theme/context/themeContext';
import { Spacing } from './src/theme/spacing';

export const commonStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.palette.background,
      flex: 1,
      paddingHorizontal: Spacing.Padding16,
    },
  });
