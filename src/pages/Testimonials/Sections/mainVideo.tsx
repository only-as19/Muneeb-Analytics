import type { ClientProject } from "../data";
import Video from "@/components/Video";
import { Button } from "@/components";
import { CiShare1 } from "react-icons/ci";
import { DropdownMenuSeparator } from "@/lib";
import { Rating } from "@/components";
import { GrLocation } from "react-icons/gr";

interface VideoProps {
  videos: ClientProject[];
}

const MainVideo: React.FC<VideoProps> = ({ videos }) => {
  return (
    <div className="grid gap-y-6">
      {videos.map((video) => (
        <div
          key={video.clientName}
          className="bg-secondary p-5 rounded-md flex flex-col lg:flex-row gap-4"
        >
          <div className="rounded-2xl overflow-hidden w-full lg:w-2/3">
            <Video
              src={video.src}
              type={video.type || "video/mp4"}
              poster={video.poster}
              preload="none"
              controls
              aspectRatio="16:9"
            />
          </div>
          <div className="lg:w-1/3 flex flex-col">
            <div>
              <h3 className="text-xl font-bold mb-2">{video.clientName}</h3>
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-sm">{video.position}</span>
                <p className="flex gap-x-2 items-center text-sm">
                  <GrLocation className="h-4 w-4" />
                  {video.location}
                </p>
              </div>

              {video.website && video.company && (
                <Button
                  label={video.company}
                  icon={<CiShare1 />}
                  variant="outline"
                  className="w-full"
                />
              )}
            </div>

            <div>
              <DropdownMenuSeparator className="my-4" />
              <p className="font-bold text-center mb-3">About Project</p>
              <p className="text-sm mb-3">
                <span className="text-gray-400">My Role:</span>{" "}
                <span className="font-medium">{video.myRole}</span>
              </p>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-400 text-xs">Duration</span>
                  <p className="font-semibold text-sm">{video.projectDuration}</p>
                </div>

                <div className="text-right">
                  <span className="text-gray-400 text-xs block mb-1">Rating</span>
                  <Rating star={video.rating} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainVideo;