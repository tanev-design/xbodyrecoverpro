import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Cross-browser scroll stability — vault rule.
// Lock --app-height to the visual viewport so hero sections don't
// jump when the mobile address bar animates.
function setAppHeight() {
  document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
}
setAppHeight();
window.addEventListener('resize', setAppHeight, { passive: true });
window.addEventListener('orientationchange', setAppHeight);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
