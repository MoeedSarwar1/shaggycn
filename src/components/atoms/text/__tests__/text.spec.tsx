import { render } from '@testing-library/react-native';
import React from 'react';

import { ThemeProvider } from '../../../../theme/context/themeContext';
import AppText from '../index';

const renderWithTheme = (ui: React.ReactElement) => render(<ThemeProvider>{ui}</ThemeProvider>);

describe('AppText component', () => {
  it('renders children correctly', () => {
    const { getByText } = renderWithTheme(<AppText>Hello World</AppText>);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('applies custom style', () => {
    const customStyle = { color: 'red' };
    const { getByText } = renderWithTheme(<AppText style={customStyle}>Styled Text</AppText>);
    expect(getByText('Styled Text')).toBeTruthy();
  });

  it('supports testID prop', () => {
    const { getByTestId } = renderWithTheme(<AppText testID="custom-text">Test ID</AppText>);
    expect(getByTestId('app-text')).toBeTruthy();
  });

  it('renders with default props', () => {
    const { getByText } = renderWithTheme(<AppText>Default Props</AppText>);
    expect(getByText('Default Props')).toBeTruthy();
  });
});
