import React from 'react';
import logo from './logo.svg';

import { ThemeContextProvider } from './Context/ThemeContext';
import ChangeThema from './Components/ChangeThema';
import Footer from './Components/Footer';
import { LanguageContextProvide } from './Context/LanguageContext';
import ChangeLang from './Components/ChangeLang';


function App() {
  return (
    <div className="App">
      <LanguageContextProvide>
        <ThemeContextProvider>
          <ChangeThema />
          <hr />
          <ChangeLang />
          
          <Footer />
        </ThemeContextProvider>
      </LanguageContextProvide>


    </div>
  );
}

export default App;
