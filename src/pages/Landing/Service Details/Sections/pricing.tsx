import { PricingData } from "../../data";
import { PricingCard } from "@/components";
import { Clock3, RefreshCcw,CircleCheckBig } from "lucide-react";

const Pricing: React.FC = () => {
  return (
    <section className="p-5 min-h-screen flex flex-col color-for items-center bg-secondary font-roboto">
      <div>
        <div>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            necessitatibus hic quas? Minus accusamus vitae cum autem, expedita
            qui illo error quas blanditiis officiis, quibusdam assumenda eum
            voluptas dolores explicabo?
          </p>
        </div>
      </div>
      <div>
        {PricingData.map((pricing) => (
          <div key={pricing.name}>
            <PricingCard
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
                    <li key={index}
                    className="flex items-start gap-x-3"
                    >
                      <CircleCheckBig size={20} className=" shrink-0" /> <span className="text-sm">{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </PricingCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
