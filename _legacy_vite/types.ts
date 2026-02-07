
export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface Publication {
  title: string;
  journal: string;
  year: string;
  impact: string;
  type: 'SCI' | 'Scopus' | 'Conference';
}

export interface Client {
  name: string;
  logoUrl?: string;
  project: string;
}

export interface Patent {
  id: string;
  title: string;
  status: 'Granted' | 'Published';
  domain: string;
}

export interface Award {
  year: string;
  title: string;
  organization: string;
}
