import type { ClientProject } from "../data";
import Video from "@/components/Video";
import { Button } from "@/components";
import { useNavigate } from "react-router";
import { CiShare1 } from "react-icons/ci";
import { DropdownMenuSeparator } from "@/lib";
import { Rating } from "@/components";
interface VideoProps {
  video: ClientProject;
}

const MainVideo: React.FC<VideoProps> = ({ video }) => {
  const navigate = useNavigate();
  return (
    <div className="grid gap-y-4 md:grid-cols-5 md:gap-x-4">
      <div className="relative md:col-span-3">
        <div className="rounded-3xl overflow-hidden shadow-2xl bg-black ">
          <Video src={video.src} />
        </div>
      </div>
      <div className="bg-primary special-gradiant text-secondary p-5 rounded-3xl md:col-span-2">
        <h3 className="text-xl font-bold">{video.clientName}</h3>
        <span className="text-xs">{video.location}</span>
        <div className="flex items-center">
          <span className="font-semibold">{video.position}</span>
          <Button
            label="percival pallets"
            icon={<CiShare1 strokeWidth={1} className="!w-5 !h-5"/>}
            iconDirection="right"
            onClick={() => navigate(`${video.website}`)}
            className="text-secondary bg- uppercase cursor-pointer"
            variant="link"
          />
        </div>
        <p className="pb-4 text-lg text-center">
          My Role: <span className="font-semibold">{video.myRole}</span>
        </p>
        <DropdownMenuSeparator />
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <span className="font-semibold">Rating</span>
            <Rating star={5} />
          </div>
          <div className="flex flex-col gap-y-1">
            <span className="font-semibold">Duration</span>
            <span className="font-semibold text-lg">{video.projectDuration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
