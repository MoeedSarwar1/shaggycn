import {View} from 'react-native';

import {Button, Text} from '../../components/atoms';
import {useTheme} from '../../theme/context/useTheme';
import {Spacing} from '../../theme/spacing';

const HomeScreen = () => {
  const {toggleTheme} = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
      }}>
      <View>
        <Text typography="bodyRegular">Welcome To The</Text>
        <Text typography="displayLargeRegular">Boilerplate!</Text>
      </View>
      <View style={{gap: Spacing.Margin16}}>
        <Text typography="bodyRegular">Things You Will Find Here Are:</Text>
        <View style={{gap: Spacing.Margin2}}>
          <Text typography="displayMediumRegular">Atoms</Text>
          <Text typography="displayMediumRegular">Molecules</Text>
          <Text typography="displayMediumRegular">Templates</Text>
          <Text typography="displayMediumRegular">Navigation</Text>
          <Text typography="displayMediumRegular">Typography</Text>
          <Text typography="displayMediumRegular">Theme Switcher</Text>
          <Text typography="displayMediumRegular">Redux</Text>
          <Text typography="displayMediumRegular">Color Tokens</Text>
          <Text typography="displayMediumRegular">Spacing Tokens</Text>
        </View>
      </View>
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
