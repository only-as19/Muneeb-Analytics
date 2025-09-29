import { Card } from "@/components"
import { features } from "../../data"
const ServiceFeature:React.FC = () => {
  return (
    <section>
      <div>
        {features.map((feature,index)=>(
          <Card 
          key={index}
          title={feature.title}
          metrices={{
            metriceTitle:feature.metrices,
            metriceLabel:feature.metricesLabel
          }}
          description={feature.description}
          icon={feature.icon}
          />
        ))}
      </div>
    </section>
      
  )
}

export default ServiceFeature
