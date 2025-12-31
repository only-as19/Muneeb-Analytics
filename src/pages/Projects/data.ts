import Case from "@/assets/images/Case.svg";
import Challange from "@/assets/images/Challange.svg";
import Solution from "@/assets/images/Solution.svg";

export interface Problem {
  title: string;
  description: string;
}

export interface ProblemStatement {
  heading: string;
  subheading: string;
  images: string;
  problems: Problem[];
}

export interface SolutionSection {
  title: string;
  details: string[];
}

export interface Solution {
  heading: string;
  subheading: string;
  images: string;
  video: string;
  sections: SolutionSection[];
  summary: string;
}

export interface BenefitBullet {
  title: string;
  bullet: string;
}

export interface OutcomeResult {
  title: string;
  description: string;
}

export interface Outcomes {
  subtext: string;
  results: OutcomeResult[];
  comparisonBasis: string;
}

export interface Benefits {
  title: string;
  bullets: BenefitBullet[];
  outcomes: Outcomes;
}

export interface Introduction{
  id: string;
  title: string;
  industry: string;
  category: string;
  overview: string;
  impact: string;
  image: string;
  slug: string;
  duration: string;
}

// Main CaseStudy interface
export interface CaseStudy {
  Introduction: Introduction;
  problemStatement?: ProblemStatement;
  solution?: Solution;
  benefits?: Benefits;
}

// The case studies data
export const caseStudies: CaseStudy[] = [
  {
    Introduction:{
      id: 'cs-001',
    title: 'Power BI Centralized Analytics for Profitability & Operational Efficiency',
    industry: 'E-commerce',
    category: 'Business Intelligence',
    overview: 'Day to Day Hypermarket is a rapidly growing e-commerce platform offering electronics, furniture, office supplies, and cosmetics. After two years of strong sales and brand growth, the company shifted focus to profitability and operational efficiency to ensure sustainable growth while strengthening market position and customer value.',
    impact: '5% profit increase in 6 months',
    image: Case,
    slug: 'power-bi-centralized-analytics-profitability',
    duration:  "3 months"
    },
    problemStatement: {
      heading: 'THE CHALLENGE',
      subheading: 'Day to Day Hypermarket faced several difficulties in achieving profitability and operational efficiency:',
      images: Challange,
      problems: [
        {
          title: 'Profitability Blind Spots',
          description: 'No clear view of which categories, products, or regions drove profits versus those eroding margins.',
        },
        {
          title: 'Sales Trends & Seasonality',
          description: 'Lack of reliable trend analysis to detect seasonality shifts, demand peaks, or declining categories.',
        },
        {
          title: 'Product Lifecycle Monitoring',
          description: 'Underperforming or declining products stayed too long in the catalog; high-margin products weren\'t always prioritized.',
        },
        {
          title: 'Comparative Analysis Gaps',
          description: 'Difficulty comparing YoY performance across departments, regions, or product lines.',
        },
        {
          title: 'Data Fragmentation & Manual Reporting',
          description: 'Sales and inventory data scattered across Excel, CSVs, and databases; manual, inconsistent, and outdated reports delayed decisions and lacked a single source of truth.',
        },
      ],
    },
    solution: {
      heading: 'THE SOLUTION',
      subheading: 'How we addressed the challenges:',
      images: Solution,
      video: 'https://ik.imagekit.io/jz7julfyw/project/projectSolution.mp4',
      sections: [
        {
          title: 'Interactive Dashboards',
          details: [
            'Unified dashboard covering sales, profit, and inventory performance across regions, categories, and products.',
            'Drill-down capabilities to move from high-level overviews to detailed analysis.',
          ],
        },
        {
          title: 'Profitability and Comparative Analysis',
          details: [
            'Measures for profit margins, YoY growth, and category-wise performance.',
            'Visuals highlighting underperforming products, top profit drivers (Pareto 80/20), and regional trends.',
          ],
        },
        {
          title: 'Automation and Scalability',
          details: [
            'Automated data refresh eliminated manual Excel reporting and ensured real-time insights.',
            'Scalable model enabling new products, categories, or regions to be added without rework.',
          ],
        },
        {
          title: 'Data Integration and Modeling',
          details: [
            'Consolidated Excel, CSV, and database sources into a single, structured Power BI model.',
            'Robust relationships between sales, inventory, product, and regional data to ensure accuracy and consistency.',
          ],
        },
      ],
      summary: 'A centralized Power BI analytics solution transformed fragmented data into actionable insights and replaced manual reporting with a single source of truth.',
    },
    benefits: {
      title: 'Benefits',
      bullets: [
        {
          title: 'Profit Visibility',
          bullet: 'Leadership can compare profit across products, categories, and regions; monitor sales and margin trends; and perform YoY% analysis.',
        },
        {
          title: 'Demand Intelligence',
          bullet: 'Dashboards highlight underperforming areas, top-margin products, and seasonal demand patterns for better stock planning and marketing.',
        },
        {
          title: 'Faster Decisions',
          bullet: 'Stakeholder meetings now rely on unified insights, accelerating data-backed decisions on pricing, campaigns, and inventory optimization.',
        },
        {
          title: 'Operational Efficiency',
          bullet: 'Automated reporting saved hours of manual work and ensured data accuracy across teams.',
        },
      ],
      outcomes: {
        subtext: 'Results',
        results: [
          { title: '5%', description: 'Overall Profit Increase' },
          { title: '6 months', description: 'Implementation Timeframe' },
        ],
        comparisonBasis: 'Compared to the previous period after implementation.',
      },
    },
  },
  {
  Introduction:{
    id: 'cs-002',
  title: 'Profitability & Performance Analytics for Day to Day Hypermarket',
  industry: 'E-Commerce & Retail',
  category: 'Business Intelligence',
  overview: 'Day to Day Hypermarket is a rapidly growing e-commerce platform offering electronics, furniture, office supplies, and cosmetics. After two years of strong sales and brand growth, the company shifted focus toward profitability and operational efficiency to ensure sustainable growth while strengthening market position and customer value.',
  impact: '5% Profit Increase in 6 Months',
  image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80',
  slug: 'profitability-performance-analytics-day-to-day-hypermarket',
  duration:"6 months"
  },
  problemStatement: {
    heading: 'THE CHALLENGE',
    subheading: 'Day to Day Hypermarket faced several critical challenges in achieving profitability and operational efficiency:',
    images: 'challenge-image-url',
    problems: [
      {
        title: 'Limited Profit Visibility',
        description: 'Leadership lacked clear insights into which products, categories, and regions were driving profits versus those consistently eroding margins.',
      },
      {
        title: 'Unclear Sales Trends',
        description: 'Absence of reliable trend and seasonality analysis made it difficult to detect demand peaks, seasonal shifts, and declining categories over time.',
      },
      {
        title: 'Product Lifecycle Gaps',
        description: 'Underperforming or declining products remained in the catalog longer than optimal, while high-margin products were not consistently prioritized.',
      },
      {
        title: 'Comparative Analysis Limitations',
        description: 'Difficulty performing accurate year-over-year comparisons across departments, regions, and product lines resulted in missed strategic opportunities.',
      },
      {
        title: 'Fragmented Reporting Processes',
        description: 'Sales and inventory data were scattered across Excel, CSVs, and databases, causing manual, inconsistent, and time-consuming reporting workflows.',
      },
    ],
  },
  solution: {
    heading: 'THE SOLUTION',
    subheading: 'How we addressed the challenges:',
    images: 'solution-image-url',
    video: '',
    sections: [
      {
        title: 'Centralized Analytics Platform',
        details: [
          'Designed and implemented a centralized Power BI solution that unified fragmented data sources into a single, reliable analytics environment.',
        ],
      },
      {
        title: 'Data Integration & Modeling',
        details: [
          'Consolidated Excel, CSV, and database sources into a structured Power BI data model with robust relationships across sales, inventory, products, and regions.',
        ],
      },
      {
        title: 'Interactive Dashboards',
        details: [
          'Developed unified dashboards covering sales, profit, and inventory performance with drill-down functionality from executive views to granular product analysis.',
        ],
      },
      {
        title: 'Profitability & YoY Analysis',
        details: [
          'Implemented measures for profit margins, year-over-year growth, and category-wise performance to support accurate comparative and trend analysis.',
        ],
      },
      {
        title: 'Performance Prioritization',
        details: [
          'Designed visuals highlighting underperforming products, top profit drivers using Pareto analysis, and regional performance trends.',
        ],
      },
      {
        title: 'Automation & Scalability',
        details: [
          'Automated data refresh processes and built a scalable model allowing new products, categories, or regions to be added without rework.',
        ],
      },
    ],
    summary: 'A centralized Power BI analytics platform transformed fragmented data into actionable insights, enabling profit-focused decision-making and operational efficiency.',
  },
  benefits: {
    title: 'Benefits',
    bullets: [
      {
        title: 'Unified Performance Visibility',
        bullet: 'Provided leadership with a single source of truth to monitor performance across all departments, products, categories, and regions in one platform.',
      },
      {
        title: 'Improved Profit Focus',
        bullet: 'Enabled clear identification of high-margin products and profit-draining areas, supporting smarter pricing and product prioritization decisions.',
      },
      {
        title: 'Trend & Seasonality Insights',
        bullet: 'Allowed teams to track sales and margin trends over time, uncover seasonal demand patterns, and respond proactively to market shifts.',
      },
      {
        title: 'Faster Data-Driven Decisions',
        bullet: 'Replaced manual reporting with real-time dashboards, enabling quicker, data-backed actions on campaigns, pricing, and inventory optimization.',
      },
      {
        title: 'Operational Efficiency Gains',
        bullet: 'Reduced reporting effort and inconsistencies, freeing teams to focus on analysis and strategy instead of manual data preparation.',
      },
      {
        title: 'Measurable Business Impact',
        bullet: 'Within six months of implementation, overall profit increased by five percent, validating the shift toward profit-focused analytics strategies.',
      },
    ],
    outcomes: {
      subtext: 'Results',
      results: [
        { title: '5%', description: 'Overall Profit Increase' },
        { title: '6 months', description: 'Project Duration' },
      ],
      comparisonBasis: 'Compared to the previous period before implementation.',
    },
  },
},
{
  Introduction:{
    id: "cs-003",
  title: "Enterprise Financial Performance & Budget Control Analytics",
  industry: "Corporate Finance & SaaS",
  category: "Financial Analytics",
  overview: "This project focuses on building an end-to-end financial analytics solution to monitor revenue, expenses, profitability, and budget performance across accounts, vendors, categories, and time periods. The objective was to give leadership a centralized, real-time view of financial health, enabling better cost control, profitability tracking, and strategic decision-making.",
  impact: "5% Improved Budget Control",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  slug: "enterprise-financial-performance-budget-control-analytics",
  duration: "2.5 months"
  },
  problemStatement: {
    heading: "THE CHALLENGE",
    "subheading": "The organization faced significant hurdles in maintaining financial discipline and visibility:",
    "images": "challenge-image-url",
    "problems": [
      {
        "title": "Fragmented Financial Visibility",
        "description": "Financial data was spread across multiple sources, making it difficult to gain a unified view of revenue, expenses, and profit performance."
      },
      {
        "title": "Budget vs Actual Gaps",
        "description": "Lack of clear comparison between budgeted and actual values limited the ability to track overspending and revenue shortfalls."
      },
      {
        "title": "Profitability Blind Spots",
        "description": "Negative EBIT and net profit trends were not easily traceable to specific accounts, vendors, or cost categories."
      },
      {
        "title": "Limited Vendor & Account Insights",
        "description": "Management lacked visibility into which vendors, accounts, or cost heads were driving the majority of expenses."
      },
      {
        "title": "Trend Monitoring Limitations",
        "description": "Without structured yearly and monthly trends, it was difficult to assess financial performance progression over time."
      }
    ]
  },
  "solution": {
    "heading": "THE SOLUTION",
    "subheading": "A comprehensive financial analytics suite designed for real-time oversight:",
    "images": "solution-image-url",
    "video": "",
    "sections": [
      {
        "title": "Financial Overview Dashboard",
        "details": [
          "Developed an executive dashboard presenting revenue, expenses, and gross profit with YoY comparisons for quick financial health assessment."
        ]
      },
      {
        "title": "Revenue Performance Analysis",
        "details": [
          "Built detailed revenue streams by account, vendor, and category, distinguishing between recurring and non-recurring income."
        ]
      },
      {
        "title": "Expense Performance Dashboard",
        "details": [
          "Designed analytics covering total expenses, COGS, and operating expenses with granular cost breakdowns by vendor."
        ]
      },
      {
        "title": "Budget vs Actual Implementation",
        "details": [
          "Implemented automated comparisons by account and type to identify variances and overspending patterns instantly."
        ]
      },
      {
        "title": "Profitability & Trend Tracking",
        "details": [
          "Tracked EBIT, net profit/loss, and long-term trends to highlight profitability issues and improvement opportunities."
        ]
      },
      {
        "title": "Interactive Drill-Down Design",
        "details": [
          "Enabled slicers to move from high-level KPIs to granular vendor and category-level insights."
        ]
      }
    ],
    "summary": "An end-to-end financial solution that replaced manual reporting with automated, interactive dashboards for total visibility into the company's fiscal health."
  },
  "benefits": {
    "title": "Benefits",
    "bullets": [
      {
        "title": "Centralized Financial Control",
        "bullet": "Provided leadership with a single source of truth for monitoring revenue, expenses, and profitability across the organization."
      },
      {
        "title": "Improved Budget Discipline",
        "bullet": "Enabled faster identification of budget overruns and revenue gaps, supporting better financial planning and control."
      },
      {
        "title": "Expense Optimization Opportunities",
        "bullet": "Highlighted high-cost vendors and expense categories, enabling targeted cost-reduction initiatives."
      },
      {
        "title": "Clear Profitability Insights",
        "bullet": "Improved understanding of EBIT and net loss drivers by linking profitability directly to revenue and cost components."
      },
      {
        "title": "Time Savings & Automation",
        "bullet": "Replaced manual financial reporting with automated dashboards, reducing reporting effort and improving data accuracy."
      }
    ],
    "outcomes": {
      "subtext": "Results",
      "results": [
        { "title": "5%", "description": "Improved Budget Control" },
        { "title": "2.5 Months", "description": "Project Duration" }
      ],
      "comparisonBasis": "Compared to the previous manual reporting and fragmented data period."
    }
  }
},
{
  Introduction:{
    "id": "cs-004",
  "title": "Healthcare Operations & Performance Analytics",
  "industry": "Healthcare Analytics",
  "category": "Operational Intelligence",
  "overview": "The U.S. healthcare sector serves millions of patients annually through hospitals and clinics. With growing demand and aging populations increasing operational complexity, this project focused on building a real-time data tracking solution to maintain service quality, control costs, and improve patient outcomes for medical providers.",
  "impact": "Improved Operational Efficiency",
  "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  "slug": "healthcare-operations-performance-analytics-us-sector",
  duration: "4 months"
  },
  "problemStatement": {
    "heading": "THE CHALLENGE",
    "subheading": "The healthcare provider faced several critical bottlenecks in managing large-scale patient data and costs:",
    "images": "challenge-image-url",
    "problems": [
      {
        "title": "Rising Treatment Costs",
        "description": "Hospitals faced increasing treatment expenses without clear analytical visibility, making cost control and long-term financial planning difficult."
      },
      {
        "title": "Fluctuating Patient Admissions",
        "description": "Unpredictable patient visit volumes and hospital stays created challenges in resource planning and operational efficiency."
      },
      {
        "title": "Uneven Service Quality",
        "description": "Service outcomes varied across demographics and medical conditions, impacting consistency of care and patient satisfaction."
      },
      {
        "title": "Limited KPI Visibility",
        "description": "Management lacked centralized access to key performance indicators required to monitor efficiency and operational performance."
      },
      {
        "title": "Data-Driven Decision Gaps",
        "description": "The absence of real-time analytics limited leadership’s ability to respond proactively to operational and patient care challenges."
      }
    ]
  },
  "solution": {
    "heading": "THE SOLUTION",
    "subheading": "A robust analytics framework designed to unify clinical and operational data:",
    "images": "solution-image-url",
    "video": "",
    "sections": [
      {
        "title": "Executive Healthcare Dashboard",
        "details": [
          "Developed a centralized executive dashboard to provide real-time visibility into operational, financial, and patient-related KPIs."
        ]
      },
      {
        "title": "Admission & Capacity Tracking",
        "details": [
          "Implemented tracking for total patient visits, average hospital stays, and age distribution to support admission planning."
        ]
      },
      {
        "title": "Treatment Cost Monitoring",
        "details": [
          "Analyzed average treatment expenses to support financial planning, budgeting, and cost optimization strategies."
        ]
      },
      {
        "title": "Demographic & Condition Segmentation",
        "details": [
          "Segmented patient data by gender, age groups, and medical conditions to uncover trends affecting care quality."
        ]
      },
      {
        "title": "Medication Usage Insights",
        "details": [
          "Identified top prescribed medications to support inventory management and reduce risks of shortages or overstocking."
        ]
      },
      {
        "title": "Resource Planning Tools",
        "details": [
          "Analyzed blood type and gender distribution to support blood bank planning and patient profiling initiatives."
        ]
      }
    ],
    "summary": "By centralizing clinical and financial data into interactive dashboards, the solution enabled healthcare leaders to optimize resource allocation and gain control over rising treatment costs."
  },
  "benefits": {
    "title": "Benefits",
    "bullets": [
      {
        "title": "Improved Operational Efficiency",
        "bullet": "Enabled hospitals to monitor admissions trends and optimize staffing, beds, and resource allocation."
      },
      {
        "title": "Better Cost Control",
        "bullet": "Provided clear visibility into treatment costs, supporting informed financial decisions and cost reduction initiatives."
      },
      {
        "title": "Enhanced Patient Care Strategies",
        "bullet": "Used demographic and condition-based insights to improve care planning and service consistency."
      },
      {
        "title": "Optimized Medication Management",
        "bullet": "Reduced medication shortages by aligning inventory planning with actual prescription patterns."
      },
      {
        "title": "Stronger Decision-Making",
        "bullet": "Empowered leadership with real-time, holistic insights for faster, data-driven healthcare decisions."
      }
    ],
    "outcomes": {
      "subtext": "Results",
      "results": [
        { "title": "4 Months", "description": "Implementation Time" },
        { "title": "Real-Time", "description": "KPI Visibility" }
      ],
      "comparisonBasis": "Based on operational performance metrics post-implementation compared to manual tracking."
    }
  }
},
{
  Introduction: {
    "id": "cs-005",
  "title": "Hospitality Revenue & Booking Performance Analytics",
  "industry": "Hospitality & Luxury Hotels",
  "category": "Revenue Management",
  "overview": "This project focuses on analyzing revenue, bookings, cancellations, and occupancy performance for a luxury hotel operation. The solution provides management with a centralized view of financial and operational KPIs across cities, room classes, and time periods, enabling data-driven decisions to optimize pricing and revenue efficiency.",
  "impact": "10% Revenue Performance Optimization",
  "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  "slug": "hospitality-revenue-booking-performance-analytics-luxury-hotels",
  duration: "3 months"
  },
  "problemStatement": {
    "heading": "THE CHALLENGE",
    "subheading": "Luxury hotel operations faced complexities in managing perishable inventory and fluctuating demand:",
    "images": "challenge-image-url",
    "problems": [
      {
        "title": "Limited Revenue Visibility",
        "description": "Revenue performance across cities, room classes, and weeks was not clearly visible in a single, consolidated view."
      },
      {
        "title": "Occupancy & Pricing Complexity",
        "description": "Understanding the relationship between ADR, RevPAR, and occupancy across weekdays and weekends required detailed manual analysis."
      },
      {
        "title": "Booking & Cancellation Tracking",
        "description": "High booking volumes and frequent cancellations made it difficult to monitor booking health and identify revenue leakage."
      },
      {
        "title": "Time-Based Performance Gaps",
        "description": "Lack of weekly and monthly trend analysis limited the ability to identify demand spikes and low-performing periods."
      },
      {
        "title": "Property-Level Comparisons",
        "description": "Management lacked clear insights into how individual properties performed regarding revenue, occupancy, and customer ratings."
      }
    ]
  },
  "solution": {
    "heading": "THE SOLUTION",
    "subheading": "Implementing a data-driven revenue management suite:",
    "images": "solution-image-url",
    "video": "",
    "sections": [
      {
        "title": "Revenue Performance Dashboard",
        "details": [
          "Developed an interactive Power BI dashboard tracking total revenue, realized revenue, bookings, and cancellations."
        ]
      },
      {
        "title": "ADR & RevPAR Trend Analysis",
        "details": [
          "Visualized Average Daily Rate (ADR) and Revenue Per Available Room (RevPAR) trends by week to assess pricing effectiveness."
        ]
      },
      {
        "title": "Occupancy & Realization Metrics",
        "details": [
          "Monitored occupancy percentages and realization rates to evaluate how well booked rooms converted into actual stays."
        ]
      },
      {
        "title": "Property-Level Benchmarking",
        "details": [
          "Displayed detailed property-level KPIs including revenue, bookings, ADR, RevPAR, and customer ratings in a comparative view."
        ]
      },
      {
        "title": "Booking Status Analysis",
        "details": [
          "Analyzed booking outcomes such as successful stays, cancellations, and no-shows to identify service and policy gaps."
        ]
      }
    ],
    "summary": "A specialized hospitality analytics platform that transformed raw booking data into strategic insights for pricing and occupancy optimization."
  },
  "benefits": {
    "title": "Benefits",
    "bullets": [
      {
        "title": "Improved Revenue Insights",
        "bullet": "Provided leadership with clear visibility into revenue drivers across properties, room classes, and time periods."
      },
      {
        "title": "Better Pricing Decisions",
        "bullet": "Enabled analysis of ADR and RevPAR trends to optimize pricing strategies for both weekdays and weekends."
      },
      {
        "title": "Optimized Occupancy Management",
        "bullet": "Helped identify periods of low occupancy and supported strategies to improve room utilization."
      },
      {
        "title": "Reduced Revenue Leakage",
        "bullet": "Improved monitoring of cancellations and no-shows, supporting better booking and cancellation policies."
      },
      {
        "title": "Faster Decision-Making",
        "bullet": "Replaced manual reporting with real-time dashboards, enabling quicker, data-backed operational and revenue decisions."
      }
    ],
    "outcomes": {
      "subtext": "Results",
      "results": [
        { "title": "10%", "description": "Revenue Optimization" },
        { "title": "3 Months", "description": "Project Duration" }
      ],
      "comparisonBasis": "Measured against baseline revenue performance prior to the implementation of the analytics suite."
    }
  }
},
{
  Introduction:{
    "id": "cs-007",
  "title": "Health Insurance Cost Prediction Using Machine Learning",
  "industry": "Healthcare & Insurance",
  "category": "Machine Learning & Predictive Analytics",
  "overview": "This project focuses on building a machine learning–based application to predict individual health insurance costs based on demographic, lifestyle, and medical attributes. The solution helps users and insurers estimate expected insurance expenses more accurately, supporting better pricing, planning, and risk assessment.",
  "impact": "Cost Prediction Accuracy Improved",
  "image": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
  "slug": "health-insurance-cost-prediction-machine-learning",
  duration: "2 months"
  },
  "problemStatement": {
    "heading": "THE CHALLENGE",
    "subheading": "Estimating health insurance premiums is complex due to the highly individual nature of health risks:",
    "images": "challenge-image-url",
    "problems": [
      {
        "title": "Unclear Cost Estimation",
        "description": "Health insurance costs vary significantly across individuals, making it difficult to estimate premiums accurately using simple rule-based approaches."
      },
      {
        "title": "Multiple Influencing Factors",
        "description": "Insurance costs depend on a complex interplay of factors such as age, BMI, smoking status, and medical history."
      },
      {
        "title": "Risk Assessment Complexity",
        "description": "Evaluating health risk manually across multiple attributes increases the chances of bias and inaccurate cost predictions."
      },
      {
        "title": "User-Friendly Accessibility",
        "description": "Providing predictive insights in a way that is easy for non-technical users to understand was a key requirement."
      },
      {
        "title": "Data Consistency & Accuracy",
        "description": "Ensuring accurate handling of mixed data types (numerical and categorical) was essential for reliable model performance."
      }
    ]
  },
  "solution": {
    "heading": "THE SOLUTION",
    "subheading": "A machine learning pipeline tailored for predictive healthcare modeling:",
    "images": "solution-image-url",
    "video": "",
    "sections": [
      {
        "title": "Feature-Based Prediction Model",
        "details": [
          "Developed a machine learning model that predicts insurance costs using demographic, lifestyle, and medical input features."
        ]
      },
      {
        "title": "User Input Interface",
        "details": [
          "Designed an interactive interface allowing users to input details such as age, dependents, BMI category, and smoking status for instant results."
        ]
      },
      {
        "title": "Preprocessing & Encoding",
        "details": [
          "Applied advanced data preprocessing techniques including one-hot encoding and normalization to handle categorical variables reliably."
        ]
      },
      {
        "title": "Risk Segmentation",
        "details": [
          "Incorporated insurance plan types and genetic risk indicators to enhance prediction reliability across different risk profiles."
        ]
      },
      {
        "title": "Real-Time Prediction Engine",
        "details": [
          "Enabled instant cost calculations based on user inputs, providing immediate and actionable financial insights."
        ]
      }
    ],
    "summary": "By leveraging machine learning, we replaced manual estimation with a scalable, data-driven application that predicts insurance premiums with high accuracy."
  },
  "benefits": {
    "title": "Benefits",
    "bullets": [
      {
        "title": "Improved Cost Transparency",
        "bullet": "Helps users understand potential insurance costs before selecting a plan, reducing financial surprises."
      },
      {
        "title": "Better Risk Awareness",
        "bullet": "Provides insights into how specific lifestyle factors, like smoking or BMI, directly influence insurance pricing."
      },
      {
        "title": "Data-Driven Decision Support",
        "bullet": "Supports insurers and individuals in making informed policy and pricing decisions based on objective data."
      },
      {
        "title": "Reduced Manual Bias",
        "bullet": "Minimizes guesswork and subjective assessments through standardized machine learning predictions."
      },
      {
        "title": "Scalable Foundation",
        "bullet": "Creates a modular structure that allows for future updates, such as adding policy recommendations or personalized risk scoring."
      }
    ],
    "outcomes": {
      "subtext": "Results",
      "results": [
        { "title": "Accuracy", "description": "Improved Cost Prediction" },
        { "title": "2 Months", "description": "Development Duration" }
      ],
      "comparisonBasis": "Validated against historical insurance data and manual actuary estimations."
    }
  }
},
{
  Introduction: {
    "id": "cs-007",
  "title": "Digital Audience Engagement & Revenue Analytics for Telegraph Media Group",
  "industry": "Media & Digital Publishing",
  "category": "Data Engineering & Analytics",
  "overview": "Telegraph Media Group, a leading UK regional media organization, operates over 240 news websites with 40–50 million monthly unique visitors. This project unified fragmented data from 250 million monthly page views into a centralized analytics solution to optimize a hybrid revenue model of advertising and gated paywall subscriptions.",
  "impact": "15% Engagement Growth",
  "image": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
  "slug": "digital-audience-engagement-revenue-analytics-telegraph-media",
  duration: "5 months"
  },
  "problemStatement": {
    "heading": "THE CHALLENGE",
    "subheading": "Managing high-volume traffic across 240+ sites created significant visibility hurdles:",
    "images": "challenge-image-url",
    "problems": [
      {
        "title": "Fragmented Performance Data",
        "description": "Engagement metrics were siloed across regions and editorial teams, creating reporting delays and unclear accountability."
      },
      {
        "title": "Limited KPI Standardization",
        "description": "Key indicators like visits and editorial views were not consistently tracked across different devices, sites, and managing directors."
      },
      {
        "title": "Weak Trend Visibility",
        "description": "Lack of structured daily/weekly trend analysis limited the ability to forecast audience behavior and evaluate paywall effectiveness."
      },
      {
        "title": "Cross-Unit Comparison Gaps",
        "description": "Difficulty comparing performance across 240+ websites reduced the ability to identify underperforming regions quickly."
      },
      {
        "title": "Revenue & Growth Risk",
        "description": "Limited insight into engagement trends increased the risk of lower subscription conversions and weaker editorial strategies."
      }
    ]
  },
  "solution": {
    "heading": "THE SOLUTION",
    "subheading": "A multi-layered Power BI ecosystem for real-time editorial oversight:",
    "images": "solution-image-url",
    "video": "",
    "sections": [
      {
        "title": "Engagement Snapshot Dashboard",
        "details": [
          "Developed a Power BI dashboard providing a point-in-time view of total visitors, page views, and editorial views across all sites and regions."
        ]
      },
      {
        "title": "Multi-Dimensional Filtering",
        "details": [
          "Enabled dynamic filtering by date, site, device, editor, and managing director to support targeted performance analysis."
        ]
      },
      {
        "title": "Trends Analytics Engine",
        "details": [
          "Built a tracking system for visits and editorial views across daily, weekly, and monthly time horizons to uncover behavioral patterns."
        ]
      },
      {
        "title": "Comparative Business Unit Analysis",
        "details": [
          "Designed side-by-side comparisons of engagement metrics to highlight strengths and weaknesses across different geographical regions."
        ]
      },
      {
        "title": "Behavioral Pattern Insights",
        "details": [
          "Included day-of-week traffic distribution analysis to inform editorial publishing strategies and optimize content timing."
        ]
      }
    ],
    "summary": "The solution replaced fragmented spreadsheets with a standardized, real-time analytics suite that unified 240+ sites under a single source of truth."
  },
  "benefits": {
    "title": "Benefits",
    "bullets": [
      {
        "title": "70% Reporting Time Savings",
        "bullet": "Reduced manual reporting effort by approximately seventy percent by replacing spreadsheet-based workflows with automated dashboards."
      },
      {
        "title": "Improved Editorial Focus",
        "bullet": "Enabled identification of underperforming sites, driving 15% growth in editorial page views within just two months."
      },
      {
        "title": "Enhanced KPI Transparency",
        "bullet": "Provided consistent engagement metrics across leadership teams, significantly improving accountability and monitoring."
      },
      {
        "title": "Optimized Revenue Strategy",
        "bullet": "Improved analysis of subscription gate performance, resulting in an approximate 10% increase in subscription conversions."
      },
      {
        "title": "Stronger Data-Driven Decisions",
        "bullet": "Empowered leadership with reliable insights to refine editorial strategies and support sustainable regional growth."
      }
    ],
    "outcomes": {
      "subtext": "Results",
      "results": [
        { "title": "15%", "description": "Editorial Growth" },
        { "title": "70%", "description": "Reporting Efficiency" },
        { "title": "10%", "description": "Subscription Uplift" }
      ],
      "comparisonBasis": "Measured against manual reporting benchmarks and previous period engagement metrics."
    }
  }
},
{
  Introduction: {
    "id": "cs-008",
  "title": "Supply Chain Service Level & OTIF Analytics for AtliQ Mart",
  "industry": "FMCG & Supply Chain",
  "category": "Supply Chain Optimization",
  "overview": "AtliQ Mart, a fast-growing FMCG manufacturer in Gujarat, faced challenges in delivery reliability while planning an expansion into major metropolitan cities. This project established a robust supply chain analytics framework to monitor service levels and ensure operational readiness for large-scale expansion.",
  "impact": "10% OTIF Improvement",
  "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  "slug": "supply-chain-service-level-otif-analytics-atliq-mart",
  duration: "3 months"
  },
  "problemStatement": {
    "heading": "THE CHALLENGE",
    "subheading": "Service reliability issues were threatening customer retention and expansion plans:",
    "images": "challenge-image-url",
    "problems": [
      {
        "title": "Customer Contract Attrition",
        "description": "Several key customers did not renew annual contracts due to recurring service issues related to delayed or incomplete deliveries."
      },
      {
        "title": "Delivery Reliability Issues",
        "description": "Essential products were frequently not delivered on time or in full, negatively impacting customer satisfaction."
      },
      {
        "title": "Lack of Daily Service Tracking",
        "description": "There was no structured daily monitoring of On Time (OT), In Full (IF), and OTIF service levels across customers."
      },
      {
        "title": "Target vs Actual Visibility Gaps",
        "description": "Management lacked visibility into how actual delivery performance compared against customer-specific service level targets (SLAs)."
      },
      {
        "title": "Expansion Readiness Risk",
        "description": "Expanding into new cities without resolving service issues risked repeating failures at a larger operational scale."
      }
    ]
  },
  "solution": {
    "heading": "THE SOLUTION",
    "subheading": "Implementing a multi-dimensional delivery KPI framework:",
    "images": "solution-image-url",
    "video": "",
    "sections": [
      {
        "title": "Delivery KPI Framework",
        "details": [
          "Established core metrics including On Time %, In Full %, OTIF %, Volume Fill Rate (VFR), and Line Fill Rate (LFR)."
        ]
      },
      {
        "title": "Customer & Product Dashboard",
        "details": [
          "Built a granular dashboard identifying specific customers and products most affected by delivery failures."
        ]
      },
      {
        "title": "Target Compliance Monitoring",
        "details": [
          "Automated comparison of actual performance against contractually defined service level targets to highlight unmet expectations."
        ]
      },
      {
        "title": "Geographical Performance Tracking",
        "details": [
          "Tracked KPIs by city (Surat, Ahmedabad, Vadodara) to pinpoint regional supply chain bottlenecks."
        ]
      },
      {
        "title": "Time-Series Trend Analysis",
        "details": [
          "Visualized performance drops over time to correlate service dips with specific operational or external factors."
        ]
      }
    ],
    "summary": "The solution provided AtliQ Mart with a real-time 'command center' for supply chain health, shifting the focus from reactive firefighting to proactive service management."
  },
  "benefits": {
    "title": "Benefits",
    "bullets": [
      {
        "title": "Improved Customer Retention",
        "bullet": "Identifying service gaps helped retain four major customers, protecting approximately $200,000 in annual revenue."
      },
      {
        "title": "Measurable OTIF Gains",
        "bullet": "Achieved a 12% improvement in On Time, 9% in In Full, and a cumulative 10% increase in OTIF within three months."
      },
      {
        "title": "Inventory & Stockout Reduction",
        "bullet": "Analysis of under-supplied products enabled better planning, reducing stockouts by 15%."
      },
      {
        "title": "Regional Service Alignment",
        "bullet": "Improved Surat’s service level by 11%, bringing it in line with other high-performing operating cities."
      },
      {
        "title": "Scalable Growth Foundation",
        "bullet": "Established a data-driven blueprint that allows the company to enter new markets with proven reliability."
      }
    ],
    "outcomes": {
      "subtext": "Results",
      "results": [
        { "title": "10%", "description": "OTIF Improvement" },
        { "title": "15%", "description": "Stockout Reduction" },
        { "title": "$200k", "description": "Revenue Protected" }
      ],
      "comparisonBasis": "Compared to baseline performance metrics before the implementation of the OTIF dashboard."
    }
  }
},
{
  Introduction: {
    "id": "cs-09",
  "title": "5G Plan Impact & Customer Behavior Analytics for AtliQo",
  "industry": "Telecommunications",
  "category": "Customer Analytics & Churn Prediction",
  "overview": "AtliQo, a leading Indian telecom provider, launched 5G services to drive digital growth. This project involved developing a comprehensive analytics suite to evaluate the post-launch impact on subscriber behavior, revenue performance, and market positioning across urban and rural markets.",
  "impact": "Churn Drivers Identified",
  "image": "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=800&q=80",
  "slug": "5g-plan-impact-customer-behavior-analytics-atliqo",
  duration: "4 months"
  },
  "problemStatement": {
    "heading": "THE CHALLENGE",
    "subheading": "Following the 5G rollout, the company faced unexpected shifts in its subscriber base:",
    "images": "challenge-image-url",
    "problems": [
      {
        "title": "Declining Active User Base",
        "description": "AtliQo experienced a noticeable drop in active users post-launch, raising concerns about customer satisfaction and 5G plan adoption."
      },
      {
        "title": "Rising Churn & Unsubscriptions",
        "description": "Unsubscription rates increased significantly, making it difficult to pinpoint if pricing, plan structure, or competition was driving exits."
      },
      {
        "title": "Slower Revenue Growth",
        "description": "Despite premium 5G offerings, revenue growth failed to meet expectations, necessitating a deeper look at ARPU performance."
      },
      {
        "title": "Market Share Erosion",
        "description": "Market share declined compared to the pre-5G period, indicating intense competitive pressure in key regional markets."
      },
      {
        "title": "Data Comparison Complexity",
        "description": "Aligning large datasets for accurate pre- vs. post-5G performance comparisons required complex KPI normalization."
      }
    ]
  },
  "solution": {
    "heading": "THE SOLUTION",
    "subheading": "A data-driven diagnostic suite to map the 5G transition:",
    "images": "solution-image-url",
    "video": "",
    "sections": [
      {
        "title": "User Analysis Dashboard",
        "details": [
          "Developed a Power BI dashboard analyzing active users, churn rates, and unsubscription trends with granular city-level breakdowns."
        ]
      },
      {
        "title": "Regional Performance Mapping",
        "details": [
          "Identified high-risk regions with the sharpest user declines, specifically Mumbai, New Delhi, and Bangalore."
        ]
      },
      {
        "title": "Revenue & ARPU Tracking",
        "details": [
          "Monitored Average Revenue Per User (ARPU) and total revenue growth trends to evaluate 5G pricing elasticity."
        ]
      },
      {
        "title": "Plan-Level Performance Audit",
        "details": [
          "Segmented plans to highlight high-performers (Plans 1, 11, 12) versus underperforming offerings requiring restructuring."
        ]
      },
      {
        "title": "Market Share Benchmarking",
        "details": [
          "Built a comparative dashboard to track AtliQo’s market position against competitors across different regions and timeframes."
        ]
      }
    ],
    "summary": "The solution transformed complex subscriber data into a clear strategic roadmap, identifying exactly where the 5G rollout caused friction and where it drove value."
  },
  "benefits": {
    "title": "Benefits",
    "bullets": [
      {
        "title": "Clear Visibility into Churn",
        "bullet": "Revealed critical behavioral shifts post-5G, identifying pricing as a primary contributor to customer dissatisfaction despite technical upgrades."
      },
      {
        "title": "Revenue Performance Transparency",
        "bullet": "Showed an 11% increase in ARPU, helping leadership understand the trade-off between higher per-user revenue and volume loss."
      },
      {
        "title": "Targeted Retention Strategies",
        "bullet": "Enabled regional managers to design focused pricing interventions in churn-heavy cities like Mumbai and Bangalore."
      },
      {
        "title": "Optimized Product Portfolio",
        "bullet": "Provided the data needed to scale high-performing 5G plans and retire or reposition those that were not resonating with users."
      },
      {
        "title": "Strategic Market Recovery",
        "bullet": "Empowered leadership with a data-backed plan to recover market share and achieve sustainable, long-term subscriber growth."
      }
    ],
    "outcomes": {
      "subtext": "Results",
      "results": [
        { "title": "11%", "description": "ARPU Increase" },
        { "title": "4 Months", "description": "Analysis Duration" },
        { "title": "3 Cities", "description": "Key Risk Areas Identified" }
      ],
      "comparisonBasis": "Based on pre-5G launch metrics compared to the four-month post-launch observation period."
    }
  }
}
]