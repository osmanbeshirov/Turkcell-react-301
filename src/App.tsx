import '../src/styles.css'
import Container from './Container';

import { LanguageContextProvide } from './Context/LanguageContext';
import ThemeContext, { ThemeContextProvider } from './Context/ThemeContext';




function App() {

  return (
    <div>
      <LanguageContextProvide>
        <ThemeContextProvider>
          <Container />
        </ThemeContextProvider>
      </LanguageContextProvide>
    </div>
  );
}

export default App;
