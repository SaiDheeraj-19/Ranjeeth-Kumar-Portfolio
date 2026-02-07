
import { StatItem, Publication, Client, Patent, Award } from './types';

export const STATS: StatItem[] = [
  { label: 'Consultancy Value', value: '₹35L+', description: 'Funded industry & government projects' },
  { label: 'Research Output', value: '30+', description: 'Global publications in elite journals' },
  { label: 'Institutional Experience', value: '15+', description: 'Years of leadership & research' },
  { label: 'Innovations', value: '4', description: 'Granted & published AI patents' }
];

export const CLIENTS: Client[] = [
  { name: 'Rolls-Royce / HAL', project: 'Visual Inspection Systems' },
  { name: 'GE Healthcare', project: 'AI Medical Imaging Diagnostics' },
  { name: 'L&T Technology Services', project: 'Robotic Vision & Digital Twins' },
  { name: 'Schlumberger (Cameron)', project: 'Automated Document Intelligence' }
];

export const PUBLICATIONS: Publication[] = [
  { title: 'Advanced Deep Learning in Industrial Vision', journal: 'Elsevier Applied Intelligence', year: '2023', impact: 'SCI Indexed', type: 'SCI' },
  { title: 'Generative AI for Cognitive Health Monitoring', journal: 'IEEE Transactions', year: '2022', impact: 'High Citation', type: 'SCI' },
  { title: 'NLP Frameworks for Automated Documentation', journal: 'Springer Nature', year: '2022', impact: 'Scopus Indexed', type: 'Scopus' }
];

export const PATENTS: Patent[] = [
  { id: 'PAT-2023-01', title: 'Wearable Assistive Technology for the Visually Impaired', status: 'Granted', domain: 'Computer Vision' },
  { id: 'PAT-2022-04', title: 'AI-Powered Smart Device for Cognitive Monitoring', status: 'Published', domain: 'Edge AI' },
  { id: 'PAT-2021-09', title: 'Real-time Industrial Safety Monitoring System', status: 'Granted', domain: 'Deep Learning' }
];

export const AWARDS: Award[] = [
  { year: '2023', title: 'Top 100 International Distinguished Educators', organization: 'Global Education Summit' },
  { year: '2022', title: 'Jyestha Acharya Award', organization: 'Bharat Education Excellence' },
  { year: '2021', title: 'Faculty of the Year', organization: 'International Academic Council' }
];
