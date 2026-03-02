export { default as logo } from "@/assets/images/logo-white.png";
import type { ReactNode } from "react";
import { SiFiverr,SiLinkedin } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

interface Service {
  label: string;
  link: string;
}

interface tools{
    label:string
}

interface FooterLink{
  label:string,
  link:string
}

interface FooterSection{
  title:string,
  links: FooterLink[]
}

interface Contact{
    label:string,
    action:string,
    icon:ReactNode
    link: string,
}

interface socialLinks{
    label:string,
    link:string,
    action?:string,
    icon:ReactNode
}


export const services: Service[] = [
  {
    link: "/end-to-end-analytics",
    label: "End-to-End Data Analytics Solutions",
  },
  {
    link: "/powerbi-dashboards",
    label: "Power BI Dashboards & Reports",
  },
  {
    link: "/tableau-dashboards",
    label: "Tableau Dashboards & Reports",
  },
  
  {
    link: "/corporate-trainings",
    label: "Data analytics Training",
  },

  {
    link: "/predictive-analytics",
    label: "Predictive Analytics (Python & ML)",
  },
  {
    link: "/statistical-analysis",
    label: "Statistical & Exploratory Data Analysis",
  },
];

export const Tools:tools[]=[
    {
        label:"Power BI"
    },
    {
        label:"Python"
    },
    {
        label:"Tableau"
    },
    {
        label:"SQL"
    },
    {
        label:"Excel"
    },
    {
        label:"Google Sheets"
    }
]

export const footerSection:FooterSection[]=[
  {
    title: "Pages",
    links:[
      {
        label:"Home",
        link:"/"
      },
      {
        label:"Portfolio",
        link:"/caseStudy"
      },
      {
        label:"Blogs",
        link:"/blogs"
      },
      {
        label:"Testimonials",
        link:"/testimonials"
      },
      {
        label:"Contact Us",
        link:"/contact"
      }
    ]
  }
]

export const SocialLinks:socialLinks[]=[
    {
        link:"https://www.linkedin.com/in/muhammadmuneebnasir/",
        label:"LinkedIn",
        icon:<SiLinkedin size={25}/>
    },
    {
      link:"https://www.fiverr.com/muneebnasir496",
      label:"Fiverr",
      icon:<SiFiverr size={50}/>
    }

]

export const Contacts:Contact[]=[
  {
    link: "923470049650",
    label:"Contact",
    action:"tel:+923470049650",
    icon:<IoCallSharp size={20}/>
  },
  {
    label:"Email",
    link: "info@muneebanalytics.com",
    action:"mailto:info@muneebanalytics.com",
    icon:<IoMdMail size={20}/>
  }
]
