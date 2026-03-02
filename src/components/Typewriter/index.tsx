import { useState, useEffect } from "react"
import { motion} from "framer-motion"

const texts = [
  "Data Analytics Consultant",
  "Business Intelligence Expert", 
  "Data Visualization Specialist",
]

const TypeWriter = () => {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const current = texts[textIndex]

    const runAnimation = async () => {
      // type forward
      for (let i = 0; i <= current.length; i++) {
        await new Promise((r) => setTimeout(r, 80))
        setDisplayText(current.slice(0, i))
      }

      // pause
      await new Promise((r) => setTimeout(r, 1500))

      // delete
      for (let i = current.length; i >= 0; i--) {
        await new Promise((r) => setTimeout(r, 30))
        setDisplayText(current.slice(0, i))
      }

      // next text
      setTextIndex((prev) => (prev + 1) % texts.length)
    }

    runAnimation()
  }, [textIndex])

  return (
    <h1 className="text-3xl font-bold text-primary tracking-tight md:text-6xl md:max-w-xl">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="text-primary"
      >
        |
      </motion.span>
    </h1>
  )
}

export default TypeWriter