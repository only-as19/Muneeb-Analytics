import { blogs } from "@/pages/Blogs/data";
import { createContext } from "react";
import type { BlogData } from "@/pages/Blogs/data";
interface BlogsContextType {
  blogs: typeof blogs;
  getCategories: () => string[];
  getBlogBySlug: (slug: string) => BlogData | undefined
}

const BlogsContext = createContext<BlogsContextType | undefined>(undefined);

function BlogsProvider({ children }: { children: React.ReactNode }) {
  const getCategories = () => {
    return ["All", ...Array.from(new Set(blogs.map((blog) => blog.category)))];
  };

  const getBlogBySlug = (slug: string) => {
    return blogs.find((blog) => blog.slug === slug);
  };

  return (
    <BlogsContext.Provider value={{ blogs, getCategories, getBlogBySlug }}>
      {children}
    </BlogsContext.Provider>
  );
}

export { BlogsContext, BlogsProvider };
