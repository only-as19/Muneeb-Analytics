import {Nav, Footer} from "@/components"
import { Outlet } from "react-router"

const ProjectsLayout = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default ProjectsLayout
