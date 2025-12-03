import type { ClientProject } from "../data";
import { Link } from "react-router-dom";
import Video from "@/components/Video";
import { FaStar } from "react-icons/fa6";

interface VideoProps {
  videos: ClientProject[];
}

const MainVideo: React.FC<VideoProps> = ({ videos }) => {
  const mainVideo = videos[0];
  const otherVideos = videos.slice(1, 3);
  return (
    <div className="grid gap-y-8">
      <div className="flex flex-col md:flex-row p-4  rounded-2xl shadow-xl gap-3">
        <div className="md:w-3/5 md:shrink-0">
          <Video src={mainVideo.src} poster={mainVideo.poster} />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-light uppercase">
            {mainVideo.clientName} - {mainVideo.position}{" "}
            {mainVideo.website && (
              <span>
                at <Link to={mainVideo.website}>{mainVideo.company}</Link>
              </span>
            )}
          </p>
          <h2 className="text-lg font-semibold capitalize">
            Data systems for a nationwide pallet operation
          </h2>
          <p className="line-clamp-3 md:line-clamp-none  text-muted-foreground text-sm">
            {mainVideo.website && (
              <span className="italic">
                <Link to={mainVideo.website}>About {mainVideo.company}</Link>
              </span>
            )}
            {":  "}
            {mainVideo.about}
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-secondary text-xs px-3 py-1.5 rounded-3xl shadow">
              My role: {mainVideo.myRole}
            </span>
            <span className="bg-secondary text-xs px-3 py-1.5 rounded-3xl shadow">
              {mainVideo.projectDuration}
            </span>
            <div className="bg-secondary text-xs px-3 py-1.5 rounded-3xl shadow flex items-center gap-1">
              <FaStar strokeWidth={1} color="orange" size={14} />
              <p className="">{mainVideo.rating}.0 Rating</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-x-4">
        {otherVideos.map((video) => (
          <div
            key={video.clientName}
            className="flex flex-col p-4 rounded-2xl shadow-xl gap-3"
          >
            <div>
              <Video src={video.src} poster={video.poster} />
            </div>
            <div className="flex flex-col gap-1 h-full">
              <p className="font-light uppercase">
                {video.clientName} - {video.position}{" "}
                {video.website && (
                  <span>
                    at <Link to={video.website}>{video.company}</Link>
                  </span>
                )}
              </p>
              <h2 className="text-lg font-semibold capitalize">
                {video.myRole}
              </h2>
              <p className="line-clamp-3 md:line-clamp-none  text-muted-foreground text-sm">
                {video.about}
              </p>
              <div className=" mt-auto flex gap-2 flex-wrap">
                <span className="bg-secondary text-xs px-3 py-1.5 rounded-3xl shadow">
                  My role: {video.myRole}
                </span>
                <span className="bg-secondary text-xs px-3 py-1.5 rounded-3xl shadow">
                  {video.projectDuration}
                </span>
                <div className="bg-secondary text-xs px-3 py-1.5 rounded-3xl shadow flex items-center gap-1">
                  <FaStar strokeWidth={1} color="orange" size={14} />
                  <p className="">{video.rating}.0 Rating</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainVideo;
