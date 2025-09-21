import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "motion/react";

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
import { Services } from "../data";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FALLBACK =
  "https://ik.imagekit.io/placeholder/placeholder.jpg?tr=w-1200,h-675,fo-auto,q-80";

const Service: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <motion.section
      className="relative p-5 min-h-screen bg-primary md:bg-bg-secondary flex items-center"
      viewport={{ amount: 0.4, once: false }}
      onViewportEnter={() => swiper?.autoplay.start()}
      onViewportLeave={() => swiper?.autoplay.stop()}
    >
      <div className="md:max-w-6xl mx-auto w-full">
        <h1 className="text-white md:text-primary text-3xl text-center mb-8 font-bold md:text-4xl">
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
                <Card className="h-full w-full overflow-hidden rounded-2xl p-0">
                  {/* --- IMAGE: equal size on every card --- */}
                  <CardHeader
                    className="
                      p-0 relative overflow-hidden shrink-0
                      w-full h-56 md:h-64   /* set the SAME height for all images */
                      rounded-b-none
                    "
                  >
                    <img
                      loading="lazy"
                      src={service.link || FALLBACK}
                      alt={service.label}
                      /* Absolutely position to fill header frame */
                      className="absolute inset-0 h-full w-full object-cover block"
                      onError={(e) => {
                        // fallback if an image fails (prevents tiny broken-icon)
                        (e.currentTarget as HTMLImageElement).src = FALLBACK;
                      }}
                    />
                  </CardHeader>

                  <CardContent className="flex-1">
                    <CardTitle>
                      <h2 className="text-2xl font-bold text-primary mb-2">
                        {service.label}
                      </h2>
                    </CardTitle>
                    <CardDescription className="text-destructive">
                      {service.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="mt-auto pb-5">
                    <CardAction>
                      <Button label="Check Details" className="cursor-pointer" />
                    </CardAction>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External nav buttons */}
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
