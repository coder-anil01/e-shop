import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/auth';
import 'antd/dist/reset.css';
import { SearchProvider } from './context/search';
import { CartProvider } from './context/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </SearchProvider>
  </AuthProvider>
);

reportWebVitals();
