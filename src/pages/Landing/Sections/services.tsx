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
import SwipperButtons from "@/components/Swiper Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Services } from "../data";

const Service: React.FC = () => {
  return (
    <section className="p-5 min-h-screen bg-primary md:bg-bg-secondary ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white md:text-primary  text-3xl text-center mb-8 font-bold md:text-4xl">
          Services I offer
        </h1>
        <Swiper
        effect="fade"
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{clickable:true}}
          spaceBetween={30}
          speed={1200}
          grabCursor={true}
          breakpoints={{
            0:{
              slidesPerView:1
            },
            768:{
              slidesPerView:3
            }
          }}  
          loop={true}
          autoplay={{
            delay:2000
          }}
          className="service-swiper "
        >
          {Services.map(service=>(
            <SwiperSlide>
            <Card className="p-0 overflow-hidden gap-y-4">
              <CardHeader className="p-0">
                <img src={card_image} alt={service.label} className="h-full w-full" />
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
                  <Button label="Check Details"
                  className="cursor-pointer"
                  />
                </CardAction>
              </CardFooter>
            </Card>
          </SwiperSlide>
          ))}
          <div className="hidden">
            <SwipperButtons
              icon={<ArrowLeft className="!w-5 !h-5" />}
              className="!w-10 !h-10"
            />
            <SwipperButtons
              icon={<ArrowRight className="!w-5 !h-5" />}
              className="!w-10 !h-10"
            />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Service;
