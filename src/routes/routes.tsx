import {RootLayout} from "@/layouts"
import { Landing, Contact, Projects } from "@/pages"
import ServiceDetail from "@/pages/Landing/Service Details/page"
import type { RouteObject } from "react-router-dom"

const contactRoute:RouteObject[] = [
    {
        path:"contact",
        element: <Contact />
    }
]

const ProjectsRoute:RouteObject[]=[
    {
        path: "caseStudy",
        element: <Projects/>,
        children:[
           {
            path:":caseId"
           } 
        ]
    }
]

const routes:RouteObject [] = [
    {
        path:"/",
        element: <RootLayout/>,
        children:[
            {
                path:"*",
                element: "Error"
            },
            {
                path:"/",
                element:<Landing/>
            },
            {
                path:"/:serviceId",
                element:<ServiceDetail/>
            },
            ...contactRoute,
            ...ProjectsRoute
        ]
    },
]


export default routes