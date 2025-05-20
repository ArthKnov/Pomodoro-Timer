import { defaultTheme } from './Components/styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Components/styles/themes/global';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
