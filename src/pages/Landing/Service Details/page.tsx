import { useParams } from "react-router-dom"
import { Services } from "../data"
import { ServiceHero,WhatsIncluded, Features } from "./Sections" 
import { CTA } from "@/components"

const ServiceDetail = () => {
  const {serviceId} = useParams()
  console.log(serviceId)
  const serviceData = Services.find(detail=> detail.link === serviceId)
  if(!serviceData){
    return <div>No service Found</div>
  }
  return (
    <div>
        <ServiceHero />
        <WhatsIncluded />
        <Features/>
        <CTA />
    </div>
  )
}

export default ServiceDetail
