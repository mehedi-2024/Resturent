import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AppContextCompo from './context/AppContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/1",
    element: <div>hi</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextCompo>
      <RouterProvider router={router} />
    </AppContextCompo>
  </StrictMode>,
)
