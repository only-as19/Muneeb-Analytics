import { ServiceContext } from "@/Context";
import { useContext } from "react";

const useService = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useService must be used within CaseStudyProvider");
  }
  return context;
}

export default useService