import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

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
  onError?: (error: any) => void;
  preload?: "auto" | "metadata" | "none";
};

const Video: React.FC<VideoProps> = ({
  src,
  type = "video/mp4",
  autoplay = false,
  controls = true,
  loop = false,
  muted = false,
  aspectRatio = "16:9",
  poster,
  language = "en",
  inlineVolume = false,
  onReady,
  onError,
  preload = "auto",
}) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    // Initialize player only once
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const options = {
        autoplay,
        controls,
        loop,
        muted,
        aspectRatio,
        language,
        preload,
        poster,
        sources: [{ src, type }],
        controlBar: {
          volumePanel: {
            inline: inlineVolume,
          },
        },
      };

      playerRef.current = videojs(videoElement, options, function () {
        videojs.log("Player is ready");
        onReady?.(this);
      });

      // Handle errors
      if (onError) {
        playerRef.current.on("error", () => {
          onError(playerRef.current?.error());
        });
      }
    }
  }, []);

  // Update player when props change
  useEffect(() => {
    const player = playerRef.current;
    if (player) {
      player.autoplay(autoplay);
      player.loop(loop);
      player.muted(muted);
      player.src({ src, type });
      if (poster) player.poster(poster);
    }
  }, [src, type, autoplay, loop, muted, poster]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player className="rounded-2xl overflow-hidden">
      <div ref={videoRef}/>
    </div>
  );
};

export default Video;
