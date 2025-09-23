import { useParams } from "react-router";
import { Services} from "../../data";


const WhatsIncluded = () => {
    const { serviceId } = useParams();
    const serviceContent = Services.find((service) => service.link === serviceId);
    console.log(serviceContent)
  return (
    <section>
        asad
    </section>
  )
}

export default WhatsIncluded
