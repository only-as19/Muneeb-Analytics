import { Title, Challanges, Solution, Benefits } from "./Sections";
import {useParams } from "react-router";
import Error from "../Error/page";
import { useCaseStudy } from "@/Hooks";
import {CTA} from "@/components";
const CaseStudy:React.FC = () => {

    const {getCaseStudyBySlug} = useCaseStudy()

    const { slug } = useParams();
    const caseData = slug ? getCaseStudyBySlug(slug) : undefined
    
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
