import { useEffect, useRef } from "react";
import Icon from "../ui/Icon";
import { testimonials } from "../../types/content";

const Testimonials = () => {
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
      className="py-24 lg:py-32 bg-cream-50 relative overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-72 h-72 bg-sage-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-in">
          <span className="text-sage-400 font-semibold text-sm uppercase tracking-widest">
            Testimonios
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-800 mt-4 mb-6 leading-tight">
            Lo que dicen nuestros alumnos
          </h2>
          <p className="text-warm-500 text-lg leading-relaxed">
            Experiencias reales de quienes transformaron su bienestar con
            nuestra formación.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 border border-beige-100 hover:shadow-xl transition-all duration-500 fade-in"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="star"
                    className="w-5 h-5 text-peach-300 fill-peach-300"
                  />
                ))}
              </div>
              <p className="text-warm-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-beige-100">
                <div
                  className={`w-12 h-12 rounded-full bg-${testimonial.bgColor}-100 flex items-center justify-center`}
                >
                  <span
                    className={`font-serif font-bold text-${testimonial.bgColor}-400`}
                  >
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-warm-800 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-warm-400">{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
