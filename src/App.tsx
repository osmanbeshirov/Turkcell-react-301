import React from 'react';
import logo from './logo.svg';

import { ThemeContextProvider } from './Context/ThemeContext';
import ChangeThema from './Components/ChangeThema';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">

      <ThemeContextProvider>
        <ChangeThema />
        <Footer/>
      </ThemeContextProvider>

    </div>
  );
}

export default App;
