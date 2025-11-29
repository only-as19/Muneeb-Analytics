import React, { useEffect, useRef} from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
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
  onError?: (error: any) => void;
  preload?: "auto" | "metadata" | "none";
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
  onError,
  preload = "metadata", // Don't preload entire video
}) => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);
  const onReadyRef = useRef(onReady);
  const onErrorRef = useRef(onError);

  // Keep callback refs updated without triggering effects
  useEffect(() => {
    onReadyRef.current = onReady;
    onErrorRef.current = onError;
  });

  useEffect(() => {
    if (!videoRef.current) return;

    // Initialize player only once
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const options = {
        autoplay,
        controls,
        loop,
        muted,
        preload,
        responsive: true,
        fluid: true,
        aspectRatio,
        language,
        html5: {
          vhs: {
            overrideNative: true,
            enableLowInitialPlaylist: true, // Better for large files
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
        onReadyRef.current?.(this);
      });

      playerRef.current = player;

      // Error handling
      player.on("error", () => {
        const error = player.error();
        console.error("Video.js Error:", error);
        console.error("Error details:", {
          code: error?.code,
          message: error?.message,
          src: player.currentSrc(),
          type: type,
        });
        onErrorRef.current?.(error);
      });
    }

    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []); // Only initialize once

  // Handle source updates separately
  useEffect(() => {
    const player = playerRef.current;
    if (!player || player.isDisposed()) return;

    // Update source if it changed
    const currentSrc = player.currentSrc();
    if (currentSrc !== src) {
      player.src({ src, type });
    }
  }, [src, type]);

  // Handle other prop updates
  useEffect(() => {
    const player = playerRef.current;
    if (!player || player.isDisposed()) return;

    player.autoplay(autoplay);
    player.loop(loop);
    player.muted(muted);
    if (poster) player.poster(poster);
  }, [autoplay, loop, muted, poster]);

  return (
    <div data-vjs-player style={{ width: "100%", maxWidth: "100%" }}>
      <div ref={videoRef} />
    </div>
  );
};

export default Video;