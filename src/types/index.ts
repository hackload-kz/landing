export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface CriterionType {
  name: string;
  description: string;
  icon: string;
  weight: number;
}

export interface PrincipleType {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export interface Partner {
  name: string;
  logo: string;
  link: string;
  type: string;
  description: {
    ru: string;
    kk: string;
  };
}