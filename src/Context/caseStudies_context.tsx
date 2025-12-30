import { createContext, type ReactNode } from "react";
import { caseStudies } from "@/pages/Projects/data";
import type {CaseStudy} from "@/pages/Projects/data"
interface CaseStudiesContext {
  caseStudies: typeof caseStudies;
  getCategories: () => string[];
  getCaseStudyBySlug: (slug: string) => CaseStudy | undefined
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
  const getCaseStudyBySlug = (slug: string) => {
      return caseStudies.find((data) => data.slug === slug);
    };
  return (
    <CaseStudiesContext.Provider value={{ caseStudies, getCategories,getCaseStudyBySlug }}>
      {children}
    </CaseStudiesContext.Provider>
  );
}
export { CaseStudiesContext, CaseStudiesProvider };
