import type { ReactNode } from "react"

interface TitleSectionProps{
    heading: string;
    headingSpan?: string;
    description: string;
    slogan?: string;
    icon?: ReactNode
    direction?: "left" | "center"
}


const BlogTitle:React.FC<TitleSectionProps> = ({heading,headingSpan,description,icon,slogan, direction = 'center'}) => {
  return (
    <div className={`special-gradiant ${direction === 'center' && "text-center"} md:py-12 px-5 md:px-8 py-10 font`}>
        <div className="max-w-7xl mx-auto">
         {slogan && (
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full mb-3">
              {icon && icon}
              <span className="text-sm font-semibold text-cyan-200">{slogan}</span>
            </div>
         )}
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
                {heading}
              </span>
              <br />
              <span className="text-cyan-500">{headingSpan}</span>
            </h1>
          <p className="text-md sm:text-xl text-slate-300 leading-relaxed font-light">
              {description}
            </p>
        </div>
    </div>
  )
}

export default BlogTitle
