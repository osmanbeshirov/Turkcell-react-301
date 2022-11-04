import React from 'react';
import logo from './logo.svg';

import ThemaContext from './Context/ThemeContext';
import ChangeThema from './Components/ChangeThema';


function App() {
  return (
    <div className="App">

      <ThemaContext.Provider value={'light'}>
        <ChangeThema />
      </ThemaContext.Provider>

    </div>
  );
}

export default App;
