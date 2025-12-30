import { createContext, type ReactNode } from "react";
import { caseStudies } from "@/pages/Projects/data";

interface CaseStudiesContext {
  caseStudies: typeof caseStudies;
  getCategories: () => string[];
}

const CaseStudiesContext = createContext<CaseStudiesContext | undefined>(
  undefined
);

function CaseStudiesProvider({ children }: { children: ReactNode }) {
  const getCategories = () => {
    return [
      "All",
      ...Array.from(
        new Set(caseStudies.map((caseStudy) => caseStudy.category))
      ),
    ];
  };
  const category = getCategories()
  console.log(category)
  return (
    <CaseStudiesContext.Provider value={{ caseStudies, getCategories }}>
      {children}
    </CaseStudiesContext.Provider>
  );
}
export { CaseStudiesContext, CaseStudiesProvider };
