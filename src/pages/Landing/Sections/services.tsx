import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
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
import { useNavigate } from "react-router-dom";

import { useSwiper } from "swiper/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
const Service: React.FC = () => {
  const navigate = useNavigate();
  const swiper = useSwiper()

  return (
    <section className="bg-primary p-5">
      <div>
        <h1 className="text-white text-3xl text-center mb-8 font-bold">
          Services I offer
        </h1>
        <Swiper
          modules={[Navigation]}
          // slidesPerView={2}
          loop={true}
        >
          <SwiperSlide>
            <Card className="p-0 overflow-hidden gap-y-4">
              <CardHeader className="p-0">
                <img src={card_image} alt="" className="h-full w-full" />
              </CardHeader>
              <CardContent>
                <CardTitle>
                  <h1 className="text-3xl font-bold text-primary mb-2">
                    Automated Power BI Dashboards & Reports
                  </h1>
                </CardTitle>
                <CardDescription>
                  Interactive and dynamic dashboards that update automatically,
                  giving you real-time business visibility.
                </CardDescription>
              </CardContent>
              <CardFooter className="pb-5">
                <CardAction>
                  <Button label="Check Details" />
                </CardAction>
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="p-0 overflow-hidden gap-y-4">
              <CardHeader className="p-0">
                <img src={card_image} alt="" className="h-full w-full" />
              </CardHeader>
              <CardContent>
                <CardTitle>
                  <h1 className="text-3xl font-bold text-primary mb-2">
                    Automated Power BI Dashboards & Reports
                  </h1>
                </CardTitle>
                <CardDescription>
                  Interactive and dynamic dashboards that update automatically,
                  giving you real-time business visibility.
                </CardDescription>
              </CardContent>
              <CardFooter className="pb-5">
                <CardAction>
                  <Button label="Check Details" />
                </CardAction>
              </CardFooter>
            </Card>
          </SwiperSlide>
          {/* <SwipperButtons
            icon={{
              btn1: <ArrowLeft/>,
              btn2: <ArrowRight/>,
            }}
            variant={{
              btn1: "secondary",
              btn2: "secondary",
            }}
            className="flex justify-start gap-x-3 mt-4"
          /> */}
          <div>
          <Button icon={<ArrowLeft/>} onClick={()=> swiper.slidePrev()}/>
          <Button icon={<ArrowRight/>} onClick={()=> swiper.slideNext()}/>
        </div>
        </Swiper>
        
      </div>
    </section>
  );
};

export default Service;
