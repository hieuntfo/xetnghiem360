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

export type BodySystem = 'Gan' | 'Thận' | 'Tim mạch' | 'Nội tiết tố' | 'Máu' | 'Tiêu hoá';

export interface ReferenceRange {
  gender: 'male' | 'female' | 'any';
  ageRange: [number, number]; // [min, max], use [0, 150] for any age
  range: [number, number]; // [min, max]
  unit: string;
  warningRange?: [number, number]; // Optional warning range between normal and danger
}

export interface MedicalIndex {
  id: string; // e.g., 'alt'
  name: string; // Alanine Aminotransferase
  abbreviation: string; // ALT
  definition: string;
  bodySystems: BodySystem[];
  referenceRanges: ReferenceRange[];
  causes: {
    high: string[];
    low: string[];
  };
  recommendations: {
    diet: string[];
    lifestyle: string[];
    followUp: string;
  };
  linkedPackage?: {
    name: string;
    description: string;
    id: string; // or a URL
  };
}
