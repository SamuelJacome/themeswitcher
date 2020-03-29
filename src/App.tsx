import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';

import GlobalStyle from './styles/global'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Header />
      </ThemeProvider>

    </div>
  );
}

export default App;
