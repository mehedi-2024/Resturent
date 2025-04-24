import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AppContextCompo from './context/AppContext.jsx';
import Home from './pages/Home.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextCompo>
      <RouterProvider router={router} />
    </AppContextCompo>
  </StrictMode>,
)
