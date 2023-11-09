import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import QuemSomos from './routes/QuemSomos/index.jsx';
import Portfolio from './routes/Portfolio/index.jsx';
import ErrorPage from './routes/ErrorPage/index.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <QuemSomos />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
