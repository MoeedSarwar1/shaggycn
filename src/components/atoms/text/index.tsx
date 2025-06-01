import React from 'react';
import {Text} from 'react-native';
import {Typography} from '../../../theme/typography';
import {AppTextProps} from './types';

const AppText = ({
  children,
  typography = 'captionRegular',
  color,
}: AppTextProps) => {
  return (
    <Text style={[Typography[typography], color ? {color} : null]}>
      {children}
    </Text>
  );
};

export default AppText;
