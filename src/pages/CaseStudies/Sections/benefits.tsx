import { caseStudies } from "../data"
import { useParams } from "react-router"
import { Card, CardContent, CardDescription, CardTitle,} from "@/lib";
import { Car } from "lucide-react";
const Benefits = () => {
  const { caseId } = useParams();
  const caseData = caseStudies.find((data) => data.id === caseId)
  const benefit = caseData?.benefits
  return (
    <section>
        <div>
            <h1>{benefit?.title}</h1>
            <div>
                {benefit?.bullets.map(data=> (
                    <Card>
                    <CardContent>
                        <CardTitle>{data.title}</CardTitle>
                        <CardDescription>{data.bullet}</CardDescription>
                    </CardContent>
                </Card>
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default Benefits
