interface ClientProject {
  clientName: string;
  position: string;
  company?: string;
  website?: string;
  rating: number;
  projectDuration: string;
  myRole: string;
}

export const projects: ClientProject[] = [
  {
    clientName: "Chris",
    position: "Founder & CEO",
    company: "Percivalpallets",
    website: "https://percivalpallets.com/",
    rating: 5,
    projectDuration: "1+ year",
    myRole: "Data Systems & Analytics Manager"
  },
  {
    clientName: "Charvaiy",
    position: "Lead Logistics & Supply Chain Analyst",
    rating: 5,
    projectDuration: "6 months",
    myRole: "Supply Chain Data Analytics Expert"
  },
  {
    clientName: "OLA",
    position: "Founder & CEO",
    company: "Bigchampphotography",
    website: "https://bigchampsphotographs.com/",
    rating: 5,
    projectDuration: "6 months",
    myRole: "Data Analytics Consultant"
  }
];
