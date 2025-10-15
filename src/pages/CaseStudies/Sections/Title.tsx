import {useParams } from "react-router-dom"
import { caseStudies } from "../data"

const Title = () => {
    const {caseId} = useParams()
    const caseData = caseStudies.find(data=> data.id === caseId)
    return(
    <section>
        <div>
            <div>
                <h1>{caseData?.title}</h1>
            <p>{caseData?.overview}</p>
            </div>
            <div>
                <img src={caseData?.image} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Title
