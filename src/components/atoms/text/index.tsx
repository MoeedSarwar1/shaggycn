import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '../../../theme/context/useTheme';
import {Typography} from '../../../theme/typography';
import {AppTextProps} from './types';

const AppText = ({
  children,
  typography = 'captionRegular',
  color,
}: AppTextProps) => {
  const {theme} = useTheme();
  return (
    <Text
      style={[
        Typography[typography],
        color ? {color} : {color: theme.palette.neutral900},
      ]}>
      {children}
    </Text>
  );
};

export default AppText;
