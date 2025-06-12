import { StyleSheet } from 'react-native';

import { AppTheme } from '../../theme/context/themeContext';
import { Spacing } from '../../theme/spacing';

export const homeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.palette.background,
      flex: 1,
      justifyContent: 'space-between',
    },
    headerContainer: {
      flex: 1,
      gap: Spacing.Margin16,
      justifyContent: 'center',
    },
  });
