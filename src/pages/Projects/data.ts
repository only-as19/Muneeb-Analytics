// case-studies.ts
export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  category: string;
  overview: string;
  impact: string;
  image: string;
  slug?: string; // Optional: useful for routing
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-001',
    title: 'Netflix: Predictive Churn Modeling',
    industry: 'Streaming',
    category: 'Machine Learning',
    overview:
      'Used viewing and billing data to predict which users were likely to cancel and trigger retention offers.',
    impact: 'Reduced churn by 15%',
    image: 'https://images.unsplash.com/photo-1601924638867-3ec3a5f90300?auto=format&fit=crop&w=800&q=80',
    slug: 'netflix-predictive-churn-modeling',
  },
  {
    id: 'cs-002',
    title: 'Walmart: Demand Forecasting',
    industry: 'Retail',
    category: 'Predictive Analytics',
    overview:
      'Built weekly sales forecasts to optimize store replenishment and reduce stockouts.',
    impact: 'Forecast error cut by 32%',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80',
    slug: 'walmart-demand-forecasting',
  },
  {
    id: 'cs-003',
    title: 'Uber: Surge Pricing Optimization',
    industry: 'Mobility',
    category: 'Dynamic Pricing',
    overview:
      'Modeled price elasticity to adjust surge pricing dynamically by demand region.',
    impact: 'Conversion improved by 6%',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    slug: 'uber-surge-pricing-optimization',
  },
  {
    id: 'cs-004',
    title: 'Airbnb: Fraud Detection',
    industry: 'Travel',
    category: 'Machine Learning',
    overview:
      'Analyzed booking and device data to detect fraudulent reservations in real time.',
    impact: 'Chargebacks reduced by 50%',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
    slug: 'airbnb-fraud-detection',
  },
  {
    id: 'cs-005',
    title: 'Amazon: Recommendation Engine',
    industry: 'E-commerce',
    category: 'Recommendation Systems',
    overview:
      'Deployed item-to-item recommendations to personalize shopping experiences.',
    impact: '+12% average order value',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    slug: 'amazon-recommendation-engine',
  },
  {
    id: 'cs-006',
    title: 'Spotify: Playlist Continuation',
    industry: 'Music',
    category: 'Recommendation Systems',
    overview:
      'Predicted next-track preference using listener and song attributes.',
    impact: 'Session length increased by 14%',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    slug: 'spotify-playlist-continuation',
  },
  {
    id: 'cs-007',
    title: 'Hospital Network: Readmission Prediction',
    industry: 'Healthcare',
    category: 'Predictive Analytics',
    overview:
      'Built models to identify high-risk patients for post-discharge care.',
    impact: 'Readmissions reduced by 16%',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    slug: 'hospital-readmission-prediction',
  },
  {
    id: 'cs-008',
    title: 'Telecom: Customer Retention',
    industry: 'Telecom',
    category: 'Machine Learning',
    overview:
      'Ranked churn risk and triggered tailored save offers.',
    impact: 'Churn reduced by 32%',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    slug: 'telecom-customer-retention',
  },
  {
    id: 'cs-009',
    title: 'Manufacturing: Predictive Maintenance',
    industry: 'Industrial',
    category: 'Predictive Analytics',
    overview:
      'Used sensor data to predict equipment failure and optimize maintenance schedules.',
    impact: 'Downtime cut by 45%',
    image: 'https://images.unsplash.com/photo-1581093588401-22aa94ff94e7?auto=format&fit=crop&w=800&q=80',
    slug: 'manufacturing-predictive-maintenance',
  },
  {
    id: 'cs-010',
    title: 'E-commerce: A/B Free Shipping Test',
    industry: 'Retail',
    category: 'A/B Testing',
    overview:
      'Measured the effect of free-shipping thresholds on conversions and margins.',
    impact: '+0.5% conversion uplift',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    slug: 'ecommerce-ab-free-shipping-test',
  },
];