import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './global.css';

import App from './App';
import { Index } from './pages';
import { Login } from './pages/Login';
import { LoginOption } from './pages/LoginOption';
import { Cadastro } from './pages/Cadastro';
import { Questions } from './pages/Questions';

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
          {
              path: "/",
              element: <Index />
          },
          {
              path: "/signIn",
              element: <Login />
          },
          {
              path: "/signUp",
              element: <Cadastro />
          },
          {
              path: "/signInOptions",
              element: <LoginOption />
          },
          {
              path: "questions",
              element: <Questions />
          },
      ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
