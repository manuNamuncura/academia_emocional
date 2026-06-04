import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "dark";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  target?: string;
  rel?: string;
}

const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  icon,
  target,
  rel,
}: ButtonProps) => {
  const baseStyles =
    "font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-white text-warm-800 shadow-lg hover:shadow-xl hover:bg-cream-100",
    secondary:
      "border-2 border-white/40 text-white hover:bg-white hover:text-warm-800 backdrop-blur-sm",
    outline:
      "border-2 border-warm-800 text-warm-800 hover:bg-warm-800 hover:text-white",
    dark: "bg-warm-800 hover:bg-warm-700 text-white shadow-lg hover:shadow-xl",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} target={target} rel={rel}>
        {icon && icon}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
