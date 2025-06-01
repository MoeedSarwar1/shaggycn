import {TextProps} from 'react-native';
import {Typography} from '../../../theme/typography';

type Variant = keyof typeof Typography;

export interface AppTextProps extends TextProps {
  /**
   * The text to display.
   */
  children: string;
  /**
   * The text color.
   */
  color?: string;
  /**
   * The typography of the text.
   * Defaults to 16.
   * */
  typography?: Variant;
}
