import { Mail,CalendarDays } from "lucide-react"
import type { ReactNode } from "react";
import { SiFiverr } from "react-icons/si"
 
 export interface ContactOption {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

export const contactOptions: ContactOption[] = [
  {
    id: "email",
    title: "Email Support",
    description: "Reach out to us directly by email — we respond in real time.",
    icon: <Mail className="h-5 w-5"/>,
    link: "mailto:hello@example.com",
  },
  {
    id: "calendly",
    title: "Schedule a Video Call",
    description: "Book a one-on-one meeting via Calendly for personalized support.",
    icon: <CalendarDays className="h-5 w-5"/>,
    link: "https://calendly.com/yourusername/meeting",
  },
  {
    id: "fiverr",
    title: "Hire Us on Fiverr",
    description: "Get professional help through our Fiverr services — fast and reliable.",
    icon: <SiFiverr className="h-7 w-7"/>,
    link: "https://www.fiverr.com/yourusername",
  },
];
