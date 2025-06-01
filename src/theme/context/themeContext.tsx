import React, {createContext, ReactNode, useMemo, useState} from 'react';
import {getDarkPalette, getLightPalette} from '../palette';

const lightTheme = {
  dark: false,
  colors: {
    ...getLightPalette().background,
    ...getLightPalette().text,
    ...getLightPalette().primary,
    ...getLightPalette().secondary,
    ...getLightPalette().tertiary,
    ...getLightPalette().success,
    ...getLightPalette().error,
    ...getLightPalette().warning,
    ...getLightPalette().info,
    ...getLightPalette().overlay,
    ...getLightPalette().shadow,
    ...getLightPalette().gray,
    ...getLightPalette().border,
  },
  palette: getLightPalette(),
};

const darkTheme = {
  dark: true,
  colors: {
    ...getDarkPalette().background,
    ...getDarkPalette().text,
    ...getDarkPalette().primary,
    ...getDarkPalette().secondary,
    ...getDarkPalette().tertiary,
    ...getDarkPalette().success,
    ...getDarkPalette().error,
    ...getDarkPalette().warning,
    ...getDarkPalette().info,
    ...getDarkPalette().overlay,
    ...getDarkPalette().shadow,
    ...getDarkPalette().gray,
    ...getDarkPalette().border,
  },
  palette: getDarkPalette(),
};

export type AppTheme = typeof darkTheme;

type ThemeMode = 'light' | 'dark';

interface ThemeContextProps {
  theme: AppTheme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  const theme = useMemo(
    () => (mode === 'dark' ? darkTheme : lightTheme),
    [mode],
  );

  const toggleTheme = () =>
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{theme, mode, setMode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
