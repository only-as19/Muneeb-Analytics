import type React from "react"
import { Hero,About } from "./Sections"
import { Review,CTA } from "@/components"

const Landing:React.FC = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Review/>
        <CTA/>
    </div>
  )
}

export default Landing
