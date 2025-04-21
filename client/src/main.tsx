import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientid = "550113458493-2p761pgt750seo67nmcgcbnrgsk00336.apps.googleusercontent.com";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientid}>
    <App />
    </GoogleOAuthProvider>
    
  </StrictMode>,
)
