import { useParams } from "react-router-dom";
import { useBlogs } from "@/Hooks";
import { MdDateRange, MdAccessTime } from "react-icons/md";
import BlogContent from "./sections/content";
import { DropdownMenuSeparator } from "@/lib";
import { IoIosPricetags } from "react-icons/io";
import Error from "../Error/page";


const BlogDetail: React.FC = () => {

  const { slug } = useParams();
  const { getBlogBySlug } = useBlogs();
  const blog = slug ? getBlogBySlug(slug) : undefined;
  const content = blog?.content
  if(!blog){
    return <Error/>
  }
  return (
    <main className="p-5 min-h-screen">
        <div className="w-7xl mx-auto">
            <div className="mb-20 md:py-12">
                <span className="px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">{blog?.category}</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 my-6 leading-tight">{blog?.title}</h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">{blog?.description}</p>
                <div className="flex gap-x-3 font-bold text-muted-foreground">
                    <p className="flex items-center gap-x-2"><MdDateRange/> <span>{blog?.date}</span></p>
                    <p className="flex items-center gap-x-2"><MdAccessTime/> <span>{blog?.readingTime} min read</span></p>
                </div>
            </div>

        {blog?.image && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        )}
        {blog?.content && (
          <BlogContent content={content}/>
        )}
        <DropdownMenuSeparator className="mt-4"/>
       
          <div className="flex flex-wrap items-center gap-3 py-8">
            <IoIosPricetags className="w-5 h-5 text-slate-500" />
            {blog?.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
    </main>
  )
};

export default BlogDetail;
