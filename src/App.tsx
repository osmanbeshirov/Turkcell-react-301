import React from 'react';
import logo from './logo.svg';

import { ThemeContextProvider } from './Context/ThemeContext';
import ChangeThema from './Components/ChangeThema';


function App() {
  return (
    <div className="App">

      <ThemeContextProvider>
        <ChangeThema />
      </ThemeContextProvider>

    </div>
  );
}

export default App;
