import { useEffect, useRef } from "react";
import Icon from "../ui/Icon";

const Cta = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-br from-peach-100 via-cream-100 to-sage-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-peach-200 rounded-full blur-2xl float-anim"></div>
        <div
          className="absolute bottom-10 right-1/4 w-56 h-56 bg-sage-200 rounded-full blur-3xl float-anim"
          style={{ animationDelay: "-2s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative fade-in">
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-beige-200 rounded-full px-5 py-2 mb-8">
          <Icon name="sparkles" className="w-4 h-4 text-peach-400" />
          <span className="text-sm font-medium text-warm-600">
            Comienza tu transformación hoy
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-800 mb-6 leading-tight">
          ¿Lista para dar el siguiente paso en tu crecimiento?
        </h2>
        <p className="text-warm-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Invertir en tu bienestar emocional es la decisión más importante que
          puedes tomar. Te acompañamos en cada paso del camino.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="bg-warm-800 hover:bg-warm-700 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Solicitar Información
          </a>
          <a
            href="https://wa.me/5491111111111?message=Hola%20Miriam%2C%20me%20gustaría%20solicitar%20información%20sobre%20los%20cursos"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-warm-800 text-warm-800 hover:bg-warm-800 hover:text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
