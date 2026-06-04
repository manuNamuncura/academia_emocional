import {
  HeartHandshake,
  Hand,
  Flower2,
  GitBranch,
  Zap,
  Sun,
  Brain,
  MessageCircle,
  ShieldCheck,
  FileCheck,
  Building2,
  Award,
  GraduationCap,
  BadgeCheck,
  Monitor,
  HandHeart,
  Sprout,
  Star,
  Sparkles,
  Menu,
  X,
  Mail,
  LifeBuoy,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  BookUser,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "heart-handshake": HeartHandshake,
  hand: Hand,
  "flower-2": Flower2,
  "git-branch": GitBranch,
  zap: Zap,
  sun: Sun,
  brain: Brain,
  "message-circle": MessageCircle,
  "shield-check": ShieldCheck,
  "file-check": FileCheck,
  "building-2": Building2,
  award: Award,
  "graduation-cap": GraduationCap,
  "badge-check": BadgeCheck,
  monitor: Monitor,
  "hand-heart": HandHeart,
  sprout: Sprout,
  star: Star,
  sparkles: Sparkles,
  menu: Menu,
  x: X,
  facebook: BookUser,
  instagram: LifeBuoy,
  "external-link": ExternalLink,
  "arrow-right": ArrowRight,
  "check-circle": CheckCircle,
  'users': Users, 
  'trending-up': TrendingUp,
  mail: Mail,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon = ({ name, className = "", size = 24 }: IconProps) => {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <LucideIcon className={className} size={size} />;
};

export default Icon;
