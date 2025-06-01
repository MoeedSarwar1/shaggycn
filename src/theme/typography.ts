import {TextStyle} from 'react-native';

export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export type TypographyVariant =
  | 'displayLargeRegular'
  | 'displayLargeMedium'
  | 'displayLargeSemiBold'
  | 'displayLargeBold'
  | 'displayMediumRegular'
  | 'displayMediumMedium'
  | 'displayMediumSemiBold'
  | 'displayMediumBold'
  | 'headingRegular'
  | 'headingMedium'
  | 'headingSemiBold'
  | 'headingBold'
  | 'titleRegular'
  | 'titleMedium'
  | 'titleSemiBold'
  | 'titleBold'
  | 'bodyRegular'
  | 'bodyMedium'
  | 'bodySemiBold'
  | 'bodyBold'
  | 'labelRegular'
  | 'labelMedium'
  | 'labelSemiBold'
  | 'labelBold'
  | 'captionRegular'
  | 'captionMedium'
  | 'captionSemiBold'
  | 'captionBold';

export type Typography = Record<
  TypographyVariant,
  TextStyle & {fontWeightOption: FontWeight}
>;

export const Typography: Typography = {
  displayLargeRegular: {
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 48,
    fontWeightOption: 'regular',
  },
  displayLargeMedium: {
    fontSize: 40,
    fontWeight: '500',
    lineHeight: 48,
    fontWeightOption: 'medium',
  },
  displayLargeSemiBold: {
    fontSize: 40,
    fontWeight: '600',
    lineHeight: 48,
    fontWeightOption: 'semibold',
  },
  displayLargeBold: {
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 48,
    fontWeightOption: 'bold',
  },
  displayMediumRegular: {
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 40,
    fontWeightOption: 'regular',
  },
  displayMediumMedium: {
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 40,
    fontWeightOption: 'medium',
  },
  displayMediumSemiBold: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 40,
    fontWeightOption: 'semibold',
  },
  displayMediumBold: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    fontWeightOption: 'bold',
  },
  headingRegular: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 32,
    fontWeightOption: 'regular',
  },
  headingMedium: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32,
    fontWeightOption: 'medium',
  },
  headingSemiBold: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    fontWeightOption: 'semibold',
  },
  headingBold: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    fontWeightOption: 'bold',
  },
  titleRegular: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 28,
    fontWeightOption: 'regular',
  },
  titleMedium: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 28,
    fontWeightOption: 'medium',
  },
  titleSemiBold: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    fontWeightOption: 'semibold',
  },
  titleBold: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 28,
    fontWeightOption: 'bold',
  },
  bodyRegular: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    fontWeightOption: 'regular',
  },
  bodyMedium: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    fontWeightOption: 'medium',
  },
  bodySemiBold: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    fontWeightOption: 'semibold',
  },
  bodyBold: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    fontWeightOption: 'bold',
  },
  labelRegular: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    fontWeightOption: 'regular',
  },
  labelMedium: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    fontWeightOption: 'medium',
  },
  labelSemiBold: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    fontWeightOption: 'semibold',
  },
  labelBold: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    fontWeightOption: 'bold',
  },
  captionRegular: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    fontWeightOption: 'regular',
  },
  captionMedium: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    fontWeightOption: 'medium',
  },
  captionSemiBold: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
    fontWeightOption: 'semibold',
  },
  captionBold: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
    fontWeightOption: 'bold',
  },
};

// HTML-like heading mapping for React Native typography
export const htmlHeadingToTypography: Record<
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  TypographyVariant
> = {
  h1: 'displayLargeBold',
  h2: 'displayMediumBold',
  h3: 'headingBold',
  h4: 'titleBold',
  h5: 'bodyBold',
  h6: 'labelBold',
};
