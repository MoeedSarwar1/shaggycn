import {Button, View} from 'react-native';
import AppText from '../../components/atoms/text';
import {useTheme} from '../../theme/context/useTheme';

const HomeScreen = () => {
  const {theme, toggleTheme} = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
    console.log('Theme toggled:', theme.colors);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
      }}>
      <AppText
        typography="displayLargeRegular"
        color={theme.palette.text.primary}>
        Hello World
      </AppText>
      <Button
        title="Toggle Theme"
        onPress={handleToggleTheme}
        color={theme.palette.primary.dark}
      />
    </View>
  );
};

export default HomeScreen;
