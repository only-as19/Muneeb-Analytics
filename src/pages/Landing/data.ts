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
  link?:string
}

export const Services: service[] = [
  {
    label: "Automated Power BI Dashboards & Reports",
    description:
      "Get instant visibility into every corner of your business, including sales, finance, marketing, HR, supply chain, and operations. Our automated dashboards update in real-time, delivering clear insights that help you monitor performance, spot opportunities, and make smarter decisions with ease.",
      link: "https://ik.imagekit.io/pdata3016/Services/Power%20BI%20Dashboard%20&%20report.jpg?updatedAt=1758440250629"
  },
  {
    label: "Automated Tableau Dashboards & Reports",
    description:
      "Unlock real-time insights across sales, finance, marketing, HR, supply chain, and operations with fully automated Tableau dashboards. Designed for clarity and speed, our reports update instantly so you can track performance, identify trends, and make confident decisions without manual effort.",
      link: "https://ik.imagekit.io/pdata3016/Services/Tableau%20Dashboard%20&%20report.jpg?updatedAt=1758440250688"
  },
  {
    label: "Corporate Trainings",
    description:
      "Empower your teams with customized training in Power BI, SQL, Python, and data analytics. Our hands-on sessions are designed to build practical skills, improve problem-solving, and help professionals turn data into smarter business decisions.",
      link: "https://ik.imagekit.io/pdata3016/Services/Corporate%20Trainings.jpg?updatedAt=1758440250910"
  },
  {
    label: "Predictive Analytics (Python & ML)",
    description:
      "Stay ahead of the curve with predictive models that forecast trends, uncover patterns, and anticipate customer behavior. Using Python and machine learning, we deliver actionable insights that help you minimize risks, optimize strategies, and make smarter business decisions.",
      link: "https://ik.imagekit.io/pdata3016/Services/Predicive%20analysis.jpg?updatedAt=1758440250382"
  },
  {
    label: "Statistical & Exploratory Data Analysis",
    description:
      "Discover hidden patterns and validate key assumptions through deep statistical and exploratory analysis. We help you uncover meaningful insights, reduce uncertainty, and guide smarter strategies for long-term business growth.",
      link: "https://ik.imagekit.io/pdata3016/Services/Statistical%20analysis.jpg?updatedAt=1758440250570"
  },
  {
    label: "End-to-End Data Analytics Solutions",
    description:
      "Turn raw data into actionable insights with complete analytics solutions designed for your business. From data integration and cleaning to dashboards, advanced analysis and reporting, we manage the entire process so you can focus on growth.",
  },
];


export const statsData: StatItem[] = [
  { label: "Dashboards Delivered", value: "300+" },
  { label: "Avg Rating", value: 4.9 },
  { label: "Satisfied Customers", value: "100+" },
];
