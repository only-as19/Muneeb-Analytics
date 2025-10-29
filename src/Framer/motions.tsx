import type { ReactNode } from "react"
import { motion } from "motion/react"
interface divProps{
children:ReactNode
width?: "fit-content" | "100%"
className?: string
}

const Motion:React.FC<divProps> = ({children, width = "fit-content", className }) => {
  return (
    <div className={`relative overflow-hidden ${width} ${className}`}>
      <motion.div
      variants={{
        hidden:{opacity:0, y: 75},
        visible:{opacity:1, y: 0}
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 }}
      >{children}</motion.div>
    </div>
  )
}

export default Motion
