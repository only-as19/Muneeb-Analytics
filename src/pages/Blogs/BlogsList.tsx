import { useBlogs } from "@/Hooks";
import Categories from "./categories";
const BlogsList: React.FC = () => {
  const { blogs, getCategories } = useBlogs();
  const categories = getCategories();
  console.log(blogs)

  return (
    <div>
      <div className="p-5 max-w-7xl mx-auto relative -mt-8 z-50 pointer-events-auto">
        <Categories categories={categories} />
      </div>
    </div>
  );
};

export default BlogsList;
