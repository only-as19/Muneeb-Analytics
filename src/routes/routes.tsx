import Rootlayout from "@/layouts"
import { Landing} from "@/pages"
import type { RouteObject } from "react-router-dom"

const routes:RouteObject [] = [
    {
        path:"/",
        element: <Rootlayout/>,
        children:[
            {
                path:"*",
                element: "Error"
            },
            {
                path:"/",
                element:<Landing/>
            }
        ]
    }
]


export default routes