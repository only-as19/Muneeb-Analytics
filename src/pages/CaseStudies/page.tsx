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
    const solutionData = caseData?.solution
    const challanges = caseData.problemStatement
    const benefits = caseData.benefits
  return (
    <main>
    <Title caseData={caseData}/>
    {challanges && <Challanges challanges={challanges}/>}
    {solutionData && <Solution solution={solutionData}/>}
    {benefits && <Benefits benefit={benefits}/>}
    {caseData && <CTA/>}
  </main>
  )
  
};

export default CaseStudy;
