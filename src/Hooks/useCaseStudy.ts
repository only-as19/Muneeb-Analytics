import { CaseStudiesContext } from "@/Context";
import { useContext } from "react";

const useCaseStudy = () => {
  const context = useContext(CaseStudiesContext);
  if (!context) {
    throw new Error("useCaseStudies must be used within CaseStudyProvider");
  }
  return context;
}

export default useCaseStudy