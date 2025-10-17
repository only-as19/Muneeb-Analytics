import { useParams } from "react-router"
import { caseStudies } from "../data"
import { MdSwipeRightAlt } from "react-icons/md";


const Solution = () => {
    const {caseId} = useParams()
    const caseData = caseStudies.find(data=> data.id === caseId)
    const solution = caseData?.solution

  return (
    <section className="p-5 min-h-screen flex justify-center items-center bg-secondary text-primary">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-center">{solution?.heading}</h1>
            <p className="text-muted-foreground text-center mb-8">{solution?.subheading}</p>
            <div className="flex flex-col items-center gap-y-10 md:flex-row md:gap-x-8">
                <img src={solution?.images} alt={solution?.heading} 
                className="order-2 md:max-w-120"
                />
                <div className="flex flex-col gap-y-3">
                    {solution?.sections.map((data, i)=>(
                        <div key={i}>
                            <div className="flex items-center gap-x-4">
                                <MdSwipeRightAlt className="h-6 w-6"/>
                                <h4 className="font-bold text-lg">{data.title}</h4>
                            </div>
                            <ul>
                                {data.details.map((detail, i)=>(
                                    <li
                                    className="text-muted-foreground"
                                    key={i}>{detail}</li>
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
