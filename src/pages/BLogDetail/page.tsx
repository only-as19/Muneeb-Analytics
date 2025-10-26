import { useParams } from "react-router-dom";
import { useBlogs } from "@/Hooks";
import { MdDateRange, MdAccessTime } from "react-icons/md";

const BlogDetail: React.FC = () => {

  const { slug } = useParams();
  const { getBlogBySlug } = useBlogs();
  const blog = slug ? getBlogBySlug(slug) : undefined;

  return (
    <main>
        <div>
            <div>
                <span>{blog?.category}</span>
                <h1>{blog?.title}</h1>
                <p>{blog?.description}</p>
                <div>
                    <p><MdDateRange/> <span>{blog?.date}</span></p>
                    <p><MdAccessTime/> <span>{blog?.readingTime}</span></p>
                </div>
            </div>
        </div>
    </main>
  )
};

export default BlogDetail;
