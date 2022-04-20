import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import {CartcontextProvider} from './context/contexts'
// import { LangContextProvider } from './context/langContext'
import {AuthContextProvider} from './context/isAuth'
import {ThemeProvider} from './context/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
        <ThemeProvider>
     <App />
        </ThemeProvider>
    {/* <LangContextProvider> */}
      {/* <CartcontextProvider> */}

{/* </CartcontextProvider> */}
    {/* </LangContextProvider> */}
   
    </AuthContextProvider>

  
 

   
    
  </React.StrictMode>
)
