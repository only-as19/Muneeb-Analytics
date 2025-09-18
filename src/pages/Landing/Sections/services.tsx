import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "@/components";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/lib";
import { card_image } from "../data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Services } from "../data";
import { useState } from "react";
import type { Swiper as SwiprtType } from "swiper";
import { motion } from "motion/react";

const Service: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiprtType | null>(null);

  return (
    <motion.section
      className="relative bg-primary md:bg-bg-secondary py-16 px-5 min-h-screen"
      viewport={{ amount: 0.4, once: false }}
      onViewportEnter={() => swiper?.autoplay.start()}
      onViewportLeave={() => swiper?.autoplay.stop()}
    >
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-white md:text-primary text-3xl text-center mb-8 font-bold md:text-4xl">
          Services I offer
        </h1>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            speed={1200}
            grabCursor
            loop
            autoHeight
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            className="service-swiper"
            onSwiper={setSwiper}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {Services.map((service) => (
              <SwiperSlide key={service.label} className="!h-auto">
                <Card className="p-0 overflow-hidden gap-y-4">
                  <CardHeader className="p-0">
                    <div className="w-full aspect-video overflow-hidden">
                      <img
                        src={card_image}
                        alt={service.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle>
                      <h1 className="text-3xl font-bold text-primary mb-2">
                        {service.label}
                      </h1>
                    </CardTitle>
                    <CardDescription className="text-destructive">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pb-5">
                    <CardAction>
                      <Button
                        label="Check Details"
                        className="cursor-pointer"
                      />
                    </CardAction>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default Service;
