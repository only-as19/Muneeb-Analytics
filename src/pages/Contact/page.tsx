import {ContactForm} from "./section"
import { FAQ } from "@/components"

const Contact = () => {
  return (
    <section className="bg-secondary">
      <div className="bg-secondary flex flex-col justify-center items-center px-5 py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl md font-bold">Contact us</h1>
        <p className="text-muted-foreground text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur cum dolores quod! Necessitatibus animi quos, eius accusantium eum vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, consequatur?</p>
      </div>
      <ContactForm />
      <FAQ/>
    </section>
  )
}

export default Contact
