import {ContactForm,Info} from "./section"
import { FAQ } from "@/components"
import { PageTitle } from "@/components"
import StrategyCallForm from "./section/ArrangeMeeting"

const Contact = () => {
  return (
    <section className="">
      <PageTitle slogan="Get In Touch With Me"
      heading="Let's Build"
      headingSpan="Something Great"
      description="Whether you need to discuss your project, overcome a specific problem, or get consultation and expert support, I'm here to work alongside you. Your ambitions matter, send a message anytime, and we'll shape the results you envision."
      />
      <StrategyCallForm/>
      <ContactForm />
      <FAQ/>
      <Info/>
    </section>
  )
}

export default Contact
