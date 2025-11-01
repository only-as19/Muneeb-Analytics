import { testimonialsVideos } from "../data";
import MainVideo from "./mainVideo";
const TestimonailsVideos: React.FC = () => {
  const mainVideo = testimonialsVideos[0]
  return (
    <section className="p-5 text-primary min-h-screen flex items-center flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Our Success Stories</h1>
        <p className="text-muted-foreground mb-4 text-center">
          Discover the transformative impact we've had on leading businesses
        </p>
        <div className="">
          <MainVideo video={mainVideo}/>
        </div>
      </div>
    </section>
  );
};

export default TestimonailsVideos;
