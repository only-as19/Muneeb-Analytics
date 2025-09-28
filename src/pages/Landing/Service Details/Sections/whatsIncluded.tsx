import { useParams } from "react-router";
import { Services } from "../../data";
import { useState } from "react";

const WhatsIncluded = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { serviceId } = useParams();
  const serviceContent = Services.find((service) => service.link === serviceId);
  const include = serviceContent && serviceContent.details?.serviceContent;
  if (!serviceContent) {
    return (
      <section>
        <div className="">
          <h1>Service not Found</h1>
          <p>Please check the URL or browse our services.</p>
        </div>
      </section>
    );
  }
  return (
    <section className="p-5 min-h-screen flex flex-col justify-center items-center text-primary bg-bg-secondary font-roboto">
      <div className="flex flex-col gap-y-10 max-w-6xl mx-auto ">
        <div className="text-center md:w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-2">
            Lorem ipsum dolor sit.
          </h1>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem vitae dolores esse excepturi placeat earum atque
            natus, iure alias accusamus.
          </p>
        </div>
        {include && (
          <div className="bg-white relative shadow-primary drop-shadow-xl md:flex ">
            <div
              className={`relative md:bottom-6 bg-primary text-white px-3 py-6 shadow-primary shadow-2xl basis-4/12`}
            >
              {include?.map((data, i) => (
                <div
                  key={i}
                  className={`p-2 ${
                    activeIndex === i && "bg-cyan-500"
                  } rounded-xs py-3 px-3 relative md:left-6`}
                  onClick={() => setActiveIndex(i)}
                >
                  <p className={`uppercase`}>{data.title}</p>
                </div>
              ))}
            </div>
            <div className="bg-white px-8 py-6 mb-4 h-full flex-1">
              <h1 className="text-2xl font-bold mb-3">
                {include[activeIndex].title}
              </h1>
              <p className="text-muted-foreground">
                {include[activeIndex].description}
              </p>
              <div className="flex flex-col gap-y-4">
                <ul>
                {include[activeIndex].items.map((content, index) => (
                  // <div key={index} className="">

                  //   {/* <h2 className="text-xl font-semibold text-zinc-500">
                  //     {content.title}
                  //   </h2>
                  //   <p className="">{content.description}</p> */}
                  // </div>
                  <li key={index} className="square-list marker:font-bold marker:text-2xl"><span className="text-xl font-semibold text-gray-500">{content.title}:</span>
                  <span className="text-muted-foreground"> {content.description}</span>
                  </li>
                ))}

                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhatsIncluded;
