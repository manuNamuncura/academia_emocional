import { useState, useEffect, useRef } from "react";
import Icon from "../ui/Icon";

const banners = [
  {
    id: 1,
    title: "Acompañamiento Terapéutico",
    subtitle: "Formación profesional certificada",
    description:
      "Aprendé las herramientas para acompañar procesos terapéuticos con excelencia.",
    image: "https://picsum.photos/seed/acompanamiento/1200/500",
    buttonText: "Ver curso",
    link: "#cursos",
    tag: "Nuevo curso",
  },
  {
    id: 2,
    title: "Flores de Bach",
    subtitle: "Terapia floral para el equilibrio emocional",
    description: "Descubrí el poder sanador de las esencias florales.",
    image: "https://picsum.photos/seed/flores-bach/1200/500",
    buttonText: "Ver curso",
    link: "#cursos",
    tag: "40% OFF",
  },
  {
    id: 3,
    title: "Constelaciones Familiares",
    subtitle: "Sanación profunda y transformación",
    description:
      "Liberá patrones familiares y encontrá tu lugar en el sistema.",
    image: "https://picsum.photos/seed/constelaciones/1200/500",
    buttonText: "Ver curso",
    link: "#cursos",
    tag: "Plazas limitadas",
  },
  {
    id: 4,
    title: "Tapping EFT",
    subtitle: "Liberación emocional con acupresión",
    description:
      "Técnica efectiva para reducir estrés, ansiedad y bloqueos emocionales.",
    image: "https://picsum.photos/seed/tapping/1200/500",
    buttonText: "Ver curso",
    link: "#cursos",
    tag: "Online",
  },
  {
    id: 5,
    title: "Masajes Profesionales",
    subtitle: "Formación en técnicas de masoterapia",
    description:
      "Convertite en profesional del masaje terapéutico y relajación.",
    image: "https://picsum.photos/seed/masajes/1200/500",
    buttonText: "Ver curso",
    link: "#cursos",
    tag: "Presencial",
  },
];

const AdvertisingSimple = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, currentIndex]);

  // Pausar auto-play al hacer hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const fadeElements = sectionRef.current?.querySelectorAll(".fade-in");
    fadeElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const currentBanner = banners[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-cream-100 via-beige-50 to-cream-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-peach-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-sage-200 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 fade-in">
          <span className="text-peach-500 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-white/50 backdrop-blur-sm px-3 sm:px-4 py-1 rounded-full inline-block mb-3 sm:mb-4">
            Promociones y Novedades
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-warm-800 mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
            Descubrí Nuestros Cursos
          </h2>
          <p className="text-warm-500 text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Formaciones certificadas para potenciar tu desarrollo profesional y
            personal
          </p>
        </div>

        <div
          className="fade-in relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Banner principal - Altura responsiva: más alto en móvil */}
          <div className="relative h-[670px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">
            <img
              src={currentBanner.image}
              alt={currentBanner.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />

            {/* Overlay más oscuro en móvil para mejor legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>

            {/* Contenido - Mejor posicionado para móvil */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 sm:p-6 md:p-8 lg:p-10">
              {/* Tag */}
              {currentBanner.tag && (
                <div className="inline-block mb-3 sm:mb-4">
                  <span className="bg-peach-400 text-warm-800 text-xs sm:text-sm font-semibold px-2.5 sm:px-3 py-1 rounded-full inline-block shadow-lg">
                    {currentBanner.tag}
                  </span>
                </div>
              )}

              {/* Título */}
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif mb-2 sm:mb-3 max-w-2xl">
                {currentBanner.title}
              </h3>

              {/* Subtítulo */}
              <p className="text-peach-200 text-xs sm:text-sm md:text-base font-medium mb-2 sm:mb-3 max-w-xl">
                {currentBanner.subtitle}
              </p>

              {/* Descripción - más compacta en móvil */}
              <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-md mb-4 sm:mb-5 md:mb-6 line-clamp-2 sm:line-clamp-none">
                {currentBanner.description}
              </p>

              {/* Botón CTA - más grande en móvil para fácil tap */}
              <a
                href={currentBanner.link}
                className="inline-flex items-center justify-center gap-2 bg-white text-warm-800 font-semibold px-5 sm:px-6 md:px-8 py-3 sm:py-2.5 md:py-3 rounded-full hover:bg-peach-100 transition-all duration-300 shadow-lg hover:shadow-xl w-fit text-sm sm:text-base group/btn"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(currentBanner.link);
                  if (target) {
                    const offset = 80;
                    const targetPosition =
                      target.getBoundingClientRect().top +
                      window.scrollY -
                      offset;
                    window.scrollTo({
                      top: targetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {currentBanner.buttonText}
                <Icon
                  name="arrow-right"
                  className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Botones de navegación - más grandes y accesibles en móvil */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Anterior"
          >
            <svg
              className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-warm-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Siguiente"
          >
            <svg
              className="w-5 h-5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-warm-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicadores/Dots - más grandes en móvil */}
          <div className="flex justify-center gap-2 sm:gap-2.5 mt-4 sm:mt-5 md:mt-6">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? "w-8 sm:w-6 md:w-8 lg:w-10 h-1.5 sm:h-1.5 md:h-2 bg-peach-400"
                    : "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-beige-400 hover:bg-beige-500"
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Estilos adicionales para mejor responsive */}
      <style>{`
        @media (max-width: 640px) {
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      `}</style>
    </section>
  );
};

export default AdvertisingSimple;
