import {RootLayout} from "@/layouts"
import { Landing, Contact } from "@/pages"
import ServiceDetail from "@/pages/Landing/Service Details/page"
import type { RouteObject } from "react-router-dom"

const contactRoute:RouteObject[] = [
    {
        path:"contact",
        element: <Contact />
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
            ...contactRoute
        ]
    },
]


export default routes