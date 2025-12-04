import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import type { ReviewItem } from "../data";
import { TbBrandFiverr } from "react-icons/tb";
import { Link } from "react-router-dom";
interface CardProps {
  card: ReviewItem;
}

const TestimonialCard: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all duration-200 mt-6 md:mx-3 md:w-72 shrink-0">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p>{card.name}</p>
          <div className="bg-secondary text-xs px-3 py-1.5 rounded-3xl shadow flex items-center gap-1">
            <FaStar strokeWidth={1} color="orange" size={14} />
            <p className="">{card.rating}.0 Rating</p>
          </div>
        </div>
        <p className="flex items-center gap-0.5">
          <FaLocationDot size={12} />
          <span className="text-xs text-primary">{card.location}</span>
        </p>
      </div>
      <div className="py-4">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {card.review}
        </p>
      </div>
      <div className="mt-2 flex gap-2 justify-between">
        <span className="bg-secondary text-xs px-3 py-1.5 rounded-3xl shadow">
          My role: {card.role}
        </span>
      <div className="text-xs flex items-center gap-1">
          <span>Posted on</span>
          <Link to="https://www.fiverr.com/muneebnasir496?public_mode=true"><TbBrandFiverr size={15} className="hover:text-green-500"/></Link>

        </div>
</div>
    </div>
  );
};

export default TestimonialCard;
