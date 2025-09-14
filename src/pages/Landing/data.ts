export {default as hero_img} from "@/assets/images/landing/transparent_image.png"
export {default as about_video} from "@/assets/images/landing/About.mp4"

type StatItem = {
  label: string;
  value: string | number;
};

export const statsData: StatItem[] = [
  { label: "Dashboards Delivered", value: 300 },
  { label: "Avg Rating", value: 4.9 },
  { label: "Satisfied Customers", value: "100+" },
];

