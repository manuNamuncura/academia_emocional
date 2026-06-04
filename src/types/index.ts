export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  modality: string;
  isCertified: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  initial: string;
  course: string;
  text: string;
  rating: number;
  bgColor: string;
}

export interface Certification {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  iconColor: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}
