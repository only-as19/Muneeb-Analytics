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
      className="relative p-5 min-h-screen bg-primary md:bg-bg-secondary"
      viewport={{ amount: 0.4, once: false }}
      onViewportEnter={() => swiper?.autoplay.start()}
      onViewportLeave={() => swiper?.autoplay.stop()}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white md:text-primary text-3xl text-center mb-8 font-bold md:text-4xl">
          Services I offer
        </h1>
        <div className="relative">
          <Swiper
            effect="fade"
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            speed={1200}
            grabCursor
            loop
            autoplay={{ delay: 2000 }}
            className="service-swiper"
            onSwiper={setSwiper}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {Services.map((service) => (
              <SwiperSlide key={service.label}>
                <Card className="p-0 overflow-hidden gap-y-4 h-full">
                  <CardHeader className="p-0">
                    <img
                      src={card_image}
                      alt={service.label}
                      className="h-full w-full object-cover"
                    />
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
                  <CardFooter className="pb-5 mt-auto">
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
