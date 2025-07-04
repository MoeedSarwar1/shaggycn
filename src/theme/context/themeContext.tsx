import React, { createContext, ReactNode, useMemo, useState } from 'react';

import { getDarkPalette, getLightPalette } from '../palette';

const lightPalette = getLightPalette();
const darkPalette = getDarkPalette();

export const lightTheme = {
  palette: lightPalette,
};

export const darkTheme = {
  palette: darkPalette,
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

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  const toggleTheme = React.useCallback(
    () => setMode(prev => (prev === 'light' ? 'dark' : 'light')),
    [],
  );

  const contextValue = useMemo(
    () => ({ theme, mode, setMode, toggleTheme }),
    [theme, mode, setMode, toggleTheme],
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
