import { useBlogs } from "@/Hooks";
import { Categories } from "@/components";
import { useState } from "react";
import BlogsNotFound from "./BlogsNotFound";
import FeatureBlog from "./featureBlog";
import RegularBlogs from "./RegularBlogs";
const BlogsList: React.FC = () => {
  const { blogs, getCategories } = useBlogs();
  const [category, setCategory] = useState("All");
  const categories = getCategories();
  console.log(category);
  const filteredBlogs =
    category === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === category);
  const featureBlog = filteredBlogs[0];
  const regularBlogs = filteredBlogs.slice(1);
  console.log(regularBlogs)
  return (
    <div>
      <div className="p-5 max-w-7xl mx-auto relative -mt-8 z-50 pointer-events-auto">
        <Categories
          categories={categories}
          setCategory={(cat) => setCategory(cat)}
          selectedCategory={category}
          className="mb-16"
        />
        {filteredBlogs.length === 0 ? (
          <BlogsNotFound />
        ) : (
          <div>
            {featureBlog && <FeatureBlog featureBlog={featureBlog}/>}
            <div>{regularBlogs && <RegularBlogs regularBlogs={regularBlogs} />}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsList;
