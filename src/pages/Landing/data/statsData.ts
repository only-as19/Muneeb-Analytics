export interface ServiceStat {
  label: string;
  value: string | number;
}

export const statData: Record<string, ServiceStat[]> = {
  "1": [
    { label: "Projects Delivered", value: "300+" },
    { label: "Avg Rating", value: 4.9 },
    { label: "Satisfied Customers", value: "100+" },
  ],
  "2": [
    { label: "Projects Delivered", value: 40 },
    { label: "Avg Rating", value: 4.9 },
    { label: "Satisfied Customers", value: "100+" },
  ],
  "3": [
    { label: "Projects Delivered", value: "10+" },
    { label: "Avg Rating", value: 4.7 },
    { label: "Satisfied Customers", value: "100+" },
  ],
  "4": [
    { label: "Projects Delivered", value: "35+" },
    { label: "Avg Rating", value: 4.9 },
    { label: "Satisfied Customers", value: "100+" },
  ],
  "5": [
    { label: "Projects Delivered", value: "300+" },
    { label: "Avg Rating", value: 4.9 },
    { label: "Satisfied Customers", value: "100+" },
  ],
  "6": [
    { label: "Students Tutored", value: "65+" },
    { label: "Avg Rating", value: 4.9 },
    { label: "Satisfied Customers", value: "100+" },
  ],
};

export const MainStat: ServiceStat[] = [
  { label: "Projects Delivered", value: "300+" },
  { label: "Avg Rating", value: 4.9 },
  { label: "Satisfied Customers", value: "100+" },
];
