import { useBlogs } from "@/Hooks"

const BlogsList:React.FC = () => {
  const {blogs} = useBlogs()
 console.log(blogs)
  return (
    <div>
      {blogs.map(blog=>(
        <h1>{blog.title}</h1>
      ))}
    </div>
  )
}

export default BlogsList
