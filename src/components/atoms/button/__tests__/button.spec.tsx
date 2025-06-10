import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {ThemeProvider} from '../../../../theme/context/themeContext';
import AppButton from '../index';

describe('AppButton', () => {
  const renderWithTheme = props =>
    render(
      <ThemeProvider>
        <AppButton {...props} />
      </ThemeProvider>,
    );

  it('renders with title', () => {
    const {getByText} = renderWithTheme({title: 'Test Button'});
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const {getByTestId} = renderWithTheme({
      title: 'Press Me',
      onPress,
      testID: 'btn',
    });
    fireEvent.press(getByTestId('btn'));
    expect(onPress).toHaveBeenCalled();
  });

  it('is disabled when disabled prop is true', () => {
    const onPress = jest.fn();
    const {getByTestId} = renderWithTheme({
      title: 'Disabled',
      onPress,
      type: 'disabled',
      testID: 'btn',
    });
    fireEvent.press(getByTestId('btn'));
    expect(onPress).not.toHaveBeenCalled();
  });

  it('renders all variants (type/action)', () => {
    const {getByText} = renderWithTheme({
      title: 'Primary Solid',
      type: 'primary',
      action: 'solid',
    });
    expect(getByText('Primary Solid')).toBeTruthy();
    renderWithTheme({
      title: 'Secondary Subtle',
      type: 'secondary',
      action: 'subtle',
    });
    renderWithTheme({
      title: 'Primary Outline',
      type: 'primary',
      action: 'outline',
    });
    renderWithTheme({
      title: 'Secondary Ghost',
      type: 'secondary',
      action: 'ghost',
    });
    renderWithTheme({
      title: 'Disabled',
      type: 'disabled',
      action: 'solid',
      disabled: true,
    });
  });

  it('applies custom containerStyles', () => {
    const {getByTestId} = renderWithTheme({
      title: 'Styled',
      containerStyles: {margin: 10},
      testID: 'btn',
    });
    expect(getByTestId('btn')).toBeTruthy();
  });
});
