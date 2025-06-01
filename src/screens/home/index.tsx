import {Button, View} from 'react-native';

import {Text} from '../../components/atoms';
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
      <Text typography="displayLargeRegular">Hello World</Text>
      <Button
        title="Toggle Theme"
        onPress={handleToggleTheme}
        color={theme.palette.primaryDark}
      />
    </View>
  );
};

export default HomeScreen;
