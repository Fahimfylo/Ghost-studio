export interface ContactFormData {
  fullName: string;
  email: string;
  companyName?: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

export interface ContactInfo {
  email: string;
  timezone: string;
  responseTime: string;
}
