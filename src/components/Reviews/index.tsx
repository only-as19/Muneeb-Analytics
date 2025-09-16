import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { reviews } from "./data";
import { SiFiverr } from "react-icons/si";
import Rating from "../Rating";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "../ui";
import { Link } from "react-router-dom";

const Reviews = () => {
  const navigate = useNavigate();
  return (
    <section className="text-primary p-5 font-roboto py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Trusted by Professionals Like You</h1>
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full overflow-visible"
        
      >
        <SwiperSlide className="!w-96">
          <div className="flex flex-col gap-y-2 text-accent p-4 bg-primary rounded-md shadow-primary ">
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold">
                {reviews[0].name} <span className="block text-xs italic font-normal">{reviews[0].country}</span>
              </p>
              <Rating />
            </div>
            <p className="">{reviews[0].feedback}</p>
            <div>
              <Link to="#" className="flex items-center gap-x-1 font-bold">Read on <SiFiverr size={40} color="#00b22d"/></Link>
            </div>
          </div>
        </SwiperSlide >
        <SwiperSlide className="!w-96">
          <div className="flex flex-col gap-y-2 text-accent p-4 bg-primary rounded-md">
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold">
                {reviews[0].name} <span className="block text-xs italic font-normal">{reviews[0].country}</span>
              </p>
              <Rating />
            </div>
            <p className="">{reviews[0].feedback}</p>
            <div>
              <Link to="#" className="flex items-center gap-x-1 font-bold">Read on <SiFiverr size={40} color="#00b22d"/></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-96">
          <div className="flex flex-col gap-y-2 text-accent p-4 bg-primary rounded-md">
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold">
                {reviews[0].name} <span className="block text-xs italic font-normal">{reviews[0].country}</span>
              </p>
              <Rating />
            </div>
            <p className="">{reviews[0].feedback}</p>
            <div>
              <Link to="#" className="flex items-center gap-x-1 font-bold">Read on <SiFiverr size={40} color="#00b22d"/></Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
