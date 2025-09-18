import { useSwiper } from "swiper/react";
import { Button } from "../ui";
import type { ReactNode } from "react";
type Variant =
  | "default"
  | "link"
  | "outline"
  | "secondary"
  | "destructive"
  | "ghost";
interface Props {
  className?: string;
  label?: string;
  icon?: ReactNode;
  variant?: Variant;
}

const SwipperButtons: React.FC<Props> = ({
  className,
  label,
  variant,
  icon,
  ...props
}) => {
  const swiper = useSwiper();

  return (
    <Button
      className={`relative cursor-pointer ${className}`}
      label={label}
      variant={variant}
      icon={icon}
      onClick={() => swiper.slidePrev()}
      {...props}
    >
      <span>
        {icon && icon}
        {label}
      </span>
    </Button>
  );
};

export default SwipperButtons;
