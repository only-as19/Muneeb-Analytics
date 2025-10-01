import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "motion/react";
import { Button } from "@/components";
import { Services } from "../data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {Card, Rating} from "@/components";

const Service:React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  return(
    <motion.section
      className="relative p-5 min-h-screen bg-primary md:bg-secondary flex items-center"
      viewport={{ amount: 0.4, once: false }}
      onViewportEnter={() => swiper?.autoplay.start()}
      onViewportLeave={() => swiper?.autoplay.stop()}
    >
      <div className="md:max-w-6xl mx-auto w-full">
        <h1 className="uppercase text-white md:text-primary text-3xl text-center mb-8 font-bold md:text-4xl">
          Services I offer
        </h1>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={24}
            speed={900}
            grabCursor
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="service-swiper"
            onSwiper={setSwiper}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {Services.map((service) => (
              <SwiperSlide key={service.label} className="flex">
                <Card
                headerImg={service.img || ""}
                cardTitle={service.label}
                cardDescription={service.description}
                footer={{
                  buttonLabel: "Check Details",
                  buttonLink:service.link || ""
                }}
                >
                  <div>
                    <Rating rating={4.5} star={4.3} size={15} review={40}/>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 px-2 z-10 hidden md:flex items-center justify-between">
            <Button
              icon={<ArrowLeft className="!w-5 !h-5" />}
              className="service-prev pointer-events-auto relative -left-20"
              onClick={() => swiper?.slidePrev()}
            />
            <Button
              icon={<ArrowRight className="!w-5 !h-5" />}
              className="service-next pointer-events-auto relative -right-20"
              onClick={() => swiper?.slideNext()}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Service;
