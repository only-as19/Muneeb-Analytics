import { ServiceHero,WhatsIncluded, Features, Pricing } from "./Sections" 
import { CTA } from "@/components"

const ServiceDetail = () => {
  return (
    <div>
        <ServiceHero />
        <WhatsIncluded />
        <Features/>
        <Pricing />
    </div>
  )
}

export default ServiceDetail
