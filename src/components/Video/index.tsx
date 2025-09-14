import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "jb-videojs-hls-quality-selector";
import "videojs-contrib-quality-levels";

type VideoJsPlayer = ReturnType<typeof videojs>;
type VideoJsPlayerOptions = Parameters<typeof videojs>[1];

type Props = {
  options: VideoJsPlayerOptions;
  onReady?: (player: VideoJsPlayer) => void;
};

const Video: React.FC<Props> = ({ options, onReady }) => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    if (!videoRef.current || playerRef.current) return;

    const videoElement = document.createElement("video-js");
    videoElement.classList.add("vjs-big-play-centered", "video-js");
    videoRef.current.appendChild(videoElement);

    const player = (playerRef.current = videojs(videoElement, options, () => {
      videojs.log("player is ready");
      onReady?.(player);
    }));

    player.ready(() => {
      // Initialize the new quality selector plugin
      (player as any).hlsQualitySelector({
        displayCurrentQuality: true,
      });
    });

    return () => {
      playerRef.current?.dispose();
      playerRef.current = null;
    };
  }, [options, onReady]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default Video;