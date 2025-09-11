export { default as logo } from "@/assets/images/logo.png";
import type { ReactNode } from "react";
import { Linkedin, Mail } from "lucide-react";

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
    link: "/services/tableau-dashboards",
    label: "Automated Dashboards in Tableau",
  },
  {
    link: "/services/powerbi-dashboards",
    label: "Automated Dashboards in Power BI",
  },
  {
    link: "/services/corporate-trainings",
    label: "Corporate Trainings",
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
    title: "Naviagtion",
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
        icon:<Linkedin/>
    },
    {
      link:"",
      label:"E-mail",
      icon:<Mail/>
    }

]
