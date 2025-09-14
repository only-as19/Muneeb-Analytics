import React from "react";
import videojs from "video.js";
import Video from "@/components/Video";
type VideoJsPlayer = ReturnType<typeof videojs>;
type VideoJsPlayerOptions = Parameters<typeof videojs>[1];

const About: React.FC = () => {
  const playerRef = React.useRef<VideoJsPlayer | null>(null);

  const videoJsOptions: VideoJsPlayerOptions = {
    autoplay: true,
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
            <Video options={videoJsOptions} onReady={handlePlayerReady} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
