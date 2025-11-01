import type {ClientProject} from "../data"
import Video from "@/components/Video"
import { Button } from "@/components"
import { useNavigate } from "react-router"
import { CiShare1 } from "react-icons/ci";
import { DropdownMenuSeparator } from "@/lib";
import {Rating} from "@/components";
interface VideoProps{
    video: ClientProject
}

const MainVideo:React.FC<VideoProps> = ({video}) => {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <Video
      src={video.src}
      aspectRatio="9:16"
      />
      </div>
      <div>
        <div></div>
        <h3>Their Words</h3>
        <h4>{video.clientName}</h4>
        <span>{video.location}</span>
        <div>
          <span>{video.position}</span>
        <Button 
        label="percival pallets"
        icon={<CiShare1/>}
        iconDirection="right"
        onClick={()=> navigate(`${video.website}`)}
        className="cursor-pointer"
        />
        </div>
        <p>My Role: <span>{video.myRole}</span></p>
        <DropdownMenuSeparator/>
        <div>
          <div>
            <span>Rating</span>
            <Rating star={5}/>
          </div>
          <div>
            <span>Duration</span>
            <span>{video.projectDuration}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainVideo
