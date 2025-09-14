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
    <section>
      <div>
        <h2>About</h2>
        <div>
          <div>
            <p>
              With expertise in Power BI, Tableau, Excel, SQL, and Python, we
              design dashboards and analytics solutions that help businesses
              track performance, cut costs, and discover new opportunities.
            </p>
            <p>
              Our focus is simple: clarity, accuracy, and results. Whether you
              need to understand your customers, optimize operations, or boost
              profitability, we deliver solutions that empower you to make
              confident decisions.
            </p>
          </div>
          <div>
            <Video options={videoJsOptions} onReady={handlePlayerReady} />
          </div>
        </div>
        <div>
            {statsData.map(stat=>(
                <div key={stat.label}>
                    <p>{stat.label}</p>
                    <p>{stat.value}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;
