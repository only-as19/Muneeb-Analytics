import { caseStudies } from "../data"
import { useParams } from "react-router"
import { Card, CardContent, CardDescription, CardTitle,} from "@/lib";
import { Car } from "lucide-react";
const Benefits = () => {
  const { caseId } = useParams();
  const caseData = caseStudies.find((data) => data.id === caseId)
  const benefit = caseData?.benefits
  return (
    <section className="min-h-screen p-5 felx flex-col items-center justify-center">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl text-center font-bold mb-8">{benefit?.title}</h1>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 gap-y-6 place-items-center">
                {benefit?.bullets.map(data=> (
                    <Card className="hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="text-center">
                        <CardTitle className="mb-2">{data.title}</CardTitle>
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
