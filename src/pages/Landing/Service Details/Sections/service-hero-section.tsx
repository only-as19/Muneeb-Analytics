import { Button } from "@/components";
import { useParams } from "react-router-dom";
import { Services, statsData } from "../../data";
const ServiceHero: React.FC = () => {
  const { serviceId } = useParams();
  const serviceContent = Services.find((service) => service.link === serviceId);
  const hero = serviceContent?.details?.hero;
  if (!hero) return <p className="text-center">No title Mentioned</p>;

  return (
    <section className="md:min-h-screen min-h-96 bg-bg-secondary p-5 flex flex-col justify-center items-center ">
      <div className="max-w-6xl mx-auto flex flex-col gap-y-12">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            {hero.title}
          </h1>
          <h3 className="text-xl md:text-2xl mb-1">{hero.subtitle}</h3>
          <p className="text-muted-foreground mb-6">{hero.description}</p>
          <div className="flex justify-center md:justify-start gap-x-2">
            <Button label="Pricing List" className="" />
            <Button label="Pricing List" variant="outline" className="" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-2 ">
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className="px-1 py-4 rounded-sm shadow-xl
              shadow-primary text-center flex flex-col items-center justify-between gap-y-1 group bg-white"
            >
              <p className="text-3xl font-bold text-primary md:text-5xl group-hover:text-destructive">
                {stat.value}
              </p>
              <p className="text-zinc-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
