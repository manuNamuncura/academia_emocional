import type {
  Course,
  Testimonial,
  Certification,
  Benefit,
  NavLink,
} from "./index";

export const navLinks: NavLink[] = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre Miriam", href: "#sobre-miriam" },
  { name: "Cursos", href: "#cursos" },
  { name: "Certificaciones", href: "#certificaciones" },
  { name: "Contacto", href: "#contacto" },
];

export const courses: Course[] = [
  {
    id: "acompanamiento",
    title: "Acompañamiento Terapéutico",
    description:
      "Formación integral para el acompañamiento emocional y terapéutico profesional.",
    icon: "heart-handshake",
    modality: "Presencial / Online",
    isCertified: true,
  },
  {
    id: "masajes",
    title: "Masajes Profesionales",
    description:
      "Técnicas profesionales de masaje terapéutico y relajación integral.",
    icon: "hand",
    modality: "Presencial",
    isCertified: true,
  },
  {
    id: "flores",
    title: "Flores de Bach",
    description:
      "Terapia floral para el equilibrio emocional y el bienestar holístico.",
    icon: "flower-2",
    modality: "Presencial / Online",
    isCertified: true,
  },
  {
    id: "constelaciones",
    title: "Constelaciones",
    description:
      "Constelaciones familiares y sistémicas para la sanación profunda.",
    icon: "git-branch",
    modality: "Presencial",
    isCertified: true,
  },
  {
    id: "tapping",
    title: "Tapping EFT",
    description:
      "Técnicas de liberación emocional mediante acupresión para el bienestar.",
    icon: "zap",
    modality: "Online",
    isCertified: true,
  },
  {
    id: "psicologia-positiva",
    title: "Psicología Positiva",
    description:
      "Herramientas científicas para cultivar la felicidad y el bienestar.",
    icon: "sun",
    modality: "Presencial / Online",
    isCertified: true,
  },
  {
    id: "psicologia-social",
    title: "Técnicas Asistenciales en Consultoría de Psicología Social",
    description:
      "Herramientas prácticas para la intervención en psicología social.",
    icon: "brain",
    modality: "Presencial / Online",
    isCertified: true,
  },
  {
    id: "coaching",
    title: "Técnicas Asistenciales en Consultoría de Coaching Ontológico",
    description:
      "Coaching ontológico aplicado al desarrollo personal y organizacional.",
    icon: "message-circle",
    modality: "Presencial / Online",
    isCertified: true,
  },
];

export const certifications: Certification[] = [
  {
    id: "oficial",
    title: "Certificación Oficial",
    description: "Respaldo institucional con validez oficial",
    icon: "shield-check",
    gradient: "from-peach-300 to-peach-400",
  },
  {
    id: "grupos-sevilla",
    title: "Grupos Sevilla",
    description: "Avalado según Resolución 2019",
    icon: "file-check",
    gradient: "from-sage-300 to-sage-400",
  },
  {
    id: "instituciones",
    title: "Instituciones Reconocidas",
    description: "FASTA, FEPS, Kennedy, EDIS",
    icon: "building-2",
    gradient: "from-peach-300 to-sage-300",
  },
  {
    id: "excelencia",
    title: "Excelencia Académica",
    description: "Estándares de calidad en cada programa",
    icon: "award",
    gradient: "from-sage-300 to-peach-300",
  },
];

export const benefits: Benefit[] = [
  {
    id: "formacion",
    title: "Formación profesional",
    description:
      "Programas actualizados con enfoque práctico y teórico, diseñados para tu desarrollo profesional.",
    icon: "graduation-cap",
    bgColor: "peach",
    iconColor: "peach",
  },
  {
    id: "certificacion",
    title: "Certificación avalada",
    description:
      "Títulos con respaldo institucional y validez reconocida por Grupos Sevilla.",
    icon: "badge-check",
    bgColor: "sage",
    iconColor: "sage",
  },
  {
    id: "modalidad",
    title: "Modalidad presencial y online",
    description:
      "Flexibilidad para que elijas la forma de aprendizaje que mejor se adapte a tu ritmo de vida.",
    icon: "monitor",
    bgColor: "peach",
    iconColor: "peach",
  },
  {
    id: "acompanamiento",
    title: "Acompañamiento personalizado",
    description:
      "Atención individualizada para garantizar tu aprendizaje y bienestar durante todo el proceso.",
    icon: "hand-heart",
    bgColor: "sage",
    iconColor: "sage",
  },
  {
    id: "desarrollo",
    title: "Desarrollo humano integral",
    description:
      "Enfoque holístico que integra cuerpo, mente y emociones para un crecimiento completo.",
    icon: "sprout",
    bgColor: "peach",
    iconColor: "peach",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "laura",
    name: "Laura R.",
    initial: "L.R.",
    course: "Acompañamiento Terapéutico",
    text: "La formación en Acompañamiento Terapéutico cambió mi perspectiva profesional. Miriam es una docente excepcional que transmite pasión y conocimiento con calidez humana.",
    rating: 5,
    bgColor: "peach",
  },
  {
    id: "maria",
    name: "María G.",
    initial: "M.G.",
    course: "Flores de Bach",
    text: "El curso de Flores de Bach superó mis expectativas. La modalidad online me permitió capacitarme desde mi ciudad, con un seguimiento personalizado increíble.",
    rating: 5,
    bgColor: "sage",
  },
  {
    id: "carolina",
    name: "Carolina P.",
    initial: "C.P.",
    course: "Constelaciones Familiares",
    text: "Gracias al curso de Constelaciones Familiares pude sanar vínculos y hoy acompañó a otros en su proceso. La contención y profesionalismo de Miriam son únicos.",
    rating: 5,
    bgColor: "peach",
  },
];

export const contactInfo = {
  whatsapp: "5492975415642",
  email: "info@academiaemocional.com",
  instagram: "@academiaemocional",
  instagramUrl: "https://instagram.com/academiaemocional",
};
