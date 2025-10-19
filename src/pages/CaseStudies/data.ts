import Case from "@/assets/images/Case.svg";
import Challange from "@/assets/images/Challange.svg";
import Solution from "@/assets/images/Solution.svg";

// Types
export interface CaseStudy {
  id: string;
  company: string;
  title: string;
  overview: string;
  image: string;
  problemStatement: {
    heading: string;
    images: string;
    subheading: string;
    problems: { title: string; description: string }[];
  };
  solution: {
    heading: string;
    subheading: string;
    images: string;
    sections: { title: string; details: string[] }[];
    summary: string;
  };
  benefits: {
    bullets: {
      bullet: string;
    }[];
    outcomes: {
      results: {
        title: string;
        description: string;
      }[];
      comparisonBasis: string;
    };
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    image: Case,
    company: "Day to Day Hypermarket",
    title:
      "Power BI Centralized Analytics for Profitability & Operational Efficiency",
    overview:
      "Day to Day Hypermarket is a rapidly growing e-commerce platform offering electronics, furniture, office supplies, and cosmetics. After two years of strong sales and brand growth, the company shifted focus to profitability and operational efficiency to ensure sustainable growth while strengthening market position and customer value.",
    problemStatement: {
      heading: "THE CHALLENGE",
      subheading:
        "HP faced several difficulties when implementing its rewards program globally, such as:",
      images: Challange,
      problems: [
        {
          title: "Profitability Blind Spots",
          description:
            "No clear view of which categories, products, or regions drove profits versus those eroding margins.",
        },
        {
          title: "Sales Trends & Seasonality",
          description:
            "Lack of reliable trend analysis to detect seasonality shifts, demand peaks, or declining categories.",
        },
        {
          title: "Product Lifecycle Monitoring",
          description:
            "Underperforming or declining products stayed too long in the catalog; high-margin products weren't always prioritized.",
        },
        {
          title: "Comparative Analysis Gaps",
          description:
            "Difficulty comparing YoY performance across departments, regions, or product lines.",
        },
        {
          title: "Data Fragmentation & Manual Reporting",
          description:
            "Sales and inventory data scattered across Excel, CSVs, and databases; manual, inconsistent, and outdated reports delayed decisions and lacked a single source of truth.",
        },
      ],
    },
    solution: {
      heading: "THE SOLUTION",
      subheading: "How we addressed the challenges faced by HP:",
      images: Solution,
      sections: [
        {
          title: "Interactive Dashboards",
          details: [
            "Unified dashboard covering sales, profit, and inventory performance across regions, categories, and products.",
            "Drill-down capabilities to move from high-level overviews to detailed analysis.",
          ],
        },
        {
          title: "Profitability and Comparative Analysis",
          details: [
            "Measures for profit margins, YoY growth, and category-wise performance.",
            "Visuals highlighting underperforming products, top profit drivers (Pareto 80/20), and regional trends.",
          ],
        },
        {
          title: "Automation and Scalability",
          details: [
            "Automated data refresh eliminated manual Excel reporting and ensured real-time insights.",
            "Scalable model enabling new products, categories, or regions to be added without rework.",
          ],
        },
        {
          title: "Data Integration and Modeling",
          details: [
            "Consolidated Excel, CSV, and database sources into a single, structured Power BI model.",
            "Robust relationships between sales, inventory, product, and regional data to ensure accuracy and consistency.",
          ],
        },
      ],
      summary:
        "A centralized Power BI analytics solution transformed fragmented data into actionable insights and replaced manual reporting with a single source of truth.",
    },
    benefits: {
      bullets: [
        {
          bullet:
            "Leadership can compare profit across products, categories, and regions; monitor sales and margin trends; and perform YoY% analysis.",
        },
        {
          bullet:
            "Dashboards highlight underperforming areas, top-margin products, and seasonal demand patterns for better stock planning and marketing.",
        },
        {
          bullet:
            "Stakeholder meetings now rely on unified insights, accelerating data-backed decisions on pricing, campaigns, and inventory optimization.",
        },
      ],
      outcomes: {
        results: [
          { title: "5%", description: "overallProfitIncreasePercent" },
          { title: "6 months", description: "timeframeMonths" },
        ],
        comparisonBasis:
          "Compared to the previous period after implementation.",
      },
    },
  },
];
