import React, {Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import LoaderPage from "./components/LoaderPage";

import './fonts.css';
import './index.scss';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Suspense fallback={<LoaderPage />}>
          <RouterProvider router={router} />
      </Suspense>
  </React.StrictMode>,
)
