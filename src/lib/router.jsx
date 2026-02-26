import { createBrowserRouter } from "react-router";
import App from "../App";

import Inicio from "../pages/inicio/Inicio";
import Home from "../pages/home/Home";
import Portfolio from "../pages/portfolio/Portfolio";
import Project from "../pages/project/Project";
import Contact from "../pages/contact/Contact";




const router = createBrowserRouter([{

    path:'/',
    element:<App />,

    children:[

        {
            index:true,
            element:<Inicio /> 
        },


        {
            path: "/home",
            element: <Home />
        },
        {
            path: "/portfolio",
            element: <Portfolio />
        },
        {
            path: "/project/:pid",
            element: <Project />
        },
        {
            path: "/contact",
            element: <Contact />
        }
        

      
        
        

        

    
    ]
}])


export default router;