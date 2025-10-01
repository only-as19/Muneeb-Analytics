import { FaStar,FaStarHalf,FaRegStar } from "react-icons/fa";
interface prop{
  star:number,
  review?:number
}

const Rating: React.FC<prop> = ({star,review}) => {

  const ratingStar = Array.from({length:5}, (_,index) =>{
    let number = index + 0.5
    return (
      <span key={index}>
        {
          star >= index + 1 ? <FaStar color="orange" /> : star >= number ? <FaStarHalf/> : <FaRegStar/>
        }
      </span>
    )
  })

  return (
    <div className="flex items-center">
      {ratingStar}
      {review && <span>{review}</span>}
    </div>
  );
};

export default Rating;
