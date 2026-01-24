import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "motion/react";
import { Button } from "@/components";
import { Services } from "../data/data";
import { ArrowLeft, ArrowRight, Video, TrendingUp } from "lucide-react";
import { Card, Rating } from "@/components";
import { Motion } from "@/Framer";

const Service: React.FC = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  return (
    <motion.section
      className="relative p-5 min-h-screen flex items-center"
      viewport={{ amount: 0.4, once: false }}
      onViewportEnter={() => swiper?.autoplay.start()}
      onViewportLeave={() => swiper?.autoplay.stop()}
    >
      <div className="md:max-w-6xl mx-auto w-full text-primary">
        <div className="mb-8 text-center">
          <Motion>
            <h1 className="capitalize text-3xl font-bold md:text-4xl mb-4">
              Services I offer
            </h1>
          </Motion>
          <Motion>
            <p className="text-muted-foreground">
              Empowering organizations and professionals to make smarter,
              data-driven decisions. From building interactive dashboards to
              developing predictive models and training your teams, I deliver
              end-to-end analytics solutions designed to transform data into
              actionable insights.
            </p>
          </Motion>
        </div>
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
              <SwiperSlide key={service.label} className="flex shadow-xl">
                <Card
                  headerImg={service.img || ""}
                  cardTitle={service.label}
                  cardDescription={service.description}
                  footer={{
                    buttonLink: service.link || "",
                    icon: <TrendingUp className="!h-6 !w-7" />,
                    btnClass: "self-end",
                    variant: "ghost",
                  }}
                >
                  <div className="flex flex-col gap-y-1 mt-1">
                    <div className="flex items-center justify-between">
                      <Motion>
                        <Rating rating={service.cardInfo.rating} star={service.cardInfo.rating} size={15} review={Number(service.cardInfo.totalReviews)} />
                      </Motion>
                      {Number(service.cardInfo.rating) > 4.6 && (
                        <Motion>
                          <span className="bg-orange-400 text-white text-xs px-2 py-1 rounded">
                            Top Rated
                          </span>
                        </Motion>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <Motion>
                        <span className="text-lg font-semibold">
                          From ${service.cardInfo.initialPrice}
                        </span>
                      </Motion>
                      <Motion>
                        <p className="text-sm">
                          Duration
                          <span className="block text-xs text-muted-foreground">
                            {service.cardInfo.duration} Days
                          </span>
                        </p>
                      </Motion>
                    </div>
                    <p className="flex items-center gap-x-2 text-muted-foreground text-sm">
                      <Video size={20} /> Offer video consultaion
                    </p>
                    {service.cardInfo.isBest && <p className="inline-block text-xs mt-2 text-white  ">
                      <span className="rounded standard px-3 py-1">
                        {service.cardInfo.CardSpecial}
                      </span>
                    </p>}
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
