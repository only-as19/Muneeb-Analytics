import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { reviews } from "./data";
import { SiFiverr } from "react-icons/si";
import Rating from "../Rating";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <section className="text-primary p-5 font-roboto py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 md:text-4xl md:mb-8">
          Trusted by Professionals Like You
        </h1>
        <Swiper
          speed={1000}
          className="mySwiper w-full overflow-visible"
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 2000,
          }}
          navigation={false}
          pagination={{ clickable: true }}
          effect="coverflow"
          loop
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide className="!w-96 !h-82">
              <div className="flex flex-col gap-y-2 text-accent p-4  bg-primary rounded-md shadow-primary h-full w-full">
                <div className="flex items-center justify-between">
                  <p className="text-xl font-semibold">
                    {review.name}{" "}
                    <span className="block text-xs italic font-normal">
                      {review.country}
                    </span>
                  </p>
                  <Rating />
                </div>
                <p className="">{review.feedback}</p>
                <div>
                  <Link to="#" className="flex items-center gap-x-1 font-bold">
                    Read on <SiFiverr size={40} color="#00b22d" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
