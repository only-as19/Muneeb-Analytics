import { Button } from "@/components";
import { useParams } from "react-router";
import { Services } from "../../data";
const ServiceHero:React.FC = () => {
  const { serviceId } = useParams();
  const serviceContent = Services.find(
    (service) => service.link === serviceId
  );
  const hero = serviceContent?.powerbi?.hero
  if (!hero) return <p>Service not found</p>;
  
  return (
    <section>
      <div>
        <h1>{hero.subtitle}</h1>
        <p>
          {hero.description}
        </p>
        <Button label="Pricing" />
      </div>
    </section>
  );
};

export default ServiceHero;
