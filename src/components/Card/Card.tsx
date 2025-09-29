import type { ReactNode } from "react"



interface cardProps {
  className?: string,
  icon?: ReactNode,
  title:string,
  description:string,
  metrices?:{
    metriceTitle:string,
    metriceLabel:string
  },
  
}

const Card:React.FC<cardProps> = ({className = "", icon, title, metrices, description}) => {
  return (
    <div 
    className={`${className}`}
    >
      <div>
        <div>
          {icon}
        </div>
        <div>
          <h1>{metrices?.metriceTitle}</h1>
          <span>{metrices?.metriceLabel}</span>
        </div>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
