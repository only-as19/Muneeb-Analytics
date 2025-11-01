import { testimonialsVideos } from "../data";
import MainVideo from "./mainVideo";
const TestimonailsVideos: React.FC = () => {
  const mainVideo = testimonialsVideos[0]
  return (
    <section>
      <div>
        <h1>Our Success Stories</h1>
        <p>
          Discover the transformative impact we've had on leading businesses
        </p>
        <div>
          <MainVideo video={mainVideo}/>
        </div>
      </div>
    </section>
  );
};

export default TestimonailsVideos;
