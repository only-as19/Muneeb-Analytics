import { useSwiper } from "swiper/react";
import { Button } from "../ui";
type Variant =
  | "default"
  | "link"
  | "outline"
  | "secondary"
  | "destructive"
  | "ghost";
interface Props {
  className?: string;
  label?: {
    btn1: string;
    btn2: string;
  };
  variant?: {
    btn1?: Variant;
    btn2?: Variant;
  };
}

const SwipperButtons: React.FC<Props> = ({ className, label, variant }) => {
  const swiper = useSwiper();

  return (
    <div className={className}>
      <Button
        label={label?.btn1}
        variant={variant?.btn1}
        onClick={() => swiper.slidePrev()}
      />
      <Button
        label={label?.btn2}
        variant={variant?.btn2}
        onClick={() => swiper.slideNext()}
      />
    </div>
  );
};

export default SwipperButtons;
