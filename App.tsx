import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from './commonStyles';
import HomeScreen from './src/screens/home';
import { ThemeProvider } from './src/theme/context/themeContext';
import { useTheme } from './src/theme/context/useTheme';

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
  const { theme } = useTheme();
  const styles = commonStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
