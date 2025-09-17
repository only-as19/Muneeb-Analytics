import type React from "react"
import { Hero,About,Services } from "./Sections"
import { Review,CTA } from "@/components"

const Landing:React.FC = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Review/>
        <CTA/>
        <Services/>
    </div>
  )
}

export default Landing
