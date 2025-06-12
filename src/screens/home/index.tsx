import { View } from 'react-native';

import { Button, Text } from '../../components/atoms';
import { useTheme } from '../../theme/context/useTheme';
import { Spacing } from '../../theme/spacing';
import { homeStyles } from './styles';

const HomeScreen = () => {
  const { toggleTheme, theme } = useTheme();
  const styles = homeStyles(theme);

  const handleToggleTheme = () => {
    toggleTheme();
  };
  return (
    <View style={styles.container}>
      <View>
        <Text typography="bodyRegular">Welcome To</Text>
        <Text typography="displayLargeBold">ShaggyCN</Text>
      </View>
      <View style={{}}>
        <Text typography="bodyRegular">You Will Find:</Text>
        <View style={{ gap: Spacing.Margin2 }}>
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
        action="outline"
      />
    </View>
  );
};

export default HomeScreen;
