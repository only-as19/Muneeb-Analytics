import type { Content } from "@/pages/Blogs/data"
import { FaCircle } from "react-icons/fa";

interface ContentType {
content: Content | undefined
}

const BlogContent:React.FC<ContentType> = ({content}) => {
  return (
    <div>
      <h2 className="text-xl font-bold">{content?.title}</h2>
      <p className="">{content?.introduction}</p>
      <div>
        {content?.sections.map(con => (
            <div key={con.heading}
            className="mt-8"
            >
                <h3 className="inline-flex items-center gap-x-3 text-lg font-semibold mb-3"><FaCircle size={15}/> <span>{con.heading}</span></h3>
                <p className="text-muted-foreground">{con.body}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default BlogContent
