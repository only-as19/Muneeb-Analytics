import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Button } from "@/components";

const Services: React.FC = () => {
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <section>
      <div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          loop={true}
          onSwiper={setSwiper} // capture swiper instance
        >
          <SwiperSlide className="bg-primary text-white">1</SwiperSlide>
          <SwiperSlide className="bg-primary text-white">2</SwiperSlide>
          <SwiperSlide className="bg-primary text-white">3</SwiperSlide>
          <SwiperSlide className="bg-primary text-white">4</SwiperSlide>
        </Swiper>

        {/* external button */}
        <Button label="Prev" onClick={() => swiper?.slidePrev()} />
        <Button label="Prev" onClick={() => swiper?.slideNext()} />
      </div>
    </section>
  );
};

export default Services;
