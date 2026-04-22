export type MemberRole =
  | 'Desarrollador'
  | 'Disenador'
  | 'Analista'
  | 'Tester'
  | 'Lider de Proyecto';

export interface Member {
  id: string;
  fullName: string;
  firstName: string;
  avatarPath: string;
  cartoonPath: string;
  roles: MemberRole[];
  strengths: string[];
  interests: string[];
  bio: string;
  leaderType: string;
  leaderLabels: string[];
  leaderDescription: string;
}

export interface Evidence {
  type: 'documento' | 'presentacion' | 'video' | 'enlace' | 'imagen';
  label: string;
  url: string;
}

export interface Challenge {
  id: string;
  title: string;
  number: number;
  period: string;
  problem: string;
  solution: string;
  teamReflection: string;
  tools: string[];
  evidences: Evidence[];
  coverImage?: string;
  tags: string[];
}

export interface RPAEntry {
  memberId: string;
  conceptMapUrl: string;
  uploadedAt: string;
  description?: string;
}

export interface TPIProject {
  title: string;
  description: string;
  period: string;
  coverImage?: string;
  evidences: Evidence[];
  reflections: string;
  isPublished: boolean;
}
