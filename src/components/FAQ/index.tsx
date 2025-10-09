import { faqItems } from "./data"
import { ArrowDown } from "lucide-react"
const FAQ = () => {
  return (
    <section>
      <div>
        <h1>Frequently asked Question</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam atque corporis facere harum cumque.</p>
        <div>
          {faqItems.map(faq=>(
            <details
            key={faq.id}>
              <summary>
                <span>{faq.q}</span>
                <ArrowDown/>
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
