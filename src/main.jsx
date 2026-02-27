import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import router from './lib/router.jsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <div translate="no">
      <RouterProvider router={router} />
    </div>

  </StrictMode>,
)
