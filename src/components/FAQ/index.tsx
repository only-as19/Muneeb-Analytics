import { faqItems } from "./data"
import { ArrowDown } from "lucide-react"
const FAQ = () => {
  return (
    <section className="min-h-screen flex-col flex justify-center items-center text-primary p-5 bg-white">
      <div className="max-w-6xl full mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Frequently asked Question</h1>
        <p className="text-muted-foreground text-center mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam atque corporis facere harum cumque.</p>
        <div className="flex flex-col gap-y-4">
          {faqItems.map(faq=>(
            <details
            key={faq.id}
            className="group w-full max-w-xl mx-auto bg-transparent p-5 rounded-xl border border-border
            open:shadow-sm">
              <summary
              className="list-none flex justify-between items-center font-bold text-left">
                <span>{faq.q}</span>
                <ArrowDown className="h-5 w-5 group-open:rotate-180 transition-transform duraion-300" />
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
