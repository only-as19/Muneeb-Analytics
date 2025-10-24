import { BlogsContext } from "@/Context";
import { useContext } from "react";

const useBlogs = () => {
  const context = useContext(BlogsContext);
  if (!context) {
    throw new Error("useBlogs must be used within BlogsProvider");
  }
  return context;
}

export default useBlogs