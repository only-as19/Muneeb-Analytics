import { blogs } from "@/pages/Blogs/data";
import {createContext } from "react";

interface BlogsContextType {
  blogs: typeof blogs;
}

const BlogsContext = createContext<BlogsContextType | undefined>(undefined);

function BlogsProvider({ children }: { children: React.ReactNode }) {

  return (
    <BlogsContext.Provider value={{ blogs}}>
      {children}
    </BlogsContext.Provider>
  );
}

export {BlogsContext, BlogsProvider}