import {FaStar} from "react-icons/fa"

const Rating:React.FC = () => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index)=>{
        return (
           
                <FaStar key={index} color="yellow"/>
            
        )
      })}
    </div>
  )
}

export default Rating
