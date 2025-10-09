import { Button } from "@/components"
import { contactOptions } from "./data"
import { useNavigate } from "react-router"
const Info:React.FC = () => {
    const navigate = useNavigate()
  return (
    <section>
        <div>
            <span>Reach out to us</span>
            <h1>Love to hear from you</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi optio esse iure debitis officia. Voluptates veritatis earum ullam quidem eum.</p>
            <div>
                {contactOptions.map(option=>(
                    <div key={option.id}>
                        <div>{option.icon}</div>
                        <h3>{option.title}</h3>
                        <p>{option.description}</p>
                        <Button label={option.link} variant="link"/>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Info
