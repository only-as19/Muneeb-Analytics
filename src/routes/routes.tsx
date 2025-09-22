import {RootLayout,LandingLayout} from "@/layouts"
import { Landing, Services} from "@/pages"
import ServiceDetail from "@/pages/Landing/Service Details/page"
import type { RouteObject } from "react-router-dom"





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
            }
        ]
    },
]


export default routes