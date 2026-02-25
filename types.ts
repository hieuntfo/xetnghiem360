export interface UserSegment {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  recommendedPackage: string;
}

export interface MetricData {
  month: string;
  value: number;
  normalMax: number;
  normalMin: number;
}

export type MediaType = 'image' | 'video' | 'audio';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarColor: string;
}