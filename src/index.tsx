import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { InitialProvider } from './providers/InitialProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <InitialProvider>
      <App />
    </InitialProvider>
  </React.StrictMode>
);
