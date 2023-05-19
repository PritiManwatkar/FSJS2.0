import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import Home from './Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import "./index.css";
import Error from './Error';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={appRouter} />
  </React.StrictMode>
);

