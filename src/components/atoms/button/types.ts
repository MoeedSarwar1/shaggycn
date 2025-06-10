import {PressableProps, StyleProp} from 'react-native';
export type ButtonType = 'primary' | 'secondary' | 'disabled';
export type ButtonAction = 'solid' | 'subtle' | 'outline' | 'ghost';

export interface AppButtonProps {
  /**
   * The text to display on the button.
   */
  title: string;
  /**
   * The function to call when the button is pressed.
   */
  onPress?: () => void;
  /**
   * The size of the button.
   * Defaults to 'medium'.
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  /**
   * Whether the button is disabled.
   * Defaults to false.
   */
  disabled?: boolean;
  /**
   * The color of the button.
   * Defaults to 'primary'.
   */
  type?: ButtonType;
  /**
   * The background color of the button.
   * Defaults to 'solid'.
   * */
  action?: ButtonAction;
  /**
   * Additional styles for the button container.
   */
  containerStyles?: StyleProp<PressableProps>;
  /**
   * The test ID for the button.
   */
  testID?: string;
}

export interface ColorMap {
  bg: string;
  text: string;
  pressedBg?: string;
  border?: string;
  borderWidth?: number;
}
