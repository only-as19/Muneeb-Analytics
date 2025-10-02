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

interface socialLinks{
    label:string,
    link:string,
    icon:ReactNode
}


export const services: Service[] = [
  {
    link: "/services/end-to-end-analytics",
    label: "End-to-End Data Analytics Solutions",
  },
  {
    link: "/services/powerbi-dashboards",
    label: "Power BI Dashboards & Reports",
  },
  {
    link: "/services/tableau-dashboards",
    label: "Tableau Dashboards & Reports",
  },
  
  {
    link: "/services/corporate-trainings",
    label: "Data analytics Training",
  },

  {
    link: "/services/predictive-analytics",
    label: "Predictive Analytics (Python & ML)",
  },
  {
    link: "/services/statistical-analysis",
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
        link:"/porfolio"
      },
      {
        label:"Blogs",
        link:"/blogs"
      }
    ]
  }
]

export const SocialLinks:socialLinks[]=[
    {
        link:"",
        label:"LinkedIn",
        icon:<SiLinkedin size={25}/>
    },
    {
      link:"",
      label:"Fiverr",
      icon:<SiFiverr size={50}/>
    }

]

export const Contacts:socialLinks[]=[
  {
    link:"12345678910",
    label:"Contact",
    icon:<IoCallSharp size={20}/>
  },
  {
    link:"info@muneebanalytics.com",
    label:"Email",
    icon:<IoMdMail size={20}/>
  }
]
