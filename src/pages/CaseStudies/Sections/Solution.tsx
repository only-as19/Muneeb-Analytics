import { useParams } from "react-router"
import { caseStudies } from "../data"
const Solution = () => {
    const {caseId} = useParams()
    const caseData = caseStudies.find(data=> data.id === caseId)
    const solution = caseData?.solution

  return (
    <section>
        <div>
            {solution?.heading}
        </div>
    </section>
  )
}

export default Solution
