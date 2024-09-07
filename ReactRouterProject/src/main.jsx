import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Contact from './Components/Contact.jsx';
import App from './App.jsx'
import './index.css'
import About from './Components/About.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       {
//         path: "Contact",
//         element: <Contact />,
//       },
//       {
//         path: "About",
//         element: <About />,
//       },
//     ],
//   },
// ]);


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
