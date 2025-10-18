import { Hero,About,Services } from "./Sections"
import { Review,CTA } from "@/components"

const Landing:React.FC = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
        <Review/>
        <CTA/>
    </div>
  )
}

export default Landing
