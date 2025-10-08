import {ContactForm} from "./section"

const Contact = () => {
  return (
    <section>
      <div className="bg-secondary flex flex-col justify-center items-center p-5">
        <h1 className="text-3xl md font-bold">Contact us</h1>
        <p className="text-muted-foreground text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur cum dolores quod! Necessitatibus animi quos, eius accusantium eum vel.</p>
      </div>
      <ContactForm />

    </section>
  )
}

export default Contact
