import { StyleSheet } from 'react-native';

import { Spacing } from '../../theme/spacing';

export const homeStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    headerContainer: {
      flex: 1,
      gap: Spacing.Margin16,
      justifyContent: 'center',
    },
  });
