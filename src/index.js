import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import WelcomePage from './welcomepage/welcomepage';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App2 from './App2';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage />
    },
    {
      path: "/dashboard",
      element: <App />
    },
    {
      path: "/templatetwo",
      element: <App2 />
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
