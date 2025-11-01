import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

// Import HLS support (built into video.js 8+)
import "@videojs/http-streaming";

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
    if (!videoRef.current) return;

    // Don't reinitialize if player already exists
    if (playerRef.current) return;

    const videoElement = document.createElement("video-js");
    videoElement.classList.add("vjs-big-play-centered");
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
      html5: {
        vhs: {
          overrideNative: true,
        },
        nativeVideoTracks: false,
        nativeAudioTracks: false,
        nativeTextTracks: false,
      },
      sources: [
        {
          src,
          type,
        },
      ],
      ...(poster && { poster }),
      controlBar: {
        volumePanel: {
          inline: inlineVolume,
        },
      },
    };

    const player = videojs(videoElement, options, function () {
      console.log("Player is ready");
      onReady?.(this);
    });

    playerRef.current = player;

    // Error handling
    player.on("error", () => {
      const error = player.error();
      console.error("Video.js Error:", error);
      console.error("Error details:", {
        code: error?.code,
        message: error?.message,
        src: src,
        type: type,
      });
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [src, type, autoplay, controls, loop, muted, aspectRatio, poster, language, inlineVolume, onReady]);

  return (
    <div data-vjs-player style={{ width: "100%", maxWidth: "100%" }}>
      <div ref={videoRef} />
    </div>
  );
};

export default Video;