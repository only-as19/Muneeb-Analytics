import { useState } from "react";
import { testimonialsVideos } from "../data";
import MainVideo from "./mainVideo";
import OtherVideos from "./otherVideos";
const TestimonailsVideos: React.FC = () => {
  const [video, setVideo] = useState(testimonialsVideos);
  const mainVideo = video[0];
  const otherVideos = video.slice(1);
  const handleClick = (index: number) => {
    if (index === 0) return;
    const newVideoList = [...video];
    [newVideoList[0], newVideoList[index]] = [newVideoList[index],newVideoList[0]];
    setVideo(newVideoList);
  };
  return (
    <section className="p-5 text-primary min-h-screen flex items-center flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Our Success Stories
        </h1>
        <p className="text-muted-foreground mb-4 text-center">
          Discover the transformative impact we've had on leading businesses
        </p>
        <div className="grid gap-y-8">
          <div className="">
            <MainVideo video={mainVideo} />
          </div>
          <div>
            <OtherVideos
              video={otherVideos}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonailsVideos;
