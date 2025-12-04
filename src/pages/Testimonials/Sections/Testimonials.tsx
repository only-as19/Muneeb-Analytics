import TestimonialCard from "./testimonialCard";
import { reviews } from "../data";
const Testimonials: React.FC = () => {
  return (
    <section className="p-5 min-h-screen text-primary bg-secondary flex flex-col justify-center items-center ">
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold text-center md:text-4xl">
            Trusted by Clients Around the World
          </h1>
          <p className="text-muted-foreground text-center">
            Clients worldwide rely on my ability to transform complex data into clarity. Their testimonials share how my analytical approach, attention to detail, and business-focused insights helped drive real results.
          </p>
        </div>
        <div>
          <div className="md:hidden">
            {reviews.map((card, index) => (
              <TestimonialCard key={index} card={card} />
            ))}
          </div>
          <div className="hidden md:block">
            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
              <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-secondary to-transparent"></div>
              <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
                {[...reviews, ...reviews].map((card, index) => (
                  <TestimonialCard key={index} card={card} />
                ))}
              </div>
              <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-secondary to-transparent"></div>
            </div>

            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
              <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-secondaryto-transparent"></div>
              <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
                {[...reviews, ...reviews].map((card, index) => (
                  <TestimonialCard key={index} card={card} />
                ))}
              </div>
              <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-secondary to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
