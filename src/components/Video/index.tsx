import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "jb-videojs-hls-quality-selector";

type VideoJsPlayer = ReturnType<typeof videojs>;

type VideoProps = {
  src: string;
  type?: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  aspectRatio?: string;
  poster?: string;
  language?: string;
  inlineVolume?: boolean;
  onReady?: (player: VideoJsPlayer) => void;
};

const Video: React.FC<VideoProps> = ({
  src,
  type = "application/x-mpegURL",
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  aspectRatio = "16:9",
  poster,
  language = "en",
  inlineVolume = false,
  onReady,
}) => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    if (!videoRef.current || playerRef.current) return;

    const videoElement = document.createElement("video-js");
    videoElement.classList.add("vjs-big-play-centered", "video-js");
    videoRef.current.appendChild(videoElement);

    const options = {
      autoplay,
      controls,
      loop,
      muted,
      responsive: true,
      fluid: true,
      aspectRatio,
      language,
      sources: [{ src, type }],
      ...(poster && { poster }),
      controlBar: {
        volumePanel: {
          inline: inlineVolume,
        },
      },
    };

    const player = (playerRef.current = videojs(videoElement, options, () => {
      videojs.log("player is ready");
      onReady?.(player);
    }));

    player.ready(() => {
      if (type === "application/x-mpegURL" && (player as any).hlsQualitySelector) {
        (player as any).hlsQualitySelector({
          displayCurrentQuality: true,
        });
      }
    });

    return () => {
      playerRef.current?.dispose();
      playerRef.current = null;
    };
  }, [src, type, autoplay, controls, loop, muted, aspectRatio, poster, language, inlineVolume]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default Video;

// Example usage:
/*
<Video 
  src="https://example.com/video.m3u8"
  autoplay={false}
  controls={true}
  loop={false}
  muted={false}
  aspectRatio="16:9"
  poster="https://example.com/poster.jpg"
  language="en"
  inlineVolume={false}
  onReady={(player) => console.log("Ready!", player)}
/>
*/