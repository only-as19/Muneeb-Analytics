export { default as hero_img } from "@/assets/images/landing/transparent_image.png";
export { default as about_video } from "@/assets/images/landing/About.mp4";
export { default as card_image } from "@/assets/images/landing/CTA/interactive-data-visualization-modern-touchscreen.jpg";
import { Shield, Zap, Lock, Target, Phone, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";

export type Feature = {
  metrices: string;
  metricesLabel: string;
  title: string;
  description: string;
  color: string;
  icon: ReactNode;
};

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
  title: string;
  description: string;
};

type PricingPlanName = "Basic" | "Standard" | "Premium" | "Custom";

interface PricingPlan {
  name: PricingPlanName;
  price: number | string | null;
  description: string;
  feature: string[];
  delivery: string;
  revesion: string;
  isPopular: boolean;
  bg: string;
}

interface ServiceContentItem {
  title: string;
  description: string;
  items: SectionItem[] | StepItem[];
}

interface Details {
  hero: Hero;
  serviceContent: ServiceContentItem[];
  pricing: PricingPlan[];
}

interface Service {
  label: string;
  description: string;
  link?: string;
  img?: string;
  id: string;
  details?: Details;
}

export const Services: Service[] = [
  {
    id: "1",
    label: "Power BI Dashboards & Reports",
    description:
      "Get instant visibility into every corner of your business, including sales, finance, marketing, HR, supply chain, and operations. Our automated dashboards update in real-time, delivering clear insights that help you monitor performance, spot opportunities, and make smarter decisions with ease.",
    img: "https://ik.imagekit.io/pdata3016/Services/Power%20BI%20Dashboard%20&%20report.jpg?updatedAt=1758440250629",
    link: "powerbi-dashboards",
    details: {
      hero: {
        title: "Power BI Dashboard & report",
        subtitle: "Unlock Real-Time Business Intelligence",
        description:
          "Turn raw data into powerful insights with fully automated dashboards designed for Sales, Finance, Marketing, HR, Supply Chain, Operations, Customer Service, IT, and Project Management. Gain a complete view of your organization in real time so you can track performance, uncover opportunities, and make smarter decisions with confidence.",
      },
      serviceContent: [
        {
          title: "What's Included",
          description:
            "Our Power BI service covers the complete reporting journey, ensuring that every step of your data lifecycle is managed with care and expertise.",
          items: [
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
        },
        {
          title: "Business Benefits",
          description:
            "Transform the way your business uses data. Save time with automated reporting, improve accuracy with a single source of truth, and empower every department with real-time insights. Our scalable dashboards grow with your organization, ensuring smarter decisions at every stage.",
          items: [
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
        },
        {
          title: "Process",
          description:
            "Our process ensures a smooth journey from discovery to delivery. We start by understanding your goals, then prepare and connect your data, design user-friendly dashboards, and set up automation for real-time accuracy. Finally, we deliver the solution with hands-on training and ongoing support, so your team is equipped to make smarter decisions with confidence.",
          items: [
            {
              title: "Consultation and Discovery",
              description:
                "We begin with an in-depth discussion to understand your goals, KPIs, and challenges, ensuring the solution is aligned with your business objectives.",
            },
            {
              title: "Data Preparation",
              description:
                "Our team connects your data sources, cleans and structures the information, and prepares it for meaningful analysis.",
            },
            {
              title: "Dashboard Development",
              description:
                "We design interactive dashboards that combine usability with strong visual storytelling, making insights accessible to everyone.",
            },
            {
              title: "Automation Setup",
              description:
                "Automated refresh schedules are configured so your dashboards always present the most current data.",
            },
            {
              title: "Delivery and Training",
              description:
                "We deliver the final solution, train your team to use it effectively, and provide ongoing support when needed.",
            },
          ],
        },
      ],

      pricing: [
        {
          name: "Basic",
          price: "400",
          description:
            "Perfect for individuals or small teams that need a clean, actionable dashboard to monitor performance, visualize trends, and support everyday decision-making",
          feature: [
            "1-2 Data sources (Excel,CSV)",
            "Basic data cleaning & formatting",
            "Up to 4 KPIs and 4 charts",
            "Iteractive/animated visuals",
            "1 interactive dashboard",
            "Quick walkthrough or usage guide",
          ],
          delivery: "7 days",
          revesion: "Unlimited",
          isPopular: false,
          bg: "bg-scondary",
        },
        {
          name: "Standard",
          price: "800",
          description:
            "Best for growing businesses that need multi-source reporting and department-level insights with automation",
          feature: [
            "2-4 Data sources (Excel, CSV, SQL, APIs)",
            "Medium Complex data cleaning & transformation",
            "2-3 interactive dashboard pages",
            "Up to 10 KPIs and 8-10 charts",
            "Department-level analysis (Sales, Finance, Marketing, HR, Operations)",
            "Automated data refresh setup",
            "1-on-1 walkthrough or training session",
          ],
          delivery: "14 days",
          revesion: "Unlimited",
          isPopular: true,
          bg: "special-gradiant",
        },
        {
          name: "Premium",
          price: "1500",
          description:
            "Designed for organizations that require enterprise-level dashboards, advanced KPIs, and cross-department reporting with full automation",
          feature: [
            "3-7 Data sources (Excel, CSV, SQL, APIs)",
            "Complex data cleaning & transformation",
            "3-4 interactive dashboard pages",
            "Up to 20 KPIs 20 charts",
            "Department-level analysis (Sales, Finance, Marketing, HR, Operations and more)",
            "Automated data refresh setup",
            "1-on-1 walkthrough or training session",
          ],
          delivery: "30 days",
          revesion: "Unlimited",
          isPopular: false,
          bg: "premium",
        },
        {
          name: "Custom",
          price: null,
          description:
            "Tailored scope, KPIs, data sources, and timelines to match your requirements.",
          feature: [
            "Flexible data sources and volumes",
            "Custom KPIs and advanced modeling as needed",
            "Scope, delivery, and training defined collaboratively",
          ],
          delivery: "As agreed",
          revesion: "As agreed",
          isPopular: false,
          bg: "secondary",
        },
      ],
    },
  },
  {
    id: "2",
    label: "End to End Data Analytics Solutions",
    description:
      "Turn raw, scattered data into strategic business intelligence with our comprehensive end to end analytics solutions. From data strategy and integration to visualization and AI-driven insights, we help you build a scalable, automated, and insight-rich ecosystem that empowers smarter decisions across every department.",
    img: "https://ik.imagekit.io/pdata3016/Services/End%20to%20End%20Data%20Analytics.jpg?updatedAt=1758440250629",
    link: "end-to-end-analytics",
    details: {
      hero: {
        title: "End to End Data Analytics Solutions",
        subtitle: "Unlock the Power of Data Driven Transformation",
        description:
          "Transform your organization into a data-driven powerhouse. Our end-to-end analytics services cover every stage of the data lifecycle — from strategy and integration to visualization and AI insights — creating a scalable and automated ecosystem for smarter, faster decisions.",
      },
      serviceContent: [
        {
          title: "What's Included",
          description:
            "Our end-to-end analytics service covers the entire data lifecycle — from collection and storage to analysis and automation — ensuring your organization gains lasting value from its data.",
          items: [
            {
              title: "Data Strategy & Architecture",
              description:
                "We assess your data maturity and business goals to create a tailored analytics roadmap and architecture that ensures long-term scalability and aligns with your objectives.",
            },
            {
              title: "Data Integration & Warehousing",
              description:
                "We unify your diverse data sources — CRMs, ERPs, APIs, databases, and cloud platforms — into a single warehouse such as Snowflake, BigQuery, or Azure Synapse for seamless data access.",
            },
            {
              title: "Data Cleaning & Transformation",
              description:
                "Using robust ETL pipelines, we cleanse, normalize, and model your data to maintain accuracy and consistency, preparing it for meaningful analysis.",
            },
            {
              title: "Business Intelligence & Visualization",
              description:
                "We create interactive dashboards and analytical reports using Power BI, Tableau, or Looker, providing real-time insights through visually compelling interfaces.",
            },
            {
              title: "Advanced Analytics & AI",
              description:
                "Leverage predictive forecasting, segmentation, and machine learning models to uncover hidden trends, opportunities, and risks across your business operations.",
            },
            {
              title: "Automation & Monitoring",
              description:
                "Automated refreshes, alerts, and monitoring systems keep your analytics environment up-to-date and efficient — no manual effort required.",
            },
            {
              title: "Training & Support",
              description:
                "We provide user training and ongoing support to ensure your teams can maintain, scale, and interpret analytics independently and confidently.",
            },
          ],
        },
        {
          title: "Business Benefits",
          description:
            "Our analytics framework is built to empower organizations with real-time insights, streamlined workflows, and future-ready infrastructure. Experience the advantages of data-driven decision-making at every level.",
          items: [
            {
              title: "Centralized Intelligence",
              description:
                "Unify all your data sources into one connected ecosystem — your single source of truth for business decisions.",
            },
            {
              title: "Smarter, Faster Decisions",
              description:
                "Enable real-time, insight-driven decisions backed by reliable, automated analytics across all departments.",
            },
            {
              title: "Cost & Time Efficiency",
              description:
                "Automate reporting and reduce manual data handling to save hours and operational costs.",
            },
            {
              title: "Future-Ready Infrastructure",
              description:
                "Build scalable, cloud-optimized solutions that adapt and grow with your organization's needs.",
            },
            {
              title: "Data-Driven Culture",
              description:
                "Empower every department — from sales and finance to HR and operations — to make data-backed decisions confidently.",
            },
          ],
        },
        {
          title: "Process",
          description:
            "Our process ensures seamless implementation from discovery to delivery. Each step is designed for clarity, automation, and measurable impact, helping you gain maximum value from your data investment.",
          items: [
            {
              title: "Consultation & Discovery",
              description:
                "We begin with workshops to understand your goals, KPIs, challenges, and existing data systems.",
            },
            {
              title: "Architecture & Integration",
              description:
                "We design and implement the ideal architecture, connecting all data sources into one unified platform.",
            },
            {
              title: "Data Preparation & Modeling",
              description:
                "Your data is cleaned, structured, and modeled to ensure accuracy and analytical readiness.",
            },
            {
              title: "Visualization & Insight Development",
              description:
                "We craft dashboards and reports that tell a visual story and support informed business decisions.",
            },
            {
              title: "Automation & Optimization",
              description:
                "Your system is equipped with automated refreshes, alerting, and monitoring for effortless performance.",
            },
            {
              title: "Delivery & Enablement",
              description:
                "We deliver the final solution, train your teams, and provide ongoing optimization and support.",
            },
          ],
        },
      ],

      pricing: [
        {
          name: "Basic",
          price: "800",
          description:
            "Ideal for small teams getting started with analytics automation and streamlined data visualization.",
          feature: [
            "1-3 Data sources (Excel, CSV, SQL)",
            "Basic ETL & data cleaning",
            "1-2 dashboards with core KPIs",
            "Automated refresh setup",
            "Quick usage guide",
          ],
          delivery: "10 days",
          revesion: "Unlimited",
          isPopular: true,
          bg: "special-gradiant",
        },
        {
          name: "Standard",
          price: "1500-2500",
          description:
            "Perfect for mid-size businesses needing cross-department analytics, automation, and predictive insights.",
          feature: [
            "3-6 Data sources (SQL, APIs, CRMs)",
            "Moderate data transformation",
            "2-4 analytical dashboards",
            "Up to 15 KPIs and metrics",
            "Predictive trend reports",
            "1-on-1 training session",
          ],
          delivery: "20 days",
          revesion: "Unlimited",
          isPopular: false,
          bg: "bg-scondary",
        },
        {
          name: "Premium",
          price: "3000-6000",
          description:
            "Built for enterprises requiring advanced analytics, machine learning, and large-scale automation.",
          feature: [
            "5-10 Data sources (SQL, APIs, CRMs, Cloud)",
            "Complex data modeling & automation",
            "Machine learning & predictive forecasting",
            "5-6 interactive dashboards",
            "Custom KPIs for all departments",
            "Ongoing optimization support",
          ],
          delivery: "30-45 days",
          revesion: "Unlimited",
          isPopular: false,
          bg: "premium",
        },
        // {
        //   name: "Custom",
        //   price: "Contact for Quote",
        //   description:
        //     "A fully tailored analytics solution aligned with your unique business goals, infrastructure, and growth strategy.",
        //   feature: [
        //     "Custom architecture & data pipeline design",
        //     "Unlimited data sources and integrations",
        //     "Tailored dashboards for each department",
        //     "Dedicated analytics consultant",
        //     "Full training & long-term support",
        //   ],
        //   delivery: "Flexible",
        //   revesion: "Unlimited",
        //   isPopular: false,
        //   bg: "bg-dark",
        // },
      ],
    },
  },
  {
    id: "3",
    label: "Predictive Analytics (Python & Machine Learning)",
    description:
      "Harness Python, statistics, and machine learning to uncover patterns, predict trends, and optimize decision-making. Move from reactive insights to proactive strategy with models tailored to your data and goals.",
    img: "https://ik.imagekit.io/pdata3016/Services/Predictive%20Analytics.jpg",
    link: "predictive-analytics",
    details: {
      hero: {
        title: "Predictive Analytics (Python & Machine Learning)",
        subtitle: "Forecast the Future with Data-Driven Precision",
        description:
          "From data preparation and feature engineering to model development, validation, deployment, and an interactive front-end—our predictive analytics services deliver accurate, actionable forecasts that scale with your business.",
      },
      serviceContent: [
        {
          title: "What's Included",
          description:
            "We cover every stage of the machine learning workflow—ensuring reliable predictions, transparent evaluation, and smooth delivery.",
          items: [
            {
              title: "Exploratory Data Analysis (EDA)",
              description:
                "Profile datasets to surface trends, correlations, seasonality, and data gaps that shape model design.",
            },
            {
              title: "Feature Engineering & Data Preparation",
              description:
                "Clean, transform, and engineer features to boost model signal and ensure robust, reliable predictions.",
            },
            {
              title: "Model Development (Python & ML Frameworks)",
              description:
                "Build and train models with Scikit-learn, TensorFlow, and XGBoost for use cases like demand forecasting, churn prediction, and opportunity scoring.",
            },
            {
              title: "Model Evaluation & Optimization",
              description:
                "Validate with cross-validation and hyperparameter tuning. Report metrics such as R², RMSE, F1-score, Precision, and Recall.",
            },
            {
              title: "Front-End Interface Development",
              description:
                "Ship a lightweight app (Streamlit or Flask) so users can input parameters, view predictions, and visualize results in the browser—no coding required.",
            },
            {
              title: "Model Maintenance & Support",
              description:
                "Post-delivery support and retraining guidance to keep models accurate as new data arrives.",
            },
          ],
        },
        {
          title: "Business Benefits",
          description:
            "Make confident, evidence-based decisions across the organization with proactive insights.",
          items: [
            {
              title: "Smarter Forecasting",
              description:
                "Predict sales, demand, and customer behavior with confidence to plan ahead.",
            },
            {
              title: "Data-Driven Optimization",
              description:
                "Streamline operations, allocate resources efficiently, and reduce uncertainty.",
            },
            {
              title: "Risk Mitigation",
              description:
                "Detect anomalies early, anticipate challenges, and take preventive action.",
            },
            {
              title: "Custom Machine Learning Solutions",
              description:
                "Models tailored to your data and business logic for maximum impact.",
            },
            {
              title: "Interactive Model Access",
              description:
                "Non-technical users can explore predictions via simple, web-based interfaces.",
            },
          ],
        },
        {
          title: "Process",
          description:
            "A clear, outcome-focused ML delivery lifecycle from scoping to enablement.",
          items: [
            {
              title: "Consultation & Use Case Definition",
              description:
                "Define goals, success metrics, and available data sources.",
            },
            {
              title: "Data Preparation",
              description:
                "Clean, merge, and structure data for accurate modeling.",
            },
            {
              title: "Model Design & Development",
              description:
                "Build, train, and tune models with advanced ML frameworks.",
            },
            {
              title: "Testing & Validation",
              description:
                "Evaluate on holdout/test data with transparent metrics.",
            },
            {
              title: "Interface Creation & Delivery",
              description:
                "Deploy an interactive front end to run predictions and view results.",
            },
            {
              title: "Training & Support",
              description:
                "Documentation and hands-on guidance to operate and maintain models.",
            },
          ],
        },
      ],

      pricing: [
        {
          name: "Basic",
          price: "1000",
          description:
            "Ideal for small teams exploring a first predictive use case with a simple interface and clear insights.",
          feature: [
            "One predictive use case (e.g., sales or churn)",
            "Clean & structured data (up to 100K rows)",
            "Regression or Classification model",
            "Simple front-end interface",
            "Model summary & insights report",
            "Quick usage walkthrough",
          ],
          delivery: "10 days",
          revesion: "Unlimited",
          isPopular: true,
          bg: "special-gradiant",
        },
        {
          name: "Standard",
          price: "2000-3500",
          description:
            "Best for growing businesses needing customized models, richer features, and interactive visualization.",
          feature: [
            "1-2 predictive use cases",
            "Feature engineering & optimization",
            "Multiple algorithms (Regression, Random Forest, XGBoost)",
            "Interactive front-end with visualizations",
            "Evaluation report with charts & metrics",
            "Training session included",
          ],
          delivery: "20 days",
          revesion: "Unlimited",
          isPopular: false,
          bg: "bg-scondary",
        },
        {
          name: "Premium",
          price: "4000-6000",
          description:
            "For enterprises needing advanced algorithms, automation, and production-ready delivery.",
          feature: [
            "2-4 predictive models across departments",
            "Advanced algorithms (Time Series, Ensemble Models)",
            "Automated retraining workflow",
            "Custom front-end with inputs and live visuals",
            "Detailed docs & ongoing optimization support",
          ],
          delivery: "30-45 days",
          revesion: "Unlimited",
          isPopular: false,
          bg: "premium",
        },
        // {
        //   name: "Custom",
        //   price: "Contact for Quote",
        //   description:
        //     "A tailored predictive platform or multi-model environment with scalable architecture and UX.",
        //   feature: [
        //     "Custom use cases and architecture",
        //     "Unlimited integrations and data sources",
        //     "Department-specific apps & dashboards",
        //     "Dedicated ML consultant",
        //     "Full training & long-term support",
        //   ],
        //   delivery: "Flexible",
        //   revesion: "Unlimited",
        //   isPopular: false,
        //   bg: "bg-dark",
        // },
      ],
    },
  },
  {
    id: "4",
    label: "Statistical and Exploratory Data Analysis",
    description:
      "Uncover patterns, relationships, and anomalies within your data through comprehensive statistical and exploratory data analysis. Gain clarity and direction before investing in advanced analytics or predictive modeling.",
    img: "https://ik.imagekit.io/pdata3016/Services/Statistical%20and%20EDA.jpg",
    link: "statistical-analysis",
    details: {
      hero: {
        title: "Statistical and Exploratory Data Analysis",
        subtitle: "Understand Your Data, Uncover Opportunities",
        description:
          "Every data-driven journey begins with understanding the story behind your numbers. Our Statistical and Exploratory Data Analysis (EDA) service helps organizations uncover hidden insights, relationships, and data quality issues—empowering smarter, evidence-based decisions.",
      },
      serviceContent: [
        {
          title: "What's Included",
          description:
            "Our EDA service is designed to extract maximum insight from your datasets, ensuring business decisions are grounded in accuracy and evidence.",
          items: [
            {
              title: "Data Profiling & Assessment",
              description:
                "We examine your data's structure, completeness, and consistency to detect missing values, gaps, and inconsistencies.",
            },
            {
              title: "Descriptive Statistics",
              description:
                "We summarize key metrics such as mean, median, variance, and distribution patterns to reveal the overall behavior of your data.",
            },
            {
              title: "Data Visualization",
              description:
                "Using Python (Matplotlib, Seaborn, Plotly) or R, we build clear, interactive visuals that highlight correlations, outliers, and distribution patterns.",
            },
            {
              title: "Correlation & Trend Analysis",
              description:
                "We identify relationships between variables using statistical measures, scatter plots, and heatmaps to highlight performance drivers.",
            },
            {
              title: "Hypothesis Testing & Statistical Inference",
              description:
                "We perform t-tests, chi-square tests, and ANOVA to validate assumptions and provide confidence-backed insights.",
            },
            {
              title: "Feature Relationships & Segment Analysis",
              description:
                "We explore variable importance and segment-level insights, revealing trends by customer group, product, or region.",
            },
            {
              title: "Comprehensive Summary Report",
              description:
                "You'll receive a full analytical report including visuals, interpretations, and actionable recommendations tailored to your business goals.",
            },
          ],
        },
        {
          title: "Business Benefits",
          description:
            "Our EDA service provides clarity, direction, and confidence in your data-driven initiatives—laying the foundation for advanced analytics and predictive modeling.",
          items: [
            {
              title: "Informed Decision-Making",
              description:
                "Understand your data deeply before moving to modeling or automation.",
            },
            {
              title: "Improved Data Quality",
              description:
                "Detect and correct missing values or inconsistencies early to ensure reliable outcomes.",
            },
            {
              title: "Clarity on Key Drivers",
              description:
                "Pinpoint the most impactful variables and metrics influencing your business results.",
            },
            {
              title: "Foundation for Predictive Analytics",
              description:
                "Establish a statistical baseline that strengthens future forecasting and machine learning initiatives.",
            },
            {
              title: "Actionable Insights",
              description:
                "Translate raw numbers into meaningful narratives that drive strategy and innovation.",
            },
          ],
        },
        {
          title: "Process",
          description:
            "A structured, insight-focused workflow ensures your data is explored, analyzed, and visualized efficiently and effectively.",
          items: [
            {
              title: "Consultation & Data Review",
              description:
                "We start with a discovery session to understand your data sources, goals, and analytical needs.",
            },
            {
              title: "Data Cleaning & Preparation",
              description:
                "Your data is standardized, validated, and formatted for consistent and accurate analysis.",
            },
            {
              title: "Exploratory & Statistical Analysis",
              description:
                "Comprehensive descriptive and inferential analysis uncovers relationships and trends.",
            },
            {
              title: "Visualization & Storytelling",
              description:
                "We visualize findings through intuitive dashboards and charts for easy interpretation.",
            },
            {
              title: "Report & Recommendations",
              description:
                "We deliver a full EDA report with detailed insights, interpretations, and business recommendations.",
            },
            {
              title: "Optional Presentation",
              description:
                "We can walk your team through findings, ensuring complete understanding and actionable clarity.",
            },
          ],
        },
      ],

      pricing: [
        {
          name: "Basic",
          price: "500",
          description:
            "Ideal for startups or small teams exploring their datasets for the first time.",
          feature: [
            "1 dataset (up to 100K rows)",
            "Basic descriptive statistics",
            "3-5 visualizations (distribution & trend plots)",
            "Summary report in PDF/Word format",
            "Quick walkthrough session",
          ],
          delivery: "7 days",
          revesion: "Unlimited",
          isPopular: true,
          bg: "special-gradiant",
        },
        {
          name: "Standard",
          price: "900",
          description:
            "Perfect for businesses seeking deeper statistical analysis and richer data visualization.",
          feature: [
            "Multiple datasets (2-3)",
            "Correlation and hypothesis testing",
            "8-10 visualizations (heatmaps, trend lines, comparative analysis)",
            "Statistical summary report with insights",
            "Optional presentation session",
          ],
          delivery: "14 days",
          revesion: "Unlimited",
          isPopular: false,
          bg: "bg-scondary",
        },
        {
          name: "Premium",
          price: "2000-3000",
          description:
            "Comprehensive EDA for enterprises needing advanced statistical methods and executive reporting.",
          feature: [
            "3-6 datasets across departments",
            "Advanced statistical testing (ANOVA, regression, segment analysis)",
            "12-15 visuals with custom formatting",
            "Executive-level report with actionable insights",
            "Optional presentation & recommendations meeting",
          ],
          delivery: "21-30 days",
          revesion: "Unlimited",
          isPopular: false,
          bg: "premium",
        },
        // {
        //   name: "Custom",
        //   price: "Contact for Quote",
        //   description:
        //     "Need deeper statistical modeling or time series analysis? We’ll build a custom EDA solution tailored to your business goals.",
        //   feature: [
        //     "Custom statistical analysis or time series modeling",
        //     "Unlimited datasets and integrations",
        //     "Tailored dashboards & visualizations",
        //     "Dedicated data science consultant",
        //     "Full training & support package",
        //   ],
        //   delivery: "Flexible",
        //   revesion: "Unlimited",
        //   isPopular: false,
        //   bg: "bg-dark",
        // },
      ],
    },
  },
  {
  id: "5",
  label: "Tableau Dashboards & Reports",
  description:
    "Transform your data into real-time, interactive Tableau dashboards that empower smarter, faster decisions across every department.",
  img: "https://ik.imagekit.io/pdata3016/Services/Tableau%20Dashboard.jpg",
  link: "tableau-dashboards",
  details: {
    hero: {
      title: "Automated Tableau Dashboards & Reports",
      subtitle: "Unlock Real-Time Business Intelligence",
      description:
        "Turn raw data into powerful insights with fully automated dashboards built in Tableau for Sales, Finance, Marketing, HR, Supply Chain, Operations, Customer Service, IT, and Project Management. Gain a 360° view of your organization and make confident, data-driven decisions with ease.",
    },

    serviceContent: [
      {
        title: "What's Included",
        description:
          "Our Tableau service covers every step of the analytics journey — from connecting your data sources to automating updates and enabling secure collaboration.",
        items: [
          {
            title: "Automated Data Integration",
            description:
              "We connect Tableau seamlessly to your existing data sources such as Excel, SQL databases, cloud platforms, and enterprise systems — keeping your dashboards updated automatically.",
          },
          {
            title: "Data Transformation and Cleaning",
            description:
              "Using Tableau Prep and advanced data modeling, we clean and standardize your data to ensure consistent and reliable insights.",
          },
          {
            title: "Interactive Dashboards and Reports",
            description:
              "Dashboards feature drill-downs, filters, and intuitive visuals, helping decision-makers explore insights and uncover opportunities quickly.",
          },
          {
            title: "Custom KPIs and Metrics",
            description:
              "We design dashboards around KPIs that truly matter — sales performance, financial ratios, HR benchmarks, and marketing ROI — giving every department clarity and focus.",
          },
          {
            title: "Secure Sharing and Collaboration",
            description:
              "Using Tableau Server or Tableau Online, your dashboards are securely shared with role-based permissions, enabling teamwork without compromising data security.",
          },
        ],
      },
      {
        title: "Business Benefits",
        description:
          "Tableau dashboards deliver measurable value by transforming how your organization collects, visualizes, and acts on data.",
        items: [
          {
            title: "Save Time and Resources",
            description:
              "Automated reporting eliminates manual work and frees your team to focus on strategy, not spreadsheets.",
          },
          {
            title: "Enhance Decision-Making",
            description:
              "Accurate and real-time insights ensure faster, smarter business decisions across all levels.",
          },
          {
            title: "Clarity Across Departments",
            description:
              "Every department — from Sales and Finance to HR and Operations — gains clear, accessible metrics in one platform.",
          },
          {
            title: "Improved Accuracy and Reliability",
            description:
              "Centralized dashboards eliminate data discrepancies and ensure a single, trusted source of truth.",
          },
          {
            title: "Scalable Solutions",
            description:
              "Our Tableau dashboards scale with your business, adapting easily to new data sources and organizational growth.",
          },
        ],
      },
      {
        title: "How It Works",
        description:
          "Our end-to-end process ensures smooth delivery, automation, and lasting value from your Tableau environment.",
        items: [
          {
            title: "Consultation and Discovery",
            description:
              "We start with an in-depth discussion to understand your goals, KPIs, and data challenges to build a solution that fits perfectly.",
          },
          {
            title: "Data Preparation",
            description:
              "Our team connects, blends, and structures your data to ensure consistency and analytical readiness.",
          },
          {
            title: "Dashboard Development",
            description:
              "We craft interactive, visually compelling dashboards that combine usability and clear storytelling.",
          },
          {
            title: "Automation Setup",
            description:
              "We configure automated refresh schedules so your dashboards always present the latest data — hands-free.",
          },
          {
            title: "Delivery and Training",
            description:
              "We finalize the dashboards, provide user training, and remain available for ongoing support and optimization.",
          },
        ],
      },
    ],

    pricing: [
      {
        name: "Basic",
        price: "400",
        description:
          "Perfect for individuals or small teams who need a clean, actionable dashboard to track performance and visualize trends.",
        feature: [
          "1–2 Data sources (Excel, CSV)",
          "Basic data cleaning and formatting",
          "Up to 4 KPIs and 4 charts",
          "Interactive/animated visuals",
          "1 interactive page dashboard",
          "Quick walkthrough or usage guide",
        ],
        delivery: "7 days",
        revesion: "Unlimited",
        isPopular: true,
        bg: "special-gradiant",
      },
      {
        name: "Standard",
        price: "800–1200",
        description:
          "Best for growing businesses needing multi-source reporting and department-level insights with automation.",
        feature: [
          "2–4 Data sources (Excel, CSV, SQL, APIs)",
          "Medium complex data cleaning and transformation",
          "2–3 interactive dashboard pages",
          "Up to 10 KPIs and 8–10 charts",
          "Department-level analysis (Sales, Finance, Marketing, HR, Operations)",
          "Automated data refresh setup",
          "1-on-1 walkthrough or training session",
        ],
        delivery: "14 days",
        revesion: "Unlimited",
        isPopular: false,
        bg: "bg-scondary",
      },
      {
        name: "Premium",
        price: "1500–2000",
        description:
          "Designed for enterprises that require advanced KPIs, automation, and cross-department performance dashboards.",
        feature: [
          "3–7 Data sources (Excel, CSV, SQL, APIs)",
          "Complex data cleaning and transformation",
          "5–6 interactive dashboard pages",
          "Up to 20 KPIs and 20 charts",
          "Enterprise-level reporting and automation",
          "Department-level analysis (Sales, Finance, HR, Marketing, and more)",
          "1-on-1 walkthrough or training session",
        ],
        delivery: "30 days",
        revesion: "Unlimited",
        isPopular: false,
        bg: "premium",
      },
      {
        name: "Custom",
        price: "Contact for Quote",
        description:
          "Not sure which package fits your needs? We’ll design a fully customized Tableau solution aligned with your goals and budget.",
        feature: [
          "Custom architecture and design",
          "Unlimited data sources and integrations",
          "Tailored dashboards and KPIs",
          "Dedicated support and optimization",
          "Comprehensive team training",
        ],
        delivery: "Flexible",
        revesion: "Unlimited",
        isPopular: false,
        bg: "bg-dark",
      },
    ],
  },
},

];

export const statsData: StatItem[] = [
  { label: "Dashboards Delivered", value: "300+" },
  { label: "Avg Rating", value: 4.9 },
  { label: "Satisfied Customers", value: "100+" },
];

export const features: Feature[] = [
  {
    metrices: "14 Days",
    metricesLabel: "Guarantee",
    title: "Risk-Free Guarantee",
    description:
      "Full refund if you're not satisfied within the first 14 days.",
    color: "#10b981",
    icon: <Shield />,
  },
  {
    metrices: "7 Days",
    metricesLabel: "Setup",
    title: "1-Week Setup",
    description:
      "Rapid Power BI deployment and onboarding tailored to your data sources.",
    color: "#3b82f6",
    icon: <Zap />,
  },
  {
    metrices: "99.9%",
    metricesLabel: "Secure",
    title: "Enterprise Security",
    description: "Your dashboards protected with role-based access.",
    color: "#06b6d4",
    icon: <Lock />,
  },
  {
    metrices: "∞",
    metricesLabel: "Revision",
    title: "Unlimited Revisions",
    description:
      "We refine visuals, KPIs, and layouts until your dashboards meet every need.",
    color: "#10b981",
    icon: <Target />,
  },
  {
    metrices: "24/7",
    metricesLabel: "Support",
    title: "Expert Support",
    description:
      "Direct access to a Power BI specialist for guidance and troubleshooting.",
    color: "#2a6aee",
    icon: <Phone />,
  },
  {
    metrices: "∞",
    metricesLabel: "Growth",
    title: "Scalable Growth",
    description:
      "Dashboards designed to expand seamlessly as your business and data evolve.",
    color: "#0795b6",
    icon: <TrendingUp />,
  },
];
