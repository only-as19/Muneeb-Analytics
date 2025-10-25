import { useBlogs } from "@/Hooks";
import Categories from "./categories";
import { useState } from "react";
import BlogsNotFound from "./BlogsNotFound";
const BlogsList: React.FC = () => {
  const { blogs, getCategories } = useBlogs();
  const [category, setCategory] = useState("All");
  const categories = getCategories();
  console.log(category);
  const filteredBlogs =
    category === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === category);
  return (
    <div>
      <div className="p-5 max-w-7xl mx-auto relative -mt-8 z-50 pointer-events-auto">
        <Categories
          categories={categories}
          setCategory={(cat) => setCategory(cat)}
          selectedCategory={category}
        />
        {filteredBlogs.length === 0 ? (
          <BlogsNotFound />
        ):
        (
          <h1></h1>
        )}
      </div>
    </div>
  );
};

export default BlogsList;
