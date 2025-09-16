import {FaStar} from "react-icons/fa"

const Rating:React.FC = () => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index)=>{
        return (
           
                <FaStar key={index} color="#f7a031"/>
            
        )
      })}
    </div>
  )
}

export default Rating
