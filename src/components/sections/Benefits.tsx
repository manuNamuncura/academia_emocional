import { useEffect, useRef } from "react";
import Icon from "../ui/Icon";
import { benefits } from "../../types/content";

const Benefits = () => {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="fade-in">
            <span className="text-sage-400 font-semibold text-sm uppercase tracking-widest">
              ¿Por qué elegirnos?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-800 mt-4 mb-10 leading-tight">
              Beneficios de formarte con nosotros
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-start gap-5">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-${benefit.bgColor}-100 flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon
                      name={benefit.icon}
                      className={`w-6 h-6 text-${benefit.iconColor}-400`}
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-warm-800 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-warm-500 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in" style={{ transitionDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-peach-100 rounded-3xl"></div>
              <img
                src="https://picsum.photos/seed/wellness-benefits-growth/600/700.jpg"
                alt="Beneficios de formarte con nosotros"
                className="relative rounded-3xl w-full h-[550px] object-cover shadow-lg"
              />
              <div className="absolute -left-6 bottom-12 glass-card border border-white/40 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center">
                    <Icon
                      name="trending-up"
                      className="w-7 h-7 text-sage-400"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-bold text-warm-800">
                      98%
                    </p>
                    <p className="text-sm text-warm-500">
                      Satisfacción de alumnos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
