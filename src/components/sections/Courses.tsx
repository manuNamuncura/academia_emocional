import { useEffect, useRef } from "react";
import Icon from "../ui/Icon";
import { courses } from "../../types/content";

const Courses = () => {
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
      id="cursos"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-cream-50 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-in">
          <span className="text-sage-400 font-semibold text-sm uppercase tracking-widest">
            Formación profesional
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-800 mt-4 mb-6 leading-tight">
            Nuestros Cursos
          </h2>
          <p className="text-warm-500 text-lg leading-relaxed">
            Programas diseñados para tu crecimiento profesional y personal, con
            certificación oficial y acompañamiento de calidad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-6 border border-beige-100 hover:border-peach-200 hover:shadow-xl transition-all duration-500 group fade-in"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-${index % 2 === 0 ? "peach" : "sage"}-100 flex items-center justify-center mb-5 group-hover:bg-${index % 2 === 0 ? "peach" : "sage"}-200 transition-colors`}
              >
                <Icon
                  name={course.icon}
                  className={`w-7 h-7 text-${index % 2 === 0 ? "peach" : "sage"}-400`}
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-warm-800 mb-3 leading-tight">
                {course.title}
              </h3>
              <p className="text-warm-500 text-sm leading-relaxed mb-4">
                {course.description}
              </p>
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                {course.isCertified && (
                  <span className="text-xs font-medium bg-sage-50 text-sage-500 px-2.5 py-1 rounded-full">
                    Certificado
                  </span>
                )}
                <span className="text-xs font-medium bg-cream-100 text-warm-500 px-2.5 py-1 rounded-full">
                  {course.modality}
                </span>
              </div>
              <a
                href="#contacto"
                className="text-peach-400 hover:text-peach-500 font-semibold text-sm flex items-center gap-1 group/link"
              >
                Más información
                <Icon
                  name="arrow-right"
                  className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
