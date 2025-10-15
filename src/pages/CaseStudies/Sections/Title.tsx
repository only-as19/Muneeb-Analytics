import {useParams } from "react-router-dom"
import { caseStudies } from "../data"

const Title = () => {
    const {caseId} = useParams()
    const caseData = caseStudies.find(data=> data.id === caseId)
    return(
    <div>
      {caseData?.title}
    </div>
  )
}

export default Title
