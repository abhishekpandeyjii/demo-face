import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Global Styles
import './assets/styles/index.css'
import './assets/styles/animations.css'
import './assets/styles/responsive.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
