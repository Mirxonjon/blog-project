import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import "./assets/scss/main.scss"
import AlbumsProvider from './contexts/albums';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlbumsProvider>
        <AuthProvider />
      </AlbumsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
