import { blogs } from "@/pages/Blogs/data";
import { useContext, createContext } from "react";

interface BlogsContextType {
  blogs: typeof blogs;
}

const BlogsContext = createContext<BlogsContextType | undefined>(undefined);

export function BlogsProvider({ children }: { children: React.ReactNode }) {

  return (
    <BlogsContext.Provider value={{ blogs}}>
      {children}
    </BlogsContext.Provider>
  );
}
