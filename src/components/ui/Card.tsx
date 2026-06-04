import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = "", hover = true }: CardProps) => {
  const baseStyles =
    "bg-white rounded-3xl p-6 border border-beige-100 transition-all duration-500";
  const hoverStyles = hover ? "hover:border-peach-200 hover:shadow-xl" : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
