import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './providers/auth-provider.jsx';
import { RouterProvider } from "react-router-dom";
import { router } from './routes.jsx';
import { ToastContainer } from 'react-toastify';

import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer theme='dark' />
    </AuthProvider>
  </React.StrictMode>,
);
