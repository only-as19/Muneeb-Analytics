import { ServiceHero, WhatsIncluded, Features, Pricing } from "./Sections";
import { CTA } from "@/components";
import useService from "@/Hooks/useService";
import { useParams } from "react-router";
const ServiceDetail = () => {
  const { slug } = useParams();
  const { getServicetBySlug } = useService();
  const services = getServicetBySlug(slug as string);
  const hero = services?.details?.hero;
  const serviceContent = services?.details?.serviceContent;
  const features = services?.details?.features;
  const pricing = services?.details?.pricing;
  return (
    <div>
      <ServiceHero heroData={hero!} />
      <WhatsIncluded serviceContent={serviceContent!} />
      <Features features={features!} />
      <Pricing pricing={pricing!} />
      <CTA />
    </div>
  );
};

export default ServiceDetail;
