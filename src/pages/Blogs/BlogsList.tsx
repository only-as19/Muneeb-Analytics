import { useBlogs } from "@/Hooks"

const BlogsList:React.FC = () => {
  const {blogs, getCategories} = useBlogs()
 console.log(blogs)
 const categories = getCategories()
 console.log(categories)
 
  return (
    <div>
      {blogs.map(blog=>(
        <h1 key={blog.id}>{blog.title}</h1>
      ))}
    </div>
  )
}

export default BlogsList
