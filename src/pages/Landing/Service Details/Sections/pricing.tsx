import { PricingData} from "../../data"
import { PricingCard } from "@/components"
import { FaCheckCircle } from "react-icons/fa";



const Pricing:React.FC = () => {
  return (
    <section>
        <div>
            <div>
                <h1>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid necessitatibus hic quas? Minus accusamus vitae cum autem, expedita qui illo error quas blanditiis officiis, quibusdam assumenda eum voluptas dolores explicabo?</p>
            </div>
        </div>
        <div>
            {PricingData.map(pricing =>(
                <div key={pricing.name}>
                    <PricingCard
                    cardHeader={{
                        name:pricing.name,
                        price:pricing.price,
                        description:pricing.description
                    }}
                    footer={{
                        buttonLabel:"Contact",
                        buttonVariant:"default"
                    }}
                    >
                        <div>
                            <ul>
                                {pricing.feature.map((list,index)=>(
                                    <li key={index}>
                                        <FaCheckCircle /> <span>{list}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </PricingCard>
                </div>
            ))}
        </div>
    </section>
      
  )
}

export default Pricing
