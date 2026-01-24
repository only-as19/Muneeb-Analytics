import { Services } from "../../data/data";
import { PricingCard, Button } from "@/components";
import { Clock3, RefreshCcw, Check } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router";

const Pricing: React.FC = () => {
  const { serviceId } = useParams();
  const thisService = Services.find((service) => service.link === serviceId);
  const pricingData = thisService?.details?.pricing ?? [];
  const [active, setActive] = useState(pricingData[0].name);
  return (
    <section className="px-5 py-20 min-h-screen flex flex-col color-for items-center bg-secondary font-roboto">
      <div className="max-w-6xl mx-auto flex flex-col gap-y-4 md:gap-y-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 md:text-5xl">
            Transparent Pricing, Tangible Results
          </h1>
          <p className="text-muted-foreground">
            Our pricing is built for growth , simple, flexible, and packed with value. Whether you&apos;re just starting your analytics journey or scaling enterprise-level automation, each plan delivers measurable business impact without hidden costs.
          </p>
        </div>
        <div className="md:hidden">
          <div className="mb-4 grid grid-cols-3 border-1 border-foreground/20 bg-white text-secondary p-2 rounded-full">
            {pricingData.map((price) => (
              <Button
                label={price.name}
                variant="ghost"
                onClick={() => setActive(price.name)}
                customClasses={`${
                  active === price.name && "bg-secondary"
                } hover:bg-secondary text-foreground rounded-full`}
              />
            ))}
          </div>
          <div>
            {pricingData
              .filter((p) => p.name === active)
              .map((pricing) => (
                <PricingCard
                  className={`${pricing.bg}`}
                  key={pricing.name}
                  cardHeader={{
                    name: pricing.name,
                    price: pricing.price != null ? String(pricing.price) : "",
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
                      <span
                        className={`${
                          pricing.isPopular && "text-secondary"
                        } px-3 text-xs uppercase tracking-widest text-gray-400`}
                      >
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
                          <Check size={20} className=" shrink-0" />{" "}
                          <span className="text-sm">{list}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </PricingCard>
              ))}
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-3 md:gap-x-3 gap-y-4">
          {pricingData.map((pricing) => (
            <PricingCard
              className={`${pricing.bg}`}
              key={pricing.name}
              cardHeader={{
                name: pricing.name,
                price: pricing.price != null ? String(pricing.price) : "",
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
                    <span
                      className={` ${
                        pricing.isPopular && "bg-secondary"
                      } w-1 h-1 rounded-full bg-gray-500`}
                    ></span>
                    <div
                      className={`${
                        pricing.isPopular && "border-secondary"
                      } flex-1 border-t border-gray-600 mx-2`}
                    ></div>
                  </div>
                  <span
                    className={`${
                      pricing.isPopular && "text-secondary"
                    } px-3 text-xs uppercase tracking-widest text-gray-400`}
                  >
                    Features
                  </span>
                  <div className="flex items-center flex-1">
                    <div
                      className={`${
                        pricing.isPopular && "border-secondary"
                      } flex-1 border-t border-gray-600 mx-2`}
                    ></div>
                    <span
                      className={` ${
                        pricing.isPopular && "bg-secondary"
                      } w-1 h-1 rounded-full bg-gray-500`}
                    ></span>
                  </div>
                </div>
                <ul className="flex flex-col gap-y-3">
                  {pricing.feature.map((list, index) => (
                    <li key={index} className="flex items-start gap-x-3">
                      <Check size={20} className=" shrink-0" />{" "}
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
