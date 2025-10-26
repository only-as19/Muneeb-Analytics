import type { Content } from "@/pages/Blogs/data"

interface ContentType {
content: Content | undefined
}

const BlogContent:React.FC<ContentType> = ({content}) => {
  return (
    <div>
      <h2>{content?.title}</h2>
      <p>{content?.introduction}</p>
      <div>
        {content?.sections.map(con => (
            <div key={con.heading}>
                <h3>{con.heading}</h3>
                <p>{con.body}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default BlogContent
