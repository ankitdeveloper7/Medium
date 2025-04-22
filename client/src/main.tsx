import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { RecoilRoot } from 'recoil';

const clientid = "550113458493-2p761pgt750seo67nmcgcbnrgsk00336.apps.googleusercontent.com";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
    <GoogleOAuthProvider clientId={clientid}>
    <App />
    </GoogleOAuthProvider>
    
    </RecoilRoot>
    
  </StrictMode>,
)
