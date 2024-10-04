import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WhatsAppPage from './WhatsAppPage';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <WhatsAppPage />
    </StrictMode>,
  )