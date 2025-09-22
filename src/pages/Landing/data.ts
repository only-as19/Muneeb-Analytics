export { default as hero_img } from "@/assets/images/landing/transparent_image.png";
export { default as about_video } from "@/assets/images/landing/About.mp4";
export {default as card_image} from "@/assets/images/landing/CTA/interactive-data-visualization-modern-touchscreen.jpg"

type StatItem = {
  label: string;
  value: string | number;
};

type Hero = {
  title: string;
  subtitle: string;
  description: string;
};

type SectionItem = {
  title: string;
  description: string;
};

type StepItem = {
  step: string;
  description: string;
};

type PricingPlanName = "Basic" | "Standard" | "Premium" | "Custom";

interface PricingPlan {
  plan: PricingPlanName;
  price: number | null; // null for Custom
  description: string;
  details: string[];
  delivery: string;
  revisions: string;
}

interface PowerBIData {
  hero: Hero;
  whatsIncluded: SectionItem[];
  businessBenefits: SectionItem[];
  howItWorks: StepItem[];
  pricing: PricingPlan[];
}

interface service {
  label: string;
  description: string;
  link?:string
  img?:string
  id:string
  powerbi?: PowerBIData
}

export const Services: service[] = [
  {
    id:"1",
    label: "Automated Power BI Dashboards & Reports",
    description:
      "Get instant visibility into every corner of your business, including sales, finance, marketing, HR, supply chain, and operations. Our automated dashboards update in real-time, delivering clear insights that help you monitor performance, spot opportunities, and make smarter decisions with ease.",
      img: "https://ik.imagekit.io/pdata3016/Services/Power%20BI%20Dashboard%20&%20report.jpg?updatedAt=1758440250629",
      link: "powerbi-dashboards",
      powerbi:{
  hero: {
    title: "Automated Power BI Dashboard & report",
    subtitle: "Unlock Real-Time Business Intelligence",
    description:
      "Turn raw data into powerful insights with fully automated dashboards designed for Sales, Finance, Marketing, HR, Supply Chain, Operations, Customer Service, IT, and Project Management. Gain a complete view of your organization in real time so you can track performance, uncover opportunities, and make smarter decisions with confidence.",
  },
  whatsIncluded: [
    {
      title: "Automated Data Integration",
      description:
        "We seamlessly connect Power BI to your existing data sources such as Excel, SQL databases, cloud platforms, and enterprise systems. This ensures a smooth flow of information and keeps your dashboards updated without manual intervention.",
    },
    {
      title: "Data Transformation and Cleaning",
      description:
        "With Power Query and advanced data modeling, we prepare and standardize your data so it remains accurate, consistent, and ready for meaningful analysis.",
    },
    {
      title: "Interactive Dashboards and Reports",
      description:
        "Dashboards are designed with drill-downs, filters, and interactive visuals. This makes it easy for decision makers to explore insights, uncover trends, and act with confidence.",
    },
    {
      title: "Custom KPIs and Metrics",
      description:
        "We build dashboards around the KPIs that matter most to your business. From sales performance and financial ratios to HR benchmarks and marketing ROI, every department gets clarity on what drives success.",
    },
    {
      title: "Secure Sharing and Collaboration",
      description:
        "Your teams and stakeholders can access dashboards through secure, role-based permissions, making collaboration seamless while keeping sensitive information safe.",
    },
  ],
  businessBenefits: [
    {
      title: "Save Time and Resources",
      description:
        "Automated reporting reduces hours of manual work and frees your team to focus on higher-value tasks.",
    },
    {
      title: "Enhance Decision-Making",
      description:
        "Accurate and real-time insights ensure leadership can make faster, data-driven decisions with confidence.",
    },
    {
      title: "Clarity Across Departments",
      description:
        "From sales and finance to HR, operations, and beyond, every function has access to the metrics they need in an easy-to-understand format.",
    },
    {
      title: "Improved Accuracy and Reliability",
      description:
        "Centralized reporting eliminates errors caused by manual data handling, giving you a single version of the truth.",
    },
    {
      title: "Scalable Solutions",
      description:
        "Dashboards are designed to grow with your organization, adapting easily to new data sources and evolving business needs.",
    },
  ],
  howItWorks: [
    {
      step: "Consultation and Discovery",
      description:
        "We begin with an in-depth discussion to understand your goals, KPIs, and challenges, ensuring the solution is aligned with your business objectives.",
    },
    {
      step: "Data Preparation",
      description:
        "Our team connects your data sources, cleans and structures the information, and prepares it for meaningful analysis.",
    },
    {
      step: "Dashboard Development",
      description:
        "We design interactive dashboards that combine usability with strong visual storytelling, making insights accessible to everyone.",
    },
    {
      step: "Automation Setup",
      description:
        "Automated refresh schedules are configured so your dashboards always present the most current data.",
    },
    {
      step: "Delivery and Training",
      description:
        "We deliver the final solution, train your team to use it effectively, and provide ongoing support when needed.",
    },
  ],
  pricing: [
    {
      plan: "Basic",
      price: 400,
      description:
        "Perfect for individuals or small teams that need a clean, actionable dashboard to monitor performance, visualize trends, and support everyday decision-making.",
      details: [
        "1–2 Data sources (Excel, CSV)",
        "Basic data cleaning & formatting",
        "Up to 4 KPIs and 4 charts",
        "Interactive/animated visuals",
        "1 interactive page dashboard",
        "Quick walkthrough or usage guide",
      ],
      delivery: "7 days",
      revisions: "Unlimited",
    },
    {
      plan: "Standard",
      price: 800,
      description:
        "Best for growing businesses that need multi-source reporting and department-level insights with automation.",
      details: [
        "2–4 Data sources (Excel, CSV, SQL, APIs)",
        "Medium Complex data cleaning & transformation",
        "2–3 interactive dashboard pages",
        "Up to 10 KPIs and 8–10 charts",
        "Department-level analysis (Sales, Finance, Marketing, HR, Operations)",
        "Automated data refresh setup",
        "1-on-1 walkthrough or training session",
      ],
      delivery: "14 days",
      revisions: "Unlimited",
    },
    {
      plan: "Premium",
      price: 1500,
      description:
        "Designed for organizations that require enterprise-level dashboards, advanced KPIs, and cross-department reporting with full automation.",
      details: [
        "3–7 Data sources (Excel, CSV, SQL, APIs)",
        "Complex data cleaning & transformation",
        "5–6 interactive dashboard pages",
        "Up to 20 KPIs 20 charts",
        "Department-level analysis (Sales, Finance, Marketing, HR, Operations and more)",
        "Automated data refresh setup",
        "1-on-1 walkthrough or training session",
      ],
      delivery: "30 days",
      revisions: "Unlimited",
    },
    {
      plan: "Custom",
      price: null,
      description:
        "Tailored scope, KPIs, data sources, and timelines to match your requirements.",
      details: [
        "Flexible data sources and volumes",
        "Custom KPIs and advanced modeling as needed",
        "Scope, delivery, and training defined collaboratively",
      ],
      delivery: "As agreed",
      revisions: "As agreed",
    },
  ],
}
  },
  {
    id:"2",
    label: "Automated Tableau Dashboards & Reports",
    description:
      "Unlock real-time insights across sales, finance, marketing, HR, supply chain, and operations with fully automated Tableau dashboards. Designed for clarity and speed, our reports update instantly so you can track performance, identify trends, and make confident decisions without manual effort.",
      img: "https://ik.imagekit.io/pdata3016/Services/Tableau%20Dashboard%20&%20report.jpg?updatedAt=1758440250688",
      link: "tableau-dashboards",
  },
  {
    id:"3",
    label: "Corporate Trainings",
    description:
      "Empower your teams with customized training in Power BI, SQL, Python, and data analytics. Our hands-on sessions are designed to build practical skills, improve problem-solving, and help professionals turn data into smarter business decisions.",
      img: "https://ik.imagekit.io/pdata3016/Services/Corporate%20Trainings.jpg?updatedAt=1758440250910",
      link: "corporate-trainings",
  },
  {
    id:"4",
    label: "Predictive Analytics (Python & ML)",
    description:
      "Stay ahead of the curve with predictive models that forecast trends, uncover patterns, and anticipate customer behavior. Using Python and machine learning, we deliver actionable insights that help you minimize risks, optimize strategies, and make smarter business decisions.",
      img: "https://ik.imagekit.io/pdata3016/Services/Predicive%20analysis.jpg?updatedAt=1758440250382",
      link: "predictive-analytics",
  },
  {
    id:"5",
    label: "Statistical & Exploratory Data Analysis",
    description:
      "Discover hidden patterns and validate key assumptions through deep statistical and exploratory analysis. We help you uncover meaningful insights, reduce uncertainty, and guide smarter strategies for long-term business growth.",
      img: "https://ik.imagekit.io/pdata3016/Services/Statistical%20analysis.jpg?updatedAt=1758440250570",
      link: "statistical-analysis",
  },
  {
    id:"6",
    label: "End-to-End Data Analytics Solutions",
    description:
      "Turn raw data into actionable insights with complete analytics solutions designed for your business. From data integration and cleaning to dashboards, advanced analysis and reporting, we manage the entire process so you can focus on growth.",
      link: "end-to-end-analytics",
  },
];


export const statsData: StatItem[] = [
  { label: "Dashboards Delivered", value: "300+" },
  { label: "Avg Rating", value: 4.9 },
  { label: "Satisfied Customers", value: "100+" },
];



