import { PricingData } from "../../data";
import { PricingCard, Button } from "@/components";
import { Clock3, RefreshCcw, CircleCheckBig } from "lucide-react";
import { useState } from "react";

const Pricing: React.FC = () => {
  const [active, setActive] = useState(PricingData[0].name);
  return (
    <section className="px-5 py-20 min-h-screen flex flex-col color-for items-center bg-secondary font-roboto">
      <div className="max-w-6xl mx-auto flex flex-col gap-y-4 md:gap-y-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 md:text-5xl">
            Lorem ipsum dolor sit.
          </h1>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            necessitatibus hic quas? Minus accusamus vitae cum autem, expedita
            qui illo error quas blanditiis officiis, quibusdam assumenda eum
            voluptas dolores explicabo?
          </p>
        </div>
        <div className="md:hidden">
          <div className="mb-4 grid grid-cols-3 bg-white text-secondary p-2 rounded-full">
            {PricingData.map((price) => (
              <Button label={price.name}
              variant="ghost"
              onClick={()=> setActive(price.name)}
              customClasses={`${active === price.name && "bg-secondary"} hover:bg-secondary text-foreground rounded-full`}
              />
            ))}
          </div>
          <div>
            {PricingData.filter((p) => p.name === active).map(
              (pricing) => (
                <PricingCard
                  className={`${pricing.bg}`}
                  key={pricing.name}
                  cardHeader={{
                    name: pricing.name,
                    price: pricing.price,
                    description: pricing.description,
                    delivery: (
                      <>
                        <Clock3 size={20} strokeWidth={3} />{" "}
                        <span>{pricing.delivery}</span>{" "}
                      </>
                    ),
                    revesion: (
                      <>
                        <RefreshCcw size={20} strokeWidth={3} />{" "}
                        <span>{pricing.revesion}</span>{" "}
                      </>
                    ),
                  }}
                  isPopular={pricing.isPopular}
                  footer={{
                    buttonLabel: "Contact",
                    buttonVariant: "default",
                  }}
                >
                  <div className="flex flex-col gap-y-4">
                    <div className="flex items-center justify-center">
                      <div className="flex items-center flex-1">
                        <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                        <div className="flex-1 border-t border-gray-600 mx-2"></div>
                      </div>
                      <span className="px-3 text-xs uppercase tracking-widest text-gray-400">
                        Features
                      </span>
                      <div className="flex items-center flex-1">
                        <div className="flex-1 border-t border-gray-600 mx-2"></div>
                        <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-y-3">
                      {pricing.feature.map((list, index) => (
                        <li key={index} className="flex items-start gap-x-3">
                          <CircleCheckBig size={20} className=" shrink-0" />{" "}
                          <span className="text-sm">{list}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </PricingCard>
              )
            )}
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-3 md:gap-x-3 gap-y-4">
          {PricingData.map((pricing) => (
            <PricingCard
              className={`${pricing.bg}`}
              key={pricing.name}
              cardHeader={{
                name: pricing.name,
                price: pricing.price,
                description: pricing.description,
                delivery: (
                  <>
                    <Clock3 size={20} strokeWidth={3} />{" "}
                    <span>{pricing.delivery}</span>{" "}
                  </>
                ),
                revesion: (
                  <>
                    <RefreshCcw size={20} strokeWidth={3} />{" "}
                    <span>{pricing.revesion}</span>{" "}
                  </>
                ),
              }}
              isPopular={pricing.isPopular}
              footer={{
                buttonLabel: "Contact",
                buttonVariant: "default",
              }}
            >
              <div className="flex flex-col gap-y-4">
                <div className="flex items-center justify-center">
                  <div className="flex items-center flex-1">
                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                    <div className="flex-1 border-t border-gray-600 mx-2"></div>
                  </div>
                  <span className="px-3 text-xs uppercase tracking-widest text-gray-400">
                    Features
                  </span>
                  <div className="flex items-center flex-1">
                    <div className="flex-1 border-t border-gray-600 mx-2"></div>
                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                  </div>
                </div>
                <ul className="flex flex-col gap-y-3">
                  {pricing.feature.map((list, index) => (
                    <li key={index} className="flex items-start gap-x-3">
                      <CircleCheckBig size={20} className=" shrink-0" />{" "}
                      <span className="text-sm">{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </PricingCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
