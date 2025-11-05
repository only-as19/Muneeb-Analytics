import { Rating } from "@/components";
import type { ClientProject } from "../data";
import { FaPlay } from "react-icons/fa";

interface VideoProps {
  video: ClientProject[];
  handleClick: (num: number) => void;
}

const OtherVideos: React.FC<VideoProps> = ({
  video,
  handleClick,
}) => {
  console.log(video);
  return (
    <div>
      <div className="grid gap-y-4 md:grid-cols-2 gap-x-8">
        {video.map((video, index) => (
          <button
            key={index + 1}
            onClick={() => handleClick(index + 1)}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl h-96 shadow-xl ">
              <img
                src={video.poster}
                alt={video.clientName}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black via-50% to-black opacity-70 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-0 group-hover:bg-opacity-20 rounded-full p-6 transition-all transform group-hover:scale-110">
                  <FaPlay size={25} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-black bg-opacity-40 rounded-lg p-3 backdrop-blur-sm">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500">
                        <span className="text-base font-bold text-white">
                          {video.clientName.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <p className="font-bold text-white text-sm">
                        {video.clientName}
                      </p>
                      <p className="text-blue-200 text-xs">{video.myRole}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={video.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 text-sm font-semibold transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {video.company}
                    </a>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        <Rating star={5} />
                      </div>
                      <span className="text-xs font-bold text-gray-300 bg-black bg-opacity-40 px-2 py-1 rounded">
                        {video.projectDuration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OtherVideos;
