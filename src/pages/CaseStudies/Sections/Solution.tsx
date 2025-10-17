import { useParams } from "react-router"
import { caseStudies } from "../data"
import { MdSwipeRightAlt } from "react-icons/md";


const Solution = () => {
    const {caseId} = useParams()
    const caseData = caseStudies.find(data=> data.id === caseId)
    const solution = caseData?.solution

  return (
    <section>
        <div>
            <h1>{solution?.heading}</h1>
            <p>{solution?.subheading}</p>
            <div>
                <img src={solution?.images} alt={solution?.heading} />
                <div>
                    {solution?.sections.map((data, i)=>(
                        <div key={i}>
                            <div>
                                <MdSwipeRightAlt/>
                                <h3>{data.title}</h3>
                            </div>
                            <ul>
                                {data.details.map((detail, i)=>(
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Solution
