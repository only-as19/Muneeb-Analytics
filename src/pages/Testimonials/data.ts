interface ClientProject {
  clientName: string;
  position: string;
  company?: string;
  website?: string;
  rating: number;
  projectDuration: string;
  myRole: string;
  src: string;
}

export const projects: ClientProject[] = [
  {
    clientName: "Chris",
    position: "Founder & CEO",
    company: "Percivalpallets",
    website: "https://percivalpallets.com/",
    rating: 5,
    projectDuration: "1+ year",
    myRole: "Data Systems & Analytics Manager",
    src: "https://ik.imagekit.io/pdata3016/Testimonails/Chris.mp4?updatedAt=1761976479658&tr=sr-240_360_480_720_1080"
  },
  {
    clientName: "Charvaiy",
    position: "Lead Logistics & Supply Chain Analyst",
    rating: 5,
    projectDuration: "6 months",
    myRole: "Supply Chain Data Analytics Expert",
    src: "https://ik.imagekit.io/pdata3016/Testimonails/Charvaiy.mov/ik-video.mp4?updatedAt=1761976478476&tr=sr-240_360_480_720_1080"
  },
  {
    clientName: "OLA",
    position: "Founder & CEO",
    company: "Bigchampphotography",
    website: "https://bigchampsphotographs.com/",
    rating: 5,
    projectDuration: "6 months",
    myRole: "Data Analytics Consultant",
    src: "https://ik.imagekit.io/pdata3016/Testimonails/Charvaiy.mov/ik-video.mp4?updatedAt=1761976478476&tr=sr-240_360_480_720_1080"
  }
];
