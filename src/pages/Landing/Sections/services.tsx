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

const Service: React.FC = () => {
  const navigate = useNavigate();
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
                <Button label="Check Details" />
              </CardFooter>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardHeader>
                <img src={card_image} alt="" />
              </CardHeader>
              <CardContent>
                <CardTitle>
                  <h1>Automated Power BI Dashboards & Reports</h1>
                </CardTitle>
                <CardDescription>
                  Interactive and dynamic dashboards that update automatically,
                  giving you real-time business visibility.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <CardAction>
                  <Button label="Check Details" onClick={() => navigate} />
                </CardAction>
              </CardFooter>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Service;
