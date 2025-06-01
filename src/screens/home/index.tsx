import {Button, View} from 'react-native';
import AppText from '../../components/atoms/text';
import {useTheme} from '../../theme/context/useTheme';

const HomeScreen = () => {
  const {theme, toggleTheme} = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.backgroundDefault,
      }}>
      <AppText
        typography="displayLargeRegular"
        color={theme.palette.textPrimary}>
        Hello World
      </AppText>
      <Button
        title="Toggle Theme"
        onPress={handleToggleTheme}
        color={theme.palette.primaryDark}
      />
    </View>
  );
};

export default HomeScreen;
