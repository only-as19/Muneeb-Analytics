import { testimonialsData } from "../data";
import TestimonialCard from "./testimonialCard";
const Testimonials: React.FC = () => {
  return (
    <section className="p-5 min-h-screen text-primary bg-secondary flex flex-col justify-center items-center ">
      <div className="max-w-6xl mx-auto">
        <div>
        <h1 className="text-3xl font-bold text-center md:text-4xl">Don't just take our words</h1>
        <p className="text-muted-foreground text-center mb-4">
          Hear what our users say about us. We're always looking for ways to
          improve. If you have a positive experience with us, leave a review.
        </p>
      </div>
      <div>
        <div className="md:hidden">
          {testimonialsData.map((card,index)=>(
          <TestimonialCard key={index} card={card}/>
        ))}
        </div>
        <div className="hidden md:block">
          <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-secondary to-transparent"></div>
                <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
                    {[...testimonialsData,...testimonialsData].map((card, index) => (
                        <TestimonialCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-secondary to-transparent"></div>
            </div>

            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-secondaryto-transparent"></div>
                <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
                    {[...testimonialsData,...testimonialsData].map((card, index) => (
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
