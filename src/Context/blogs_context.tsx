import { blogs } from "@/pages/Blogs/data";
import { createContext } from "react";

interface BlogsContextType {
  blogs: typeof blogs;
  getCategories: () => string[];
}

const BlogsContext = createContext<BlogsContextType | undefined>(undefined);

function BlogsProvider({ children }: { children: React.ReactNode }) {
  const getCategories = () => {
    return ["All", ...Array.from(new Set(blogs.map((blog) => blog.category)))];
  };
  return (
    <BlogsContext.Provider value={{ blogs, getCategories }}>
      {children}
    </BlogsContext.Provider>
  );
}

export { BlogsContext, BlogsProvider };
