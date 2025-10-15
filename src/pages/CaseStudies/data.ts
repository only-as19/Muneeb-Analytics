import Case from "@/assets/images/Case.svg"
import type { ReactNode } from "react";

// Types
export interface CaseStudy {
  id: string;
  company: string;
  title: string;
  overview: string;
  image: string;
  problemStatement: {
    bullets: string[];
  };
  solution: {
    interactiveDashboards: string[];
    profitabilityAndComparativeAnalysis: string[];
    automationAndScalability: string[];
    dataIntegrationAndModeling: string[];
    summary: string;
  };
  benefits: {
    bullets: string[];
    outcomes: {
      overallProfitIncreasePercent: number;
      timeframeMonths: number;
      comparisonBasis: string;
    };
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    image: Case,
    company: "Day to Day Hypermarket",
    title: "Power BI Centralized Analytics for Profitability & Operational Efficiency",
    overview:
      "Day to Day Hypermarket is a rapidly growing e-commerce platform offering electronics, furniture, office supplies, and cosmetics. After two years of strong sales and brand growth, the company shifted focus to profitability and operational efficiency to ensure sustainable growth while strengthening market position and customer value.",
    problemStatement: {
      bullets: [
        "Profitability Blind Spots: No clear view of which categories, products, or regions drove profits versus those eroding margins.",
        "Sales Trends & Seasonality: Lack of reliable trend analysis to detect seasonality shifts, demand peaks, or declining categories.",
        "Product Lifecycle Monitoring: Underperforming or declining products stayed too long in the catalog; high-margin products weren’t always prioritized.",
        "Comparative Analysis Gaps: Difficulty comparing YoY performance across departments, regions, or product lines.",
        "Data Fragmentation & Manual Reporting: Sales and inventory data scattered across Excel, CSVs, and databases; manual, inconsistent, and outdated reports delayed decisions and lacked a single source of truth.",
      ],
    },
    solution: {
      interactiveDashboards: [
        "Unified dashboard covering sales, profit, and inventory performance across regions, categories, and products.",
        "Drill-down capabilities to move from high-level overviews to detailed analysis.",
      ],
      profitabilityAndComparativeAnalysis: [
        "Measures for profit margins, YoY growth, and category-wise performance.",
        "Visuals highlighting underperforming products, top profit drivers (Pareto 80/20), and regional trends.",
      ],
      automationAndScalability: [
        "Automated data refresh eliminated manual Excel reporting and ensured real-time insights.",
        "Scalable model enabling new products, categories, or regions to be added without rework.",
      ],
      dataIntegrationAndModeling: [
        "Consolidated Excel, CSV, and database sources into a single, structured Power BI model.",
        "Robust relationships between sales, inventory, product, and regional data to ensure accuracy and consistency.",
      ],
      summary:
        "A centralized Power BI analytics solution transformed fragmented data into actionable insights and replaced manual reporting with a single source of truth.",
    },
    benefits: {
      bullets: [
        "Leadership can compare profit across products, categories, and regions; monitor sales and margin trends; and perform YoY% analysis.",
        "Dashboards highlight underperforming areas, top-margin products, and seasonal demand patterns for better stock planning and marketing.",
        "Stakeholder meetings now rely on unified insights, accelerating data-backed decisions on pricing, campaigns, and inventory optimization.",
      ],
      outcomes: {
        overallProfitIncreasePercent: 5,
        timeframeMonths: 6,
        comparisonBasis: "Compared to the previous period after implementation.",
      },
    },
  },
];
