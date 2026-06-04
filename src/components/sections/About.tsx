import { useEffect, useRef } from "react";
import Icon from "../ui/Icon";
import aboutImage from "../../assets/miriam-edit.png"

const About = () => {
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

  const qualifications = [
    {
      icon: "heart-handshake",
      title: "Técnica en Acompañamiento Terapéutico",
      institution: "Universidad FASTA",
      bgColor: "peach",
    },
    {
      icon: "users",
      title: "Psicóloga Social",
      institution: "Instituto FEPS",
      bgColor: "sage",
    },
    {
      icon: "brain",
      title: "Psicóloga Terapeuta",
      institution: "Universidad Kennedy",
      bgColor: "peach",
    },
    {
      icon: "flower-2",
      title: "Terapeuta Floral Bach",
      institution: "Instructora en Desarrollo Personal",
      bgColor: "sage",
    },
    {
      icon: "hand",
      title: "Masajista Profesional",
      institution: "Instituto EDIS",
      bgColor: "peach",
    },
    {
      icon: "graduation-cap",
      title: "Instructora en Desarrollo Personal",
      institution: "Instituto FEPS",
      bgColor: "sage",
    },
  ];

  return (
    <section
      id="sobre-miriam"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beige-300 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Imagen */}
          <div className="fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-sage-100 rounded-3xl"></div>
              <img
                src={aboutImage}
                alt="Miriam Sandoval"
                className="relative rounded-3xl w-full h-[500px] lg:h-[600px] object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -right-4 lg:-right-8 glass-card border border-white/40 rounded-2xl p-5 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-peach-100 flex items-center justify-center">
                    <Icon name="award" className="w-5 h-5 text-peach-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-800 text-sm">
                      +10 Certificaciones
                    </p>
                    <p className="text-xs text-warm-400">Formación continua</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="fade-in" style={{ transitionDelay: "0.15s" }}>
            <span className="text-sage-400 font-semibold text-sm uppercase tracking-widest">
              Conoce a la profesional
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-800 mt-4 mb-6 leading-tight">
              Sobre Miriam Sandoval
            </h2>
            <p className="text-warm-500 text-lg leading-relaxed mb-10">
              Profesional comprometida con el bienestar emocional y el
              desarrollo humano. Con una sólida formación académica y una visión
              integral, acompaña a cada persona en su camino de crecimiento
              personal y profesional.
            </p>

            <div className="space-y-4">
              {qualifications.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-cream-50 hover:bg-cream-100 transition-colors group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-${item.bgColor}-100 flex items-center justify-center flex-shrink-0 group-hover:bg-${item.bgColor}-200 transition-colors`}
                  >
                    <Icon
                      name={item.icon}
                      className={`w-5 h-5 text-${item.bgColor}-400`}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-warm-800">{item.title}</p>
                    <p className="text-sm text-warm-400">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
