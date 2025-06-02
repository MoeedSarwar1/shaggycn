import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import HomeScreen from './src/screens/home';
import {AppTheme, ThemeProvider} from './src/theme/context/themeContext';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <ThemedApp />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

const ThemedApp = () => {
  const {theme} = require('./src/theme/context/useTheme').useTheme();
  const styles = commonStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

export const commonStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.palette.background,
    },
  });
