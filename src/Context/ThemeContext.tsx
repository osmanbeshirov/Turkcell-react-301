import React, { createContext, useState } from 'react';


interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<any>(0);


export const ThemeContextProvider: React.FC<Props> = ({ children }) => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  const values = {
    theme,
    toggleTheme
  }


  return <ThemeContext.Provider value={values} >{children}</ThemeContext.Provider>
}

export default ThemeContext;