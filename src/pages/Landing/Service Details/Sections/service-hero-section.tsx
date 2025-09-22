import { Button } from "@/components";
import { useParams } from "react-router";
import { Services } from "../../data";
const ServiceHero = () => {
  const { serviceId } = useParams();
  const serviceContent = Services.filter(
    (service) => service.link === serviceId
  );
  const data = serviceContent.map(service=> service.powerbi)
  console.log(data)

  console.log(serviceContent)
  return (
    <section>
      <div>
        <h1>Unlock Real&ndash;Time Business Intelligence</h1>
        <p>
          Turn raw data into powerful insights with fully automated dashboards
          designed for Sales, Finance, Marketing, HR, Supply Chain, Operations,
          Customer Service, IT, and Project Management. Gain a complete view of
          your organization in real time so you can track performance, uncover
          oppertunities, and make smarter decesions with confidence.
        </p>
        <Button label="Pricing" />
      </div>
    </section>
  );
};

export default ServiceHero;
