import React, { createContext, useContext, useState } from 'react';
import { Appearance } from 'react-native';

// Create the context with default values
const ThemeContext = createContext({
  isDarkMode: Appearance.getColorScheme() === 'dark',
  toggleTheme: () => {},
});

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
