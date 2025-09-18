import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
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
const Service: React.FC = () => {
  return (
    <section className="bg-primary p-5 min-h-96">
      <div>
        <h1 className="text-white text-3xl text-center mb-8 font-bold">
          Services I offer
        </h1>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={true}
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
