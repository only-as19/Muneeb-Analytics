import type { Hero } from "../../data/data";
import { Button } from "@/components";
import { useNavigate } from "react-router-dom";
interface HeroType {
  heroData: Hero;
  image: string
}
const ServiceHero: React.FC<HeroType> = ({ heroData, image }) => {
  const navigate = useNavigate()
  return (
    <section className="bg- min-h-96 p-5 flex flex-col gap-y-5 md:justify-between md:flex-row md:px-28 text-primary">
        <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row gap-y-8 md:gap-x-12">
            <img src={image} alt={heroData.title} className="w-80 md:w-100 md:order-2"/>
            <div className="md:mr-10">
                <h1 className="text-3xl md:text-5xl font-bold">{heroData?.title}</h1>
            <p className="text-muted-foreground mt-2">{heroData.description}</p>
            <p className="text-sm text-muted-foreground mt-1 font-bold "><span className="">{heroData.subtitle}</span></p>
            <div className="flex justify-center md:justify-start mt-4 gap-x-2">
            <Button 
            label="Schedule a call"
             className="cursor-pointer"
             onClick={() => navigate('/contact#meeting')}
             />
            <Button
              label="Pricing List"
              variant="outline"
              onClick={() => {
                document.getElementById("pricing")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="cursor-pointer"
            />
          </div>
            </div>
        </div>
    </section>
  );
};

export default ServiceHero;
