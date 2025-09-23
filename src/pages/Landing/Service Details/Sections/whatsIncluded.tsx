import { useParams } from "react-router";
import { Services} from "../../data";
import { useState } from "react";

const WhatsIncluded = () => {
  const [activeIndex, setActiveIndex] = useState(0)

    const { serviceId } = useParams();
    const serviceContent = Services.find((service) => service.link === serviceId);
    const heading = serviceContent && serviceContent.details?.whatsIncludedHeading
    const include = serviceContent && serviceContent.details?.whatsIncluded 
    console.log(include)
    if(!serviceContent){
      return (
        <section>
          <div className="">
            <h1>Service not Found</h1>
            <p>Please check the URL or browse our services.</p>
          </div>
        </section>
      )
    }
  return (
    <section className="p-5 min-h-screen flex flex-col justify-center items-center text-primary bg-bg-secondary font-roboto">
        <div className="flex flex-col gap-y-5 max-w-6xl mx-auto">
            <div className="text-center md:w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold uppercase mb-2">{heading?.title}</h1>
                <p className="text-muted-foreground">{heading?.description}</p>
            </div>
            {
              include && (
                <div className="shadow-primary drop-shadow-xl md:grid md:grid-cols-2 items-stretch">
              <div className={`bg-primary text-white flex flex-col gap-y px-3 py-6 `}>
                {include?.map((data,i)=> 
                  <div key={i}
                  className={`p-2 ${activeIndex === i && "bg-cyan-500"} rounded-xs py-3 px-3`}
                  onClick={()=> setActiveIndex(i)}
                  >
                    <p>{data.title}</p>
                  </div>
                )}
                </div> 
                <div className="bg-white px-3 py-6 mb-4 h-full">
                  <h1 className="text-2xl font-bold">{include[activeIndex]?.title}</h1>
                  <p className="text-muted-foreground">{include[activeIndex]?.description}</p>  
                </div> 
            </div>
              )
            }
        </div>
    </section>
  )
}

export default WhatsIncluded
