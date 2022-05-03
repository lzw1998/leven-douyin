import { StrictMode } from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root') as Element;
ReactDOMClient.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
