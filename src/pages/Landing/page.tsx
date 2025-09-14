import type React from "react"
import { Hero,About } from "./Sections"

const Landing:React.FC = () => {
  return (
    <div>
        <Hero/>
        <About/>
    </div>
  )
}

export default Landing
