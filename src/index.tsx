import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ProgressProvider } from './contexts/useProgress';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProgressProvider> 
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ProgressProvider>
  </React.StrictMode>
);

reportWebVitals();
