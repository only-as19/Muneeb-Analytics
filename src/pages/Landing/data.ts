export { default as hero_img } from "@/assets/images/landing/transparent_image.png";
export { default as about_video } from "@/assets/images/landing/About.mp4";
export {default as card_image} from "@/assets/images/landing/CTA/interactive-data-visualization-modern-touchscreen.jpg"

type StatItem = {
  label: string;
  value: string | number;
};

interface service {
  label: string;
  description: string;
}

export const Services: service[] = [
  {
    label: "End-to-End Data Analytics Solutions",
    description:
      "From raw data to actionable insights, complete analytics solutions tailored to your business needs.",
  },
  {
    label: "Automated Power BI Dashboards & Reports",
    description:
      "Interactive and dynamic dashboards that update automatically, giving you real-time business visibility.",
  },
  {
    label: "Corporate Trainings",
    description:
      "Customized training sessions for teams and professionals in Power BI, SQL, Python, and data-driven problem solving.",
  },
  {
    label: "Automated Tableau Dashboards & Reports",
    description:
      "Interactive and dynamic dashboards that update automatically, giving you real-time business visibility.",
  },
  {
    label: "Predictive Analytics (Python & ML)",
    description:
      "Leverage advanced models to forecast trends, identify patterns, and make confident data-driven decisions.",
  },
  {
    label: "Statistical & Exploratory Data Analysis",
    description:
      "In-depth analysis to uncover hidden insights, validate assumptions, and support strategic decision-making.",
  },
];

export const statsData: StatItem[] = [
  { label: "Dashboards Delivered", value: "300+" },
  { label: "Avg Rating", value: 4.9 },
  { label: "Satisfied Customers", value: "100+" },
];
