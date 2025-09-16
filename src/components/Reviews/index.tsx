import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { reviews } from "./data";
import {SiFiverr} from "react-icons/si"
import Rating from "../Rating";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "../ui";

const Reviews = ()=> {
  const navigate = useNavigate()
  return (
      <section className="h-screen">
        <h1>Trusted by Professionals Like You</h1>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <div>
            <div>
              <p>{reviews[0].name} <span>{reviews[0].country}</span></p>
              <Rating />
            </div>
              <p>{reviews[0].feedback}</p>
              <div>
                <Button label="Read on Fiverr"/>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </section>
  );
}

export default Reviews