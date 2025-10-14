// case-studies.ts
export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  overview: string;
  impact: string;
}

export const CASE_STUDIES: ReadonlyArray<CaseStudy> = [
  {
    id: 'cs-001',
    title: 'Netflix: Predictive Churn Modeling',
    industry: 'Streaming',
    overview:
      'Used viewing and billing data to predict which users were likely to cancel and trigger retention offers.',
    impact: 'Reduced churn by 15%',
  },
  {
    id: 'cs-002',
    title: 'Walmart: Demand Forecasting',
    industry: 'Retail',
    overview:
      'Built weekly sales forecasts to optimize store replenishment and reduce stockouts.',
    impact: 'Forecast error cut by 32%',
  },
  {
    id: 'cs-003',
    title: 'Uber: Surge Pricing Optimization',
    industry: 'Mobility',
    overview:
      'Modeled price elasticity to adjust surge pricing dynamically by demand region.',
    impact: 'Conversion improved by 6%',
  },
  {
    id: 'cs-004',
    title: 'Airbnb: Fraud Detection',
    industry: 'Travel',
    overview:
      'Analyzed booking and device data to detect fraudulent reservations in real time.',
    impact: 'Chargebacks reduced by 50%',
  },
  {
    id: 'cs-005',
    title: 'Amazon: Recommendation Engine',
    industry: 'E-commerce',
    overview:
      'Deployed item-to-item recommendations to personalize shopping experiences.',
    impact: '+12% average order value',
  },
  {
    id: 'cs-006',
    title: 'Spotify: Playlist Continuation',
    industry: 'Music',
    overview:
      'Predicted next-track preference using listener and song attributes.',
    impact: 'Session length increased by 14%',
  },
  {
    id: 'cs-007',
    title: 'Hospital Network: Readmission Prediction',
    industry: 'Healthcare',
    overview:
      'Built models to identify high-risk patients for post-discharge care.',
    impact: 'Readmissions reduced by 16%',
  },
  {
    id: 'cs-008',
    title: 'Telecom: Customer Retention',
    industry: 'Telecom',
    overview:
      'Ranked churn risk and triggered tailored save offers.',
    impact: 'Churn reduced by 32%',
  },
  {
    id: 'cs-009',
    title: 'Manufacturing: Predictive Maintenance',
    industry: 'Industrial',
    overview:
      'Used sensor data to predict equipment failure and optimize maintenance schedules.',
    impact: 'Downtime cut by 45%',
  },
  {
    id: 'cs-010',
    title: 'E-commerce: A/B Free Shipping Test',
    industry: 'Retail',
    overview:
      'Measured the effect of free-shipping thresholds on conversions and margins.',
    impact: '+0.5% conversion uplift',
  },
];
