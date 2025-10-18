export {default as logo} from "@/assets/images/logo.png"

interface INavLinks {
  link: string;
  label: string;
  description?: string;
  children?: {
    link: string;
    label: string;
    description?: string;
    id?:string
    
  }[];
}

export const navLinks: INavLinks[] = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "#",
    label: "Services",
    children: [
      {
        id:"1",
        link: "/end-to-end-analytics",
        label: "End-to-End Data Analytics Solutions",
        description:
          "From raw data to actionable insights, complete analytics solutions tailored to your business needs.",
      },
      {
        id:"2",
        link: "/powerbi-dashboards",
        label: "Power BI Dashboards & Reports",
        description:
          "Interactive and dynamic dashboards that update automatically, giving you real-time business visibility.",
      },
      {
        id:"3",
        link: "/corporate-trainings",
        label: "Data analytics Training",
        description:
          "Customized training sessions for teams and professionals in Power BI, SQL, Python, and data-driven problem solving.",
      },
      {
        id:"4",
        link: "/tableau-dashboards",
        label: "Tableau Dashboards & Reports",
        description:
          "Interactive and dynamic dashboards that update automatically, giving you real-time business visibility.",
      },
      {
        id:"5",
        link: "/predictive-analytics",
        label: "Predictive Analytics (Python & ML)",
        description:
          "Leverage advanced models to forecast trends, identify patterns, and make confident data-driven decisions.",
      },
      {
        id:"6",
        link: "/statistical-analysis",
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
