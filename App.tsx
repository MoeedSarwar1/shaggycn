import HomeScreen from './src/screens/home';
import {ThemeProvider} from './src/theme/context/themeContext';

const App = () => {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
