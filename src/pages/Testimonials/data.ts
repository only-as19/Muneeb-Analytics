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

export interface Testimonial {
  image: string
  handle: string
  name: string
  date: string
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

export const testimonialsData:Testimonial[] = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Briar Martin',
            handle: '@neilstellar',
            date: 'April 20, 2025'
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Avery Johnson',
            handle: '@averywrites',
            date: 'May 10, 2025'
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Jordan Lee',
            handle: '@jordantalks',
            date: 'June 5, 2025'
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Avery Johnson',
            handle: '@averywrites',
            date: 'May 10, 2025'
        },
    ];
