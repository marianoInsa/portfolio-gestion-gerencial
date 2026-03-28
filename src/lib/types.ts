export interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  role: string;
  bio: string;
  skills: string[];
  avatarPath: string;
}

export interface Evidence {
  label: string;
  href: string;
  type: 'document' | 'presentation' | 'video' | 'other';
}

export interface Desafio {
  slug: string;
  code: string;
  title: string;
  problem: string;
  solution: string;
  tools: string[];
  evidences: Evidence[];
  reflection: string;
}
