import { Shield, Zap, Lock, Target, Phone, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";
export type Feature = {
  metrices: string;
  metricesLabel: string;
  title: string;
  description: string;
  color: string;
  icon: ReactNode;
};
export const features: Record<string, Feature[]> = {
  "1": [
    {
      metrices: "14 Days",
      metricesLabel: "Guarantee",
      title: "Risk-Free Guarantee",
      description:
        "Full refund if you're not satisfied within the first 14 days.",
      color: "#10b981",
      icon: <Shield />,
    },
    {
      metrices: "10 Days",
      metricesLabel: "Setup",
      title: "10-Days Setup",
      description:
        "Rapid Power BI deployment and onboarding tailored to your data sources.",
      color: "#3b82f6",
      icon: <Zap />,
    },
    {
      metrices: "99.9%",
      metricesLabel: "Secure",
      title: "Enterprise Security",
      description: "Your dashboards protected with role-based access.",
      color: "#06b6d4",
      icon: <Lock />,
    },
    {
      metrices: "∞",
      metricesLabel: "Revision",
      title: "Unlimited Revisions",
      description:
        "We refine visuals, KPIs, and layouts until your dashboards meet every need.",
      color: "#10b981",
      icon: <Target />,
    },
    {
      metrices: "24/7",
      metricesLabel: "Support",
      title: "Expert Support",
      description:
        "Direct access to a Power BI specialist for guidance and troubleshooting.",
      color: "#2a6aee",
      icon: <Phone />,
    },
    {
      metrices: "∞",
      metricesLabel: "Growth",
      title: "Scalable Growth",
      description:
        "Dashboards designed to expand seamlessly as your business and data evolve.",
      color: "#0795b6",
      icon: <TrendingUp />,
    },
  ],
  "2": [
    {
      metrices: "14 Days",
      metricesLabel: "Guarantee",
      title: "Risk-Free Guarantee",
      description:
        "Full refund if you're not satisfied within the first 14 days.",
      color: "#10b981",
      icon: <Shield />,
    },
    {
      metrices: "10 Days",
      metricesLabel: "Setup",
      title: "10-Days Setup",
      description:
        "Comprehensive data solutions from collection to actionable insights, driving smarter decisions.",
      color: "#3b82f6",
      icon: <Zap />,
    },
    {
      metrices: "Expert",
      metricesLabel: "Support",
      title: "Expert Support",
      description:
        "Direct access to data analysts for guidance, insights, and strategy support.",
      color: "#2a6aee",
      icon: <Phone />,
    },
    {
      metrices: "Secure",
      metricesLabel: "Advanced",
      title: "Enterprise Security",
      description:
        "Advanced data protection with role-based access and secure analytics workflows.",
      color: "#06b6d4",
      icon: <Lock />,
    },
    {
      metrices: "∞",
      metricesLabel: "Revisions",
      title: "Unlimited Revisions",
      description:
        "We iterate on dashboards, models, and reports until your analytics goals are fully met.",
      color: "#10b981",
      icon: <Target />,
    },
    {
      metrices: "Scale",
      metricesLabel: "Growth",
      title: "Scalable Growth",
      description:
        "Analytics solutions designed to grow seamlessly with your business and data complexity.",
      color: "#0795b6",
      icon: <TrendingUp />,
    },
  ],
  "3": [
    {
      metrices: "14 Days",
      metricesLabel: "Guarantee",
      title: "Risk-Free Guarantee",
      description:
        "Full refund if you're not satisfied within the first 14 days.",
      color: "#10b981",
      icon: <Shield />,
    },
    {
      metrices: "30 Days",
      metricesLabel: "Setup",
      title: "30-Days Setup",
      description:
        "Quick model setup using your historical data, from preparation to initial predictions.",
      color: "#3b82f6",
      icon: <Zap />,
    },
    {
      metrices: "Expert",
      metricesLabel: "Support",
      title: "Expert Support",
      description:
        "Direct access to a machine learning specialist for model guidance and improvements.",
      color: "#2a6aee",
      icon: <Phone />,
    },
    {
      metrices: "Secure",
      metricesLabel: "Enterprise",
      title: "Enterprise Security",
      description:
        "Your data and models handled with strict confidentiality and secure workflows.",
      color: "#06b6d4",
      icon: <Lock />,
    },
    {
      metrices: "∞",
      metricesLabel: "Revisions",
      title: "Unlimited Revisions",
      description:
        "We fine-tune features, algorithms, and outputs until predictions align with your goals.",
      color: "#10b981",
      icon: <Target />,
    },
    {
      metrices: "Scale",
      metricesLabel: "Growth",
      title: "Scalable Growth",
      description:
        "Models designed to retrain and scale as new data and business needs grow.",
      color: "#0795b6",
      icon: <TrendingUp />,
    },
  ],
  "4": [
    {
      metrices: "14 Days",
      metricesLabel: "Guarantee",
      title: "Risk-Free Guarantee",
      description:
        "Full refund if you're not satisfied within the first 14 days.",
      color: "#10b981",
      icon: <Shield />,
    },
    {
      metrices: "1 Week",
      metricesLabel: "Setup",
      title: "1-Week Setup",
      description:
        "Fast analysis setup to explore patterns, trends, and anomalies in your data.",
      color: "#3b82f6",
      icon: <Zap />,
    },
    {
      metrices: "Direct",
      metricesLabel: "Support",
      title: "Expert Support",
      description:
        "Work directly with a data analyst to interpret results and key findings.",
      color: "#2a6aee",
      icon: <Phone />,
    },
    {
      metrices: "Secure",
      metricesLabel: "Enterprise",
      title: "Enterprise Security",
      description:
        "Your datasets are analyzed in a secure and controlled environment.",
      color: "#06b6d4",
      icon: <Lock />,
    },
    {
      metrices: "∞",
      metricesLabel: "Revisions",
      title: "Unlimited Revisions",
      description:
        "We refine insights, metrics, and summaries until everything is clear and actionable.",
      color: "#10b981",
      icon: <Target />,
    },
    {
      metrices: "Extend",
      metricesLabel: "Growth",
      title: "Scalable Growth",
      description:
        "Analysis frameworks that can be extended as your datasets expand.",
      color: "#0795b6",
      icon: <TrendingUp />,
    },
  ],
  "5": [
    {
      metrices: "14 Days",
      metricesLabel: "Guarantee",
      title: "Risk-Free Guarantee",
      description:
        "Full refund if you're not satisfied within the first 14 days.",
      color: "#10b981",
      icon: <Shield />,
    },
    {
      metrices: "10 Days",
      metricesLabel: "Setup",
      title: "10-Days Setup",
      description:
        "Rapid Tableau deployment and onboarding tailored to your data sources.",
      color: "#3b82f6",
      icon: <Zap />,
    },
    {
      metrices: "99.9%",
      metricesLabel: "Secure",
      title: "Enterprise Security",
      description: "Your dashboards protected with role-based access.",
      color: "#06b6d4",
      icon: <Lock />,
    },
    {
      metrices: "∞",
      metricesLabel: "Revision",
      title: "Unlimited Revisions",
      description:
        "We refine visuals, KPIs, and layouts until your dashboards meet every need.",
      color: "#10b981",
      icon: <Target />,
    },
    {
      metrices: "24/7",
      metricesLabel: "Support",
      title: "Expert Support",
      description:
        "Direct access to a Tableau specialist for guidance and troubleshooting.",
      color: "#2a6aee",
      icon: <Phone />,
    },
    {
      metrices: "∞",
      metricesLabel: "Growth",
      title: "Scalable Growth",
      description:
        "Dashboards designed to expand seamlessly as your business and data evolve.",
      color: "#0795b6",
      icon: <TrendingUp />,
    },
  ],
  "6": [
    {
      metrices: "14 Days",
      metricesLabel: "Guarantee",
      title: "Risk-Free Guarantee",
      description:
        "Full refund if you're not satisfied within the first 14 days.",
      color: "#10b981",
      icon: <Shield />,
    },
    {
      metrices: "1 Week",
      metricesLabel: "Setup",
      title: "1-Week Setup",
      description:
        "Quick onboarding with a tailored training plan based on your skill level and goals.",
      color: "#3b82f6",
      icon: <Zap />,
    },
    {
      metrices: "Direct",
      metricesLabel: "Mentoring",
      title: "Expert Support",
      description:
        "Direct mentoring and Q&A support throughout the training program.",
      color: "#2a6aee",
      icon: <Phone />,
    },
    {
      metrices: "Secure",
      metricesLabel: "Training",
      title: "Enterprise Security",
      description:
        "Training materials and shared datasets handled with full confidentiality.",
      color: "#06b6d4",
      icon: <Lock />,
    },
    {
      metrices: "∞",
      metricesLabel: "Revisions",
      title: "Unlimited Revisions",
      description:
        "We adjust topics, pace, and examples until the learning is effective and clear.",
      color: "#10b981",
      icon: <Target />,
    },
    {
      metrices: "Advanced",
      metricesLabel: "Skills",
      title: "Scalable Growth",
      description:
        "Training designed to grow from fundamentals to advanced analytics and BI skills.",
      color: "#0795b6",
      icon: <TrendingUp />,
    },
  ],
};
