import type { ReactNode } from "react"

interface divProps{
children:ReactNode
width: "fit-content" | "100%"
}

const Motion:React.FC<divProps> = ({children, width = "fit-content"}) => {
  return (
    <div className={`relative overflow-hidden ${width}`}>
      <div>{children}</div>
    </div>
  )
}

export default Motion
