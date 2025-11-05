import { Title, Challanges, Solution, Benefits } from "./Sections";
import {useParams } from "react-router";
import { caseStudies } from "./data";
import Error from "../Error/page";

import {CTA} from "@/components";
const CaseStudy:React.FC = () => {


    const { caseId } = useParams();
    const caseData = caseStudies.find((data) => data.id === caseId);
    
    if (!caseData) {
        return <Error />
    }
  return (
    <main>
    <Title/>
    <Challanges/>
    <Solution/>
    <Benefits/>
    <CTA/>
  </main>
  )
  
};

export default CaseStudy;
