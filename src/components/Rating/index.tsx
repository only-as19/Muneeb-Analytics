
import { FaStar,FaStarHalfAlt,FaRegStar } from "react-icons/fa";
interface prop{
  star:number,
  review?:number
  size?:string | number,
  className?:string
  rating?:number
}

const Rating: React.FC<prop> = ({rating,star,review,size,className}) => {

  const ratingStar = Array.from({length:5}, (_,index) =>{
    let number = index + 0.25
    return (
      <span key={index}>
        {
          star >= index + 1 ? <FaStar color="orange" size={size} className={`${className}`}/> : star > number ? <FaStarHalfAlt color="orange" stroke="orange" size={size} className={`${className}`}/> : <FaRegStar size={size} className={`${className}`} color="orange"/>
        }
      </span>
    )
  })

  return (
    <div className="flex items-center">
      <span className="text-[#8B4309] font-semibold font-sm mr-1">{rating}</span>
      {ratingStar}
      {review && <span className="text-muted-foreground text-xs ml-1">({review})</span>}
    </div>
  );
};

export default Rating;
