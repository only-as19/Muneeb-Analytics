import type { ReactNode } from "react"
import { motion, useInView, useAnimation } from "motion/react"
import { useRef, useEffect } from "react"
interface MotionProps{
children:ReactNode
width?: "fit-content" | "100%"
className?: string
}

const Motion:React.FC<MotionProps> = ({children, width = "fit-content", className }) => {
const ref = useRef(null)
const mainContrtols = useAnimation()
const slideContrtols = useAnimation()
const isInview = useInView(ref, {once:true})
useEffect(()=>{
  if(isInview){
    mainContrtols.start('visible')
    slideContrtols.start('visible')
  }
},[isInview])

  return (
    <div
    ref={ref}
    className={`relative overflow-hidden ${width} ${className}`}>
      <motion.div
      variants={{
        hidden:{opacity:0, y: 75},
        visible:{opacity:1, y: 0}
      }}
      initial="hidden"
      animate={mainContrtols}
      transition={{ duration: 0.5, delay: 0.25 }}
      >{children}
      </motion.div>
      <motion.div
      variants={{
        hidden: {left:0},
        visible: {left: '100%'}
      }}
      initial= 'hidden'
      animate= {slideContrtols}
      transition={{
        duration:0.5
      }}
      style={{
        position: 'absolute',
        top: 4,
        bottom: 4,
        left: 0,
        right: 0,
        background:'var(--primary)',
        zIndex: 20
      }}
      />
    </div>
  )
}

const CardMotion: React.FC<MotionProps> = ({ children, className = ""}) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.70 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, delay:0.5 }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  )
}


export {Motion, CardMotion}
