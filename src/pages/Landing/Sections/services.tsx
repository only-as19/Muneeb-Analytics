import { useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Button } from "@/components";
import {Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent}
  from "@/lib"
import { card_image } from "../data"; 
import { useNavigate } from "react-router-dom";
const Service: React.FC = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const navigate = useNavigate()
  return (
    <section>
      <div>
        <Swiper
          modules={[Navigation]}
          // slidesPerView={2}
          loop={true}
          onSwiper={setSwiper}
        >
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
                  Interactive and dynamic dashboards that update automatically, giving you real-time business visibility.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button label="Check Details"/>
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
                  Interactive and dynamic dashboards that update automatically, giving you real-time business visibility.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <CardAction>
                  <Button label="Check Details" onClick={()=> navigate}/>
                </CardAction>
              </CardFooter>
            </Card>
          </SwiperSlide>
        </Swiper>
        <Button label="Prev" onClick={() => swiper?.slidePrev()} />
        <Button label="Prev" onClick={() => swiper?.slideNext()} />
      </div>
    </section>
  );
};

export default Service;
