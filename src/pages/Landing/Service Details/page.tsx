import { ServiceHero,WhatsIncluded, Pricing } from "./Sections" 
import { CTA } from "@/components"

const ServiceDetail = () => {
  return (
    <div>
        <ServiceHero />
        <WhatsIncluded />
        <Pricing />
        <CTA/>
    </div>
  )
}

export default ServiceDetail
