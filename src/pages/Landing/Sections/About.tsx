import React from "react";
import videojs from "video.js";
import Video from "@/components/Video";
type VideoJsPlayer = ReturnType<typeof videojs>;
type VideoJsPlayerOptions = Parameters<typeof videojs>[1];
import { statsData } from "../data";

const About: React.FC = () => {
  const playerRef = React.useRef<VideoJsPlayer | null>(null);

  const videoJsOptions: VideoJsPlayerOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    aspectRatio: "16:9",
    sources: [
      {
        src: "https://ik.imagekit.io/pdata3016/Muneeb%20Analytics/About.mp4/ik-master.m3u8?updatedAt=1757845483686&tr=sr-240_360_480_720_1080",
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player: VideoJsPlayer) => {
    playerRef.current = player;

    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <section className="p-5 min-h-96 flex-col items-center justify-center bg-primary text-zinc-300">
      <div className="max-w-5xl mx-auto flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-6 md:flex-row">
          <div className="text-zinc-300 text-center md:w-1/2 md:text-left flex flex-col justify-center gap-y-4 p-5 md:leading-7 ">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
              About Muneeb Analytics
            </h2>
            <p className="text-sm ">
              With expertise in Power BI, Tableau, Excel, SQL, and Python, we
              design dashboards and analytics solutions that help businesses
              track performance, cut costs, and discover new opportunities.
            </p>
            <p className="text-sm">
              Our focus is simple: clarity, accuracy, and results. Whether you
              need to understand your customers, optimize operations, or boost
              profitability, we deliver solutions that empower you to make
              confident decisions.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="w-full md:max-w-4/5">
              <Video options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-2 ">
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className="px-1 py-4 rounded-sm shadow-primary text-center flex flex-col items-center justify-between gap-y-1 group bg-accent/10"
            >
              <p className="text-3xl font-bold text-[#EBF4F6] md:text-5xl group-hover:text-[#E8B904]">
                {stat.value}
              </p>
              <p className="text-zinc-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
