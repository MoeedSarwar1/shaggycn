import {View} from 'react-native';

import {Button, Text} from '../../components/atoms';
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
        backgroundColor: theme.palette.background,
      }}>
      <Text typography="displayLargeRegular">Hello World</Text>
      <Button
        title="Toggle Theme"
        onPress={handleToggleTheme}
        size="large"
        type="primary"
        action="solid"
      />
    </View>
  );
};

export default HomeScreen;
