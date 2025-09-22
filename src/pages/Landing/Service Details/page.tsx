import { useParams } from "react-router-dom"
import { Services } from "../data"
// import { ServiceHero } from "./Sections" 

const ServiceDetail = () => {
  const {serviceId} = useParams()
  console.log(serviceId)
  const serviceData = Services.find(detail=> detail.link === serviceId)
  if(!serviceData){
    return <div>No service Found</div>
  }
  return (
    <div>
        {/* <ServiceHero /> */}
    </div>
  )
}

export default ServiceDetail
