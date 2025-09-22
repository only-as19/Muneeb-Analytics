import {Nav,Footer} from "@/components"
import { Outlet } from "react-router"

const RootLayout = () => {
  return (
    <div>
        <Nav />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout
