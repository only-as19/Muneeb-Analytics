import { cta_img } from "./data";
import { Button } from "@/components";
import { Motion } from "@/Framer";
import { useNavigate } from "react-router-dom";
const CTA: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-100 p-5 flex flex-col items-center justify-center">
      <div className="bg-secondary items-center  max-w-6xl py-8 rounded-md md:grid md:grid-cols-2 space gap-x-8 mx-auto md:py-6 md:px-6">
        <div className="">
          <Motion>
            <img src={cta_img} alt="" className="w-full h-full object-cover" />
          </Motion>
        </div>
        <div className="mt-4 flex flex-col gap-y-4 ">
          <Motion>
            <h2 className="text-primary text-2xl md:text-4xl font-extrabold tracking-tight">
              Empowering Businesses to Turn Data Into Growth
            </h2>
          </Motion>
          <Motion>
            <p className="font-normal text-muted-foreground">
              Unlock the full potential of your data with my professional
              analytics solutions. From interactive dashboards to actionable
              insights, I help you make smarter, faster, and more confident
              business decisions.
            </p>
          </Motion>
          <Motion>
            <div className="flex md:gap-x-3 gap-y-3 flex-col md:flex-row">
              <Button
                label="Request a free demo"
                customClasses="md:py-5"
                variant="outline"
                onClick={() => navigate("/freeDemo")}
              />
              <Button label="Schedule a call" customClasses="md:py-5" />
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default CTA;
