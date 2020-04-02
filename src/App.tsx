import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/light'

import GlobalStyle from './styles/global'
import Header from './components/Header';

function App() {

  const[theme, setTheme] = useState(light);

  const toggleTheme  = () =>{
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme = {toggleTheme}/>
      </ThemeProvider>

    </div>
  );
}

export default App;
