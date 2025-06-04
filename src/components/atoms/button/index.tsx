import {Pressable} from 'react-native';
import {useTheme} from '../../../theme/context/useTheme';
import AppText from '../text';
import {buttonStyles} from './styles';
import {AppButtonProps} from './types';
import {textSizeMap} from './utils';

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

  const buttonSizeMap = {
    xsmall: styles.xsmall,
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };

  let buttonTypeMap;
  if (action === 'solid' || !action) {
    buttonTypeMap = {
      primary: styles.solidPrimary,
      secondary: styles.solidSecondary,
      disabled: styles.solidDisabled,
    };
  } else if (action === 'subtle') {
    buttonTypeMap = {
      primary: styles.subtlePrimary,
      secondary: styles.subtleSecondary,
      disabled: styles.subtleDisabled,
    };
  } else if (action === 'ghost') {
    buttonTypeMap = {
      primary: styles.ghostPrimary,
      secondary: styles.ghostSecondary,
      disabled: styles.ghostDisabled,
    };
  } else if (action === 'outline') {
    buttonTypeMap = {
      primary: styles.outlinePrimary,
      secondary: styles.outlineSecondary,
      disabled: styles.outlineDisabled,
    };
  }

  // Determine which style and color to use based on disabled state
  const buttonTypeKey = type === 'disabled' ? 'disabled' : type;
  const buttonTypeStyle = buttonTypeMap
    ? buttonTypeMap[buttonTypeKey]
    : undefined;

  // Determine text color palette key
  let textColorKey: keyof typeof theme.palette;
  if (type === 'disabled') {
    textColorKey = theme.palette.muted400 as keyof typeof theme.palette;
  } else if (type === 'primary') {
    textColorKey = theme.palette.primary50 as keyof typeof theme.palette;
  } else if (type === 'secondary') {
    textColorKey = theme.palette.secondary900 as keyof typeof theme.palette;
  } else {
    textColorKey = theme.palette.neutral900 as keyof typeof theme.palette;
  }

  return (
    <Pressable
      onPress={onPress}
      disabled={type === 'disabled'}
      style={[
        styles.button,
        buttonTypeStyle,
        buttonSizeMap[size],
        containerStyles,
      ]}
      testID={testID}>
      <AppText color={textColorKey} typography={textSizeMap[size]}>
        {title}
      </AppText>
    </Pressable>
  );
};
export default AppButton;
