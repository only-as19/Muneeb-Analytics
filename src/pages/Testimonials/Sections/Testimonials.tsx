import TestimonialCard from "./testimonialCard";
import { reviews } from "../data";

const Testimonials: React.FC = () => {
  return (
    <section className="p-5 min-h-screen text-primary bg-secondary flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-center md:text-4xl">
            Trusted by Clients Around the World
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Clients worldwide rely on my ability to transform complex data into clarity.
          </p>
        </div>

        <div>
          {/* Mobile View: Simple Grid or List */}
          <div className="md:hidden space-y-4">
            {reviews.map((card, index) => (
              <TestimonialCard key={index} card={card} />
            ))}
          </div>

          {/* Desktop View: Marquee */}
          <div className="hidden md:block space-y-10">
            {/* Row 1: Forward */}
            <div className="marquee-container relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-secondary to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-secondary to-transparent"></div>
              
              <div className="marquee-track flex w-max items-stretch">
                {/* We render the list twice to create the seamless loop */}
                {[...reviews, ...reviews].map((card, index) => (
                  <div key={index} className="flex-shrink-0 px-4 h-full">
                    <TestimonialCard card={card} />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Reverse */}
            <div className="marquee-container relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-secondary to-transparent"></div>
              <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-secondary to-transparent"></div>
              
              <div className="marquee-track marquee-reverse flex w-max">
                {[...reviews, ...reviews].map((card, index) => (
                  <div key={index} className="flex-shrink-0 px-4">
                    <TestimonialCard card={card} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;