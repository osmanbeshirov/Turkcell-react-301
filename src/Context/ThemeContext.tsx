import React, { createContext, useState, useEffect, useContext } from 'react';


interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<any>(0);


const defaultTheme = localStorage.getItem('theme') || 'light';


export const ThemeContextProvider: React.FC<Props> = ({ children }) => {

  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])


  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  const values = {
    theme,
    toggleTheme
  }


  return <ThemeContext.Provider value={values} >{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be with in a ThemeProvider");
  }

  return context;
}

export default ThemeContext;