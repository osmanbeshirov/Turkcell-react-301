import React, {  createContext } from 'react';

const ThemeContext = createContext<any>(0);

export const ThemeContextProvider = ({ children: any }) => {


  return <ThemeContext.Provider value={'light'} >{children}</ThemeContext.Provider>
}


export default ThemeContext;