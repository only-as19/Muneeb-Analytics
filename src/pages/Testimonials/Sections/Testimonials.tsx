import { testimonialsData } from "../data";
import TestimonialCard from "./testimonialCard";
const Testimonials: React.FC = () => {
  return (
    <section>
      <div>
        <h1>Don't just take our words</h1>
        <p>
          Hear what our users say about us. We're always looking for ways to
          improve. If you have a positive experience with us, leave a review.
        </p>
      </div>
      <div>
        {testimonialsData.map((card,index)=>(
          <TestimonialCard key={index} card={card}/>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
