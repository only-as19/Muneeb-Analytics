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
    <section className="md:min-h-screen min-h-96 bg-bg-secondary p-5 flex flex-col justify-center items-center">
      <div className="max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{hero.title}</h1>
        <h3 className="text-xl md:text-2xl mb-1">{hero.subtitle}</h3>
        <p className="text-muted-foreground mb-6">
          {hero.description}
        </p>
        <div className="flex justify-center md:justify-start gap-x-2">
          <Button label="Pricing List" className=""/>
        <Button label="Pricing List" variant="outline" className=""/>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default ServiceHero;
