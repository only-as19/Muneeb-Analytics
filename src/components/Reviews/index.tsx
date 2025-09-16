import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.css"

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
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
          0:{
            slidesPerView:1
          },
          768:{
            slidesPerView:2
          }
        }}
      >
        <SwiperSlide className=''>
          <div className='h-36 w-36'>Asad</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-36 w-36'>Asad</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-36 w-36'>Asad</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-36 w-36'>Asad</div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
