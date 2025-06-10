import {Pressable} from 'react-native';
import {useTheme} from '../../../theme/context/useTheme';
import AppText from '../text';
import {buttonStyles} from './styles';
import {AppButtonProps} from './types';
import {colorMap, textSizeMap} from './utils';

const AppButton = ({
  title,
  onPress,
  size = 'xsmall',
  containerStyles = {},
  type = 'primary',
  action = 'solid',
  testID = 'app-button',
}: AppButtonProps) => {
  const {theme} = useTheme();
  const styles = buttonStyles(theme);
  const colorMaps = colorMap(theme, type, action);

  const buttonSizeMap = {
    xsmall: styles.xsmall,
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={type === 'disabled'}
      style={({pressed}) => [
        styles.button,
        buttonSizeMap[size],
        containerStyles,
        {
          backgroundColor: pressed
            ? colorMaps.pressedBg ?? colorMaps.bg
            : colorMaps.bg,
          borderColor: colorMaps.border,
          borderWidth: colorMaps.borderWidth ?? (colorMaps.border ? 1 : 0),
        },
      ]}
      testID={testID}>
      <AppText color={colorMaps.text} typography={textSizeMap[size]}>
        {title}
      </AppText>
    </Pressable>
  );
};
export default AppButton;
