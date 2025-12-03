export interface Testimonial {
  image: string;
  handle: string;
  name: string;
  date: string;
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
  heading: string;
}

export interface ReviewItem {
  name: string;
  location: string;
  rating: number;
  role: string;
  status?: string;
  review: string;
}

export const testimonialsVideos: ClientProject[] = [
  {
    poster: "https://ik.imagekit.io/jz7julfyw/project/Chris.png",
    clientName: "Chris Percival",
    position: "Founder & CEO",
    company: "Percival Pallets",
    website: "https://percivalpallets.com/",
    rating: 5,
    projectDuration: "1+ year",
    location: "United States",
    myRole: "Data Systems & Analytics Manager",
    src: "https://ik.imagekit.io/jz7julfyw/project/1129.mp4",
    type: "video/mp4",
    about:
      "supplies new and recycled wooden pallets nationwide, offering durable and cost-effective solutions for logistics, storage, and shipping. Their services include pallet removal and eco-friendly recycling, supporting businesses of all sizes with reliable, fast delivery.",
      heading: "Data Solutions for Pallet Operations"
  },
  {
    poster: "https://ik.imagekit.io/jz7julfyw/project/Charvaiy.png",
    clientName: "Charvaiy Felix",
    position: "Lead Logistics & Supply Chain Analyst",
    rating: 5,
    projectDuration: "6 months",
    location: "United States",
    myRole: "Supply Chain Data Analytics Expert",
    src: "https://ik.imagekit.io/jz7julfyw/project/charvaiy.mp4",
    type: "video/mp4",
    about:
      "Worked as a Supply Chain Analyst, optimizing inventory management and logistics processes for improved efficiency and cost savings.",
      heading: "Data-Driven Supply Chain Improvement"
  },
  {
    poster: "https://ik.imagekit.io/jz7julfyw/project/Ola.png",
    clientName: "Olasunkanmi Olaitan",
    position: "Founder & CEO",
    company: "Big Champ Photography",
    website: "https://bigchampsphotographs.com/",
    rating: 5,
    location: "United States",
    projectDuration: "6 months",
    myRole: "Data Analytics Consultant",
    src: "https://ik.imagekit.io/jz7julfyw/project/ola.mp4",
    type: "video/mp4",
    about:
      "Provided personalized training in Data Analytics, covering Excel, SQL, Power BI, Statistics, and Python to enhance data-driven decision-making skills.",
      heading:"Data Analytics Consultancy"
  },
];

export const reviews: ReviewItem[] = [
  {
    name: "Letizia De Sario",
    location: "UK",
    rating: 5,
    role: "Intelligence Developer",
    review:
      "Muneeb Nasir DELIVERED top-notch work in data visualization, showcasing exceptional professionalism and keen attention to detail. His in-depth understanding, coupled with quick responsiveness and cooperation, made the collaboration seamless. Highly impressed with his ability to execute complex DAX for Power BI process optimization. I strongly recommend Muneeb! 🙌",
  },
  {
    name: "Shaikha",
    location: "Saudi Arabia",
    rating: 5,
    role: "Power BI Developer",
    review:
      "Muneeb did an amazing job with the dashboard! He provided two different designs and explained everything clearly, teaching me new things along the way. Communication was easy, and he was always very helpful. This isn't my first time working with him, but he continues to impress me every time. Highly recommended!",
  },
  {
    name: "Andy Parkin",
    location: "UK",
    rating: 5,
    role: "Power BI Developer",
    review:
      "An exceptional professional who is great to work with and certainly will be again in the near future. Muneeb is highly recommended!!!!!",
  },
  {
    name: "Ishaan",
    location: "Canada",
    rating: 5,
    role: "Power BI Developer",
    review:
      "I've put in many orders with Muneeb and he's always extremely professional & knowledgeable. Would recommend for anything Power BI related.",
  },
  {
    name: "Saeed",
    location: "USA",
    rating: 5,
    role: "Lead Data Analyst",
    review:
      "Muneeb did an outstanding job! He was professional, fast, and delivered exactly what I asked for. Highly recommended and I will definitely work with him again!",
  },
  {
    name: "Atkins Abraham",
    location: "Malaysia",
    rating: 5,
    role: "Senior Data Analyst",
    review:
      "Really happy to work with Muneeb again as he really goes above and beyond to meet my expectations. Thank you!",
  },
  {
    name: "Luke",
    location: "UK",
    rating: 5,
    role: "Financial Analyst",
    status: "Repeated client",
    review: "Excellent lessons from Muneeb! Highly recommend.",
  },
  {
    name: "Waziha Fareed",
    location: "USA",
    rating: 5,
    role: "Data Analytics Consultant",
    review:
      "Muneeb explained Power BI concepts clearly and made learning easy. He broke down complex ideas into simple steps and used examples that helped me understand visualizations and reporting. He was patient, approachable, and always ready to answer questions. Highly recommend!",
  },
  {
    name: "Josh",
    location: "Vietnam",
    rating: 5,
    role: "Data Analytics Consultant",
    review: "Muneeb is the most amazing tutor for Power BI you can ever find. Period!",
  },
  {
    name: "Muhammad Umair",
    location: "India",
    rating: 5,
    role: "Data Analytics Consultant",
    review:
      "Muneeb is a thorough professional with a deep understanding of his domain. Problem solver, polite, good listener, and communicator.",
  },
  {
    name: "Ahmad",
    location: "USA",
    rating: 5,
    role: "Business Intelligence Developer",
    review:
      "I am an HR Product Owner for an educational institute in Silicon Valley. I find Muneeb to be extremely knowledgeable and a true Subject Matter Expert when it comes to the Power BI tool. He has great communication skills and works with high integrity. I have done several gigs with him and will continue to do so in the future as well. Highly recommended!",
  },
  {
    name: "Max",
    location: "Germany",
    rating: 5,
    role: "Data Analytics Consultant",
    review:
      "Nasir is incredibly polite, insightful, helpful, patient, and a genuinely friendly person. Their guidance not only improved my understanding of Power BI but also made the learning process enjoyable and engaging. I highly appreciate their expertise and positive attitude throughout our sessions.",
  },
  {
    name: "Kashif Ahmad",
    location: "Saudi Arabia",
    rating: 5,
    role: "Data Integration Specialist",
    review:
      "Awesome work by Muneeb, I needed him in an emergency and he did very well by saving my time and getting what I expected. Would definitely follow him.",
  },
  {
    name: "Aaron Johnson",
    location: "USA",
    rating: 5,
    role: "Product Data Analyst",
    review:
      "Muneeb is just the person you want to work with you on a project. He clearly understands how metrics need to be presented and can provide you with various examples to meet your needs. I look forward to working with him on my new business venture.",
  },
  {
    name: "Opeyemi",
    location: "USA",
    rating: 5,
    role: "Data Analytics Consultant",
    review: "Muneeb is an excellent tutor, I highly recommend him.",
  },
  {
    name: "Mike Alfred",
    location: "Canada",
    rating: 5,
    role: "Supply Chain Analyst",
    review: "Prompt, knowledgeable and helpful.",
  },
  {
    name: "Mohammad Odeh",
    location: "Jordan",
    rating: 5,
    role: "Financial Analyst",
    review: "He was great and very communicative and helpful.",
  },
  {
    name: "Abrilo Wonde",
    location: "USA",
    rating: 5,
    role: "Data Analytics Consultant",
    review: "Very willing to cooperate and go beyond expectations.",
  },
  {
    name: "Victoria",
    location: "France",
    rating: 5,
    role: "Data Analytics Consultant",
    review: "Great work.",
  },
  {
    name: "Rachel",
    location: "USA",
    rating: 5,
    role: "Power BI Developer",
    review:
      "He is very committed and dedicated to his work. Additionally, he is very friendly, polite, and easy to communicate and work with. He respects time and consistently delivers his work on time.",
  },
  {
    name: "Usama",
    location: "UAE",
    rating: 5,
    role: "E-commerce Analytics Expert",
    review:
      "Great guy, definitely going to hire him again for my future projects. He has very good knowledge of data analytics and his cooperation is very good. I definitely recommend him.",
  },
  {
    name: "Shoaib Karmat",
    location: "Australia",
    rating: 5,
    role: "Supply Chain Analyst",
    review:
      "Muneeb was keen to understand the project deliverables and went above and beyond so the project was delivered on-time professionally. Five Star :)",
  },
  {
    name: "Frances Downey",
    location: "USA",
    rating: 5,
    role: "Lead Data Analyst",
    review:
      "Awesome to work with and awesome work! The video chats really help dial in my project. Highly recommend!",
  },
  {
    name: "Jazline",
    location: "USA",
    rating: 5,
    role: "Data Analyst",
    review: "Very helpful, goes above and beyond to help understand.",
  },
  {
    name: "Illakiya",
    location: "UK",
    rating: 5,
    role: "Data Analyst",
    review: "Amazing. Great service.",
  },
  {
    name: "Hima Panchel",
    location: "Canada",
    rating: 5,
    role: "Data Analyst",
    review:
      "Amazing work ethic, dedication to work and effort makes him a superstar at what Muneeb does!! If he encounters any difficulty, he will work with you to get it fixed and work through it in the most perfect way!! Delivered before time even though he was busy. Most recommended!!",
  },
  {
    name: "Antonio",
    location: "USA",
    rating: 5,
    role: "Lead Data Analyst",
    review: "Great understanding of complicated tasks, will use again.",
  },
  {
    name: "Rei Young",
    location: "Singapore",
    rating: 5,
    role: "Database Developer",
    review:
      "Muneeb provided excellent quality work as always and helped me point out errors I’d failed to see. As always, I highly recommend his service to everyone looking for a Power BI expert.",
  },
  {
    name: "Ryan",
    location: "USA",
    rating: 5,
    role: "Database Developer",
    review: "Well-spoken individual. Answered my questions about SQL. Very helpful.",
  },
];

