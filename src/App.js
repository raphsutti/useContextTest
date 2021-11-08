import React from 'react'
import ContextComponent from './ContextComponent'
import { ThemeProvider } from './ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <ContextComponent />
    </ThemeProvider>
  );
}

