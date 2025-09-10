export {default as logo} from "@/assets/images/logo.png"

interface INavLinks {
  link: string;
  label: string;
  description?: string;
  children?: {
    link: string;
    label: string;
    description?: string;
  }[];
}

export const navLinks: INavLinks[] = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/services",
    label: "Services",
    children: [
      {
        link: "/services/end-to-end-analytics",
        label: "End-to-End Data Analytics Solutions",
        description:
          "From raw data to actionable insights, complete analytics solutions tailored to your business needs.",
      },
      {
        link: "/services/powerbi-dashboards",
        label: "Automated Dashboards in Power BI",
        description:
          "Interactive and dynamic dashboards that update automatically, giving you real-time business visibility.",
      },
      {
        link: "/services/corporate-trainings",
        label: "Corporate Trainings",
        description:
          "Customized training sessions for teams and professionals in Power BI, SQL, Python, and data-driven problem solving.",
      },
      {
        link: "/services/tableau-dashboards",
        label: "Automated Dashboards in Tableau",
        description:
          "Interactive and dynamic dashboards that update automatically, giving you real-time business visibility.",
      },
      {
        link: "/services/predictive-analytics",
        label: "Predictive Analytics (Python & ML)",
        description:
          "Leverage advanced models to forecast trends, identify patterns, and make confident data-driven decisions.",
      },
      {
        link: "/services/statistical-analysis",
        label: "Statistical & Exploratory Data Analysis",
        description:
          "In-depth analysis to uncover hidden insights, validate assumptions, and support strategic decision-making.",
      },
    ],
  },
  {
    link: "/portfolio",
    label: "Portfolio",
    children: [
      {
        link:"/caseStudy",
        label:"Case Studies",
        description: "Real world success stories"
      }
    ]
  },
  {
    link: "/blogs",
    label: "Blogs",
  },
  {
    link: "/testimonials",
    label: "Testimonials",
  },
  {
    link: "/freeDemo",
    label: "Request a free Demo",
  },
];
