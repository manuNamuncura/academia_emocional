import { useEffect, useState } from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pequeño delay para activar la animación
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="loader"
      className="fixed inset-0 z-9999 bg-warm-800 flex flex-col items-center justify-center transition-opacity duration-800"
    >
      <div
        className={`font-serif text-[clamp(2.5rem,8vw,5rem)] font-normal text-cream-100 tracking-[0.08em] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-7.5"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        Miriam
      </div>
      <div
        className={`font-serif text-[clamp(2.5rem,8vw,5rem)] font-bold text-peach-300 tracking-[0.04em] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-7.5"
        }`}
        style={{ transitionDelay: "700ms" }}
      >
        Sandoval
      </div>
    </div>
  );
};

export default Loader;
