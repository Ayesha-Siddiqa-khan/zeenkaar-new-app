import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'

function attachErrorHandlers() {
  const show = (label, message) => {
    const el = document.createElement('div')
    el.style.position = 'fixed'
    el.style.bottom = '16px'
    el.style.left = '16px'
    el.style.zIndex = '9999'
    el.style.padding = '12px 14px'
    el.style.background = '#fff1f2'
    el.style.border = '1px solid #fecdd3'
    el.style.borderRadius = '12px'
    el.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)'
    el.style.color = '#9f1239'
    el.style.fontFamily = 'Manrope, system-ui, sans-serif'
    el.style.fontSize = '12px'
    el.style.maxWidth = '420px'
    el.textContent = `${label}: ${message}`
    document.body.appendChild(el)
  }

  window.addEventListener('error', (e) => {
    show('Runtime error', e.error?.stack || e.message)
  })
  window.addEventListener('unhandledrejection', (e) => {
    show('Unhandled promise', e.reason?.stack || e.reason?.message || String(e.reason))
  })
}

attachErrorHandlers()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
