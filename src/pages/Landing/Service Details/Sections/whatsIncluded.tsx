import { useState } from "react";
import type { ServiceContentItem } from "../../data/data";

interface contentType {
  serviceContent: ServiceContentItem[];
}

const WhatsIncluded: React.FC<contentType> = ({ serviceContent }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="p-5 min-h-screen flex flex-col justify-center items-center text-primary bg-bg-secondary font-roboto">
      <div className="flex flex-col gap-y-10 max-w-6xl mx-auto ">
        <div className="text-center md:w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold uppercase mb-2">
            What We Offer and how we deliver
          </h1>
          <p className="text-muted-foreground">
            Discover what we provide, the benefits you'll gain, and how we
            deliver results.
          </p>
        </div>
        {serviceContent && (
          <div className="bg-white relative shadow-primary drop-shadow-xl md:flex ">
            <div
              className={`relative md:bottom-6 bg-primary text-white px-3 py-6 shadow-primary shadow-2xl basis-4/12`}
            >
              {serviceContent?.map((data, i) => (
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
                {serviceContent[activeIndex].title}
              </h1>
              <p className="text-muted-foreground">
                {serviceContent[activeIndex].description}
              </p>
              <div className="flex flex-col gap-y-4">
                <ul>
                  {serviceContent[activeIndex].items.map((content, index) => (
                    <li
                      key={index}
                      className="square-list marker:font-bold marker:text-2xl"
                    >
                      <span className="text-xl font-semibold text-gray-500">
                        {content.title}:
                      </span>
                      <span className="text-muted-foreground">
                        {" "}
                        {content.description}
                      </span>
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
