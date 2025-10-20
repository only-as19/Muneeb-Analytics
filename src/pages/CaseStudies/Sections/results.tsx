import { Card, CardContent, CardDescription, CardTitle,} from "@/lib";
import { useParams } from "react-router";
import { caseStudies } from "../data";
const Results:React.FC = () => {
    const { caseId } = useParams();
  const caseData = caseStudies.find((data) => data.id === caseId)
  const outcome = caseData?.benefits.outcomes
  return (
    <div>
        <p>{outcome?.subtext}</p>
        <h4>{outcome?.comparisonBasis}</h4>
      {outcome?.results.map(data=>(
        <div key={data.title}>
            <Card>
                <CardContent>
                    <CardTitle>{data.title}</CardTitle>
                    <CardDescription>{data.description}</CardDescription>
                </CardContent>
            </Card>
        </div>
      ))}
    </div>
  )
}

export default Results
