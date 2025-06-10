import { AppTheme } from '../../../theme/context/themeContext';
import { TypographyVariant } from '../../../theme/typography';
import { ButtonAction, ButtonType, ColorMap } from './types';

type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large';

export const textSizeMap: Record<ButtonSize, TypographyVariant> = {
  xsmall: 'tinySemiBold',
  small: 'captionSemiBold',
  medium: 'bodySemiBold',
  large: 'bodySemiBold',
};

export const colorMap = (theme: AppTheme, type: ButtonType, action: ButtonAction): ColorMap => {
  if (type === 'primary') {
    switch (action) {
      case 'solid':
        return {
          bg: theme.palette.primary900,
          text: theme.palette.onPrimary,
          pressedBg: theme.palette.primary800,
        };
      case 'subtle':
        return {
          bg: theme.palette.primary100,
          text: theme.palette.primary900,
          pressedBg: theme.palette.primary50,
        };
      case 'outline':
        return {
          border: theme.palette.primary900,
          text: theme.palette.primary900,
          bg: 'transparent',
          borderWidth: 1,
          pressedBg: theme.palette.primary50,
        };
      case 'ghost':
        return {
          text: theme.palette.primary900,
          bg: 'transparent',
          pressedBg: theme.palette.primary50,
        };
    }
  }

  if (type === 'secondary') {
    switch (action) {
      case 'solid':
        return {
          bg: theme.palette.neutral900,
          text: theme.palette.onPrimary,
          pressedBg: theme.palette.neutral800,
        };
      case 'subtle':
        return {
          bg: theme.palette.neutral100,
          text: theme.palette.neutral900,
          pressedBg: theme.palette.neutral200,
        };
      case 'outline':
        return {
          border: theme.palette.neutral900,
          text: theme.palette.neutral900,
          bg: 'transparent',
          borderWidth: 1,
          pressedBg: theme.palette.neutral50,
        };
      case 'ghost':
        return {
          text: theme.palette.neutral900,
          bg: 'transparent',
          pressedBg: theme.palette.neutral50,
        };
    }
  }

  if (type === 'disabled') {
    switch (action) {
      case 'solid':
        return {
          bg: theme.palette.muted200,
          text: theme.palette.muted400,
        };
      case 'subtle':
        return {
          bg: theme.palette.muted100,
          text: theme.palette.muted400,
        };
      case 'outline':
        return {
          border: theme.palette.muted300,
          text: theme.palette.muted400,
          bg: 'transparent',
          borderWidth: 1,
        };
      case 'ghost':
        return {
          text: theme.palette.muted400,
          bg: 'transparent',
        };
    }
  }

  // fallback
  return {
    bg: theme.palette.neutral900,
    text: theme.palette.onPrimary,
  };
};

export const buttonSizeMap = (styles: Record<ButtonSize, object>, size: ButtonSize) => {
  return styles[size];
};
