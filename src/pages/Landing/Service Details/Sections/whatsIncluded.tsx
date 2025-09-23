import { useParams } from "react-router";
import { Services} from "../../data";
import { Button } from "@/components";

const WhatsIncluded = () => {
    const { serviceId } = useParams();
    const serviceContent = Services.find((service) => service.link === serviceId);
    const heading = serviceContent && serviceContent.details?.whatsIncludedHeading
    const include = serviceContent && serviceContent.details?.whatsIncluded 
    console.log(include)
    if(!serviceContent){
      return (
        <section>
          <div>
            <h1>Service not Found</h1>
            <p>Please check the URL or browse our services.</p>
          </div>
        </section>
      )
    }
  return (
    <section>
        <div>
            <div>
                <h1>{heading?.title}</h1>
                <p>{heading?.description}</p>
            </div>
            <div>
              <div>
                {include?.map((data,i)=> 
                  <div key={i}>
                    <Button label={data.title} />
                  </div>
                )}
                </div> 
                <div>
                  {include?.map(data=>(
                    data.description
                  ))}  
                </div> 
            </div>
        </div>
    </section>
  )
}

export default WhatsIncluded
