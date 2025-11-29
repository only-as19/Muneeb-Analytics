

export interface Testimonial {
  image: string
  handle: string
  name: string
  date: string
}
export interface ClientProject {
  clientName: string;
  position: string;
  company?: string;
  website?: string;
  rating: number;
  projectDuration: string;
  myRole: string;
  src: string;
  type?: string;
  location: string;
  poster: string;
}

export const testimonialsVideos: ClientProject[] = [
  {
    // Fixed poster URL - removed invalid transformation
    poster: "https://ik.imagekit.io/pdata3016/Testimonails/review1.jpg?updatedAt=1762102789316&tr=w-720,q-80",
    clientName: "Chris",
    position: "Founder & CEO",
    company: "Percivalpallets",
    website: "https://percivalpallets.com/",
    rating: 5,
    projectDuration: "1+ year",
    location: "United States",
    myRole: "Data Systems & Analytics Manager",
    // This URL seems to work based on your structure
    src: "https://ik.imagekit.io/jz7julfyw/project/1129.mp4",
    type: "video/mp4"
  },
  {
    // Fixed poster URL
    poster: "https://ik.imagekit.io/pdata3016/Testimonails/unnamed.jpg?updatedAt=1762103487834&tr=w-720,q-80",
    clientName: "Charvaiy",
    position: "Lead Logistics & Supply Chain Analyst",
    rating: 5,
    projectDuration: "6 months",
    location: "United States",
    myRole: "Supply Chain Data Analytics Expert",
    src: "https://ik.imagekit.io/jz7julfyw/project/charvaiy.mp4",
    type: "video/mp4"
  },
  {
    // Fixed poster URL
    poster: "https://ik.imagekit.io/pdata3016/Testimonails/review2.jpg?updatedAt=1762102789312&tr=w-720,q-80",
    clientName: "OLA",
    position: "Founder & CEO",
    company: "Bigchampphotography",
    website: "https://bigchampsphotographs.com/",
    rating: 5,
    location: "United States",
    projectDuration: "6 months",
    myRole: "Data Analytics Consultant",
    // FIXED: Removed space-encoded path and trailing '?'
    // Option 1: If file is in root Testimonails folder
    src: "https://ik.imagekit.io/jz7julfyw/project/ola.mp4",
    // Option 2: If you need to keep the path, properly encode it
    // src: "https://ik.imagekit.io/pdata3016/Muneeb-Analytics/ola.mp4/ik-master.m3u8?tr=sr-240_360_480_720_1080",
    type: "video/mp4"
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
