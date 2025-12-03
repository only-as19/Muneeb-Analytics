

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
  about?: string;
}

export const testimonialsVideos: ClientProject[] = [
  {
    // Fixed poster URL - removed invalid transformation
    poster: "https://ik.imagekit.io/jz7julfyw/project/Chris.png",
    clientName: "Chris Percival",
    position: "Founder & CEO",
    company: "Percival Pallets",
    website: "https://percivalpallets.com/",
    rating: 5,
    projectDuration: "1+ year",
    location: "United States",
    myRole: "Data Systems & Analytics Manager",
    // This URL seems to work based on your structure
    src: "https://ik.imagekit.io/jz7julfyw/project/1129.mp4",
    type: "video/mp4",
    about: "supplies new and recycled wooden pallets nationwide, offering durable and cost-effective solutions for logistics, storage, and shipping. Their services include pallet removal and eco-friendly recycling, supporting businesses of all sizes with reliable, fast delivery."
  },
  {
    // Fixed poster URL
    poster: "https://ik.imagekit.io/jz7julfyw/project/Charvaiy.png",
    clientName: "Charvaiy Felix",
    position: "Lead Logistics & Supply Chain Analyst",
    rating: 5,
    projectDuration: "6 months",
    location: "United States",
    myRole: "Supply Chain Data Analytics Expert",
    src: "https://ik.imagekit.io/jz7julfyw/project/charvaiy.mp4",
    type: "video/mp4",
    about:  "Worked as a Supply Chain Analyst, optimizing inventory management and logistics processes for improved efficiency and cost savings."
  },
  {
    // Fixed poster URL
    poster: "https://ik.imagekit.io/jz7julfyw/project/Ola.png",
    clientName: "Olasunkanmi Olaitan",
    position: "Founder & CEO",
    company: "Big Champ Photography",
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
    type: "video/mp4",
    about: "Provided personalized training in Data Analytics, covering Excel, SQL, Power BI, Statistics, and Python to enhance data-driven decision-making skills."
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
