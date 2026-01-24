import { useState } from "react";
import type { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "motion/react";
import { Button } from "@/components";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SwiperWrapperProps {
  children: ReactNode;
  showNavigation?: boolean;
  showPagination?: boolean;
  autoplay?: boolean | { delay: number; disableOnInteraction?: boolean };
  speed?: number;
  spaceBetween?: number;
  loop?: boolean;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
    };
  };
  className?: string;
  onViewportEnter?: () => void;
  onViewportLeave?: () => void;
}

const SwiperWrapper: React.FC<SwiperWrapperProps> = ({
  children,
  showNavigation = true,
  showPagination = true,
  autoplay = { delay: 2500, disableOnInteraction: false },
  speed = 900,
  spaceBetween = 24,
  loop = true,
  breakpoints = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  className = "",
  onViewportEnter,
  onViewportLeave,
}) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handleViewportEnter = () => {
    swiper?.autoplay.start();
    onViewportEnter?.();
  };

  const handleViewportLeave = () => {
    swiper?.autoplay.stop();
    onViewportLeave?.();
  };

  return (
    <motion.div
      className="relative"
      viewport={{ amount: 0.4, once: false }}
      onViewportEnter={handleViewportEnter}
      onViewportLeave={handleViewportLeave}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={showPagination ? { clickable: true } : false}
        spaceBetween={spaceBetween}
        speed={speed}
        grabCursor
        loop={loop}
        autoplay={autoplay}
        className={className}
        onSwiper={setSwiper}
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>

      {showNavigation && (
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 px-2 z-10 hidden md:flex items-center justify-between">
          <Button
            icon={<ArrowLeft className="!w-5 !h-5" />}
            className="pointer-events-auto relative -left-20"
            onClick={() => swiper?.slidePrev()}
          />
          <Button
            icon={<ArrowRight className="!w-5 !h-5" />}
            className="pointer-events-auto relative -right-20"
            onClick={() => swiper?.slideNext()}
          />
        </div>
      )}
    </motion.div>
  );
};

export { SwiperWrapper, SwiperSlide };