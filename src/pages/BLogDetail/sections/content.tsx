import type { Content } from "@/pages/Blogs/data"

interface ContentType {
content: Content | undefined
}

const BlogContent:React.FC<ContentType> = ({content}) => {
  return (
    <div>
      BlogContent
    </div>
  )
}

export default BlogContent
