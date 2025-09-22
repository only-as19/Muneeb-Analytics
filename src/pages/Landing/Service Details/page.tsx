import { useParams } from "react-router-dom"
import { Services } from "../data" 

const ServiceDetail = () => {
  const {serviceId} = useParams()
  console.log(serviceId)
  const serviceData = Services.find(detail=> detail.link === serviceId)
  console.log(serviceData)
  if(!serviceData){
    return <div>No service Found</div>
  }
  return (
    <div>
        <h1>{serviceData?.label}</h1>
    </div>
  )
}

export default ServiceDetail
