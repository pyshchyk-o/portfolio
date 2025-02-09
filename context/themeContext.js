import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a ThemeContext
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isColorful, setIsColorful] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      setIsColorful(storedTheme === 'true'); // Ensure theme loads correctly
    }
  }, []);

  const toggleTheme = () => {
    setIsColorful((prev) => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme.toString());
      return newTheme;
    });
  };

  if (isColorful === null) return null;

  return (
    <ThemeContext.Provider value={{ isColorful, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
