import { useEffect, useRef } from "react";
import Icon from "../ui/Icon";
import { certifications } from "../../types/content";

const Certifications = () => {
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
      id="certificaciones"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-warm-800 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-peach-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <span className="text-sage-300 font-semibold text-sm uppercase tracking-widest">
            Respaldo institucional
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            Capacitaciones Certificadas
          </h2>
          <p className="text-warm-400 text-lg leading-relaxed">
            Todos los cursos cuentan con certificación y respaldo institucional,
            avalados por Grupos Sevilla según Resolución 2019.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${cert.gradient} mx-auto mb-5 flex items-center justify-center`}
              >
                <Icon name={cert.icon} className="w-9 h-9 text-white" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-warm-400 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 fade-in">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-peach-300/20 flex items-center justify-center flex-shrink-0">
              <Icon name="badge-check" className="w-6 h-6 text-peach-300" />
            </div>
            <div>
              <p className="font-serif text-white font-semibold">
                Tu formación tiene respaldo
              </p>
              <p className="text-warm-400 text-sm">
                Certificados emitidos con número de registro y firma
                institucional
              </p>
            </div>
          </div>
          <a
            href="#contacto"
            className="bg-white text-warm-800 font-semibold px-8 py-3 rounded-full hover:bg-cream-100 transition-all duration-300 text-sm whitespace-nowrap"
          >
            Solicitar certificación
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
