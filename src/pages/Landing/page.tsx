import type React from "react"
import { Hero,About,Services } from "./Sections"
import { Review,CTA } from "@/components"

const Landing:React.FC = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Review/>
        <Services/>
        <CTA/>
    </div>
  )
}

export default Landing
