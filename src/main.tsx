import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'

import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/theme'
import GlobalStyles from './styles/global'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
)
