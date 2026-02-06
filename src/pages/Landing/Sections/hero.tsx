import React from "react";
import { hero_img } from "../data/data";
import { Button } from "@/components";
import { useNavigate } from "react-router";
import { Motion } from "@/Framer";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-bg-secondary min-h-96 p-5 flex flex-col gap-y-5 items-center md:justify-between md:flex-row md:px-28">
      <Motion className="md:order-2">
        <img
          src={hero_img}
          alt=""
          className="md:h-140 rounded-xl drop-shadow-xl object-cover"
        />
      </Motion>
      <div className="flex flex-col gap-y-4">
        <div>
          <span className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-widest uppercase rounded-full border border-cyan-500/30 bg-primary/30 text-primary">
          The Data Expert
        </span>
         <h1 className="text-gray-600 text-xl md:text-2xl ">
                Hello, I'm <span className="text-gray-900 font-semibold">Muneeb</span>
              </h1>
        </div>
        <Motion>
          <h1 className="text-3xl font-bold text-primary tracking-tight md:text-6xl md:max-w-xl">
            Turn Your Data Into Decisions
          </h1>
        </Motion>
        <Motion>
          <p className="text-muted-foreground text-sm max-w-xl">
            I help businesses unlock insights with interactive dashboards and
            predictive analytics, so your decisions are backed by data, not
            guesswork.
          </p>
        </Motion>

        <Motion>
          <div className="flex items-center justify-center space-x-3 md:justify-start">
            <Button
              label="Request a Free Demo"
              customClasses="md:py-5"
              onClick={() => navigate("/freeDemo")}
            />
            <Button
              label="Contact Us"
              variant="outline"
              customClasses="md:py-5"
              onClick={() => navigate("/contact")}
            />
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default Hero;
