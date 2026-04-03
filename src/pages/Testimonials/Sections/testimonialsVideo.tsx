
import { testimonialsVideos } from "../data";
import MainVideo from "./Testimonialvideos";
const TestimonailsVideos: React.FC = () => {
  
  return (
    <section className="px-5 py-20 text-primary min-h-96 flex items-center flex-col justify-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Client Success Stories
        </h1>
        <p className="text-muted-foreground mb-4 text-center">
          Explore how my work has supported clients and delivered meaningful results.
        </p>
          <div>
            <MainVideo videos={testimonialsVideos} />
          </div>
        </div>
    </section>
  );
};

export default TestimonailsVideos;
