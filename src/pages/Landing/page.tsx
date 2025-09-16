import type React from "react"
import { Hero,About } from "./Sections"
import { Review } from "@/components"

const Landing:React.FC = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Review/>
    </div>
  )
}

export default Landing
