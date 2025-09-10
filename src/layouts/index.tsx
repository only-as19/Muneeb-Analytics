import {Header, Footer} from "@/components"
import { Outlet } from "react-router"

const RootLayout = () => {
  return (
    <div>
        <Header />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout
