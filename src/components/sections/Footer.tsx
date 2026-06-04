import Icon from "../ui/Icon";
import { navLinks, contactInfo } from "../../types/content";

const Footer = () => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-warm-800 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-600 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-peach-300 to-sage-300 flex items-center justify-center">
                <span className="font-serif text-white text-lg font-bold">
                  A
                </span>
              </div>
              <div>
                <span className="font-serif text-white font-semibold text-lg leading-tight block">
                  Academia de
                </span>
                <span className="font-serif text-peach-300 text-xs tracking-wider uppercase">
                  Consultoría Emocional
                </span>
              </div>
            </div>
            <p className="text-warm-400 text-sm leading-relaxed mb-5">
              Acompañamiento, formación y desarrollo personal para el bienestar
              integral.
            </p>
            <p className="text-warm-500 text-sm">Miriam Sandoval</p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-serif text-white font-semibold mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-warm-400 hover:text-peach-300 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-serif text-white font-semibold mb-5">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-warm-400 text-sm">
                <svg
                  className="w-4 h-4 text-green-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </li>
              <li className="flex items-center gap-2 text-warm-400 text-sm">
                <Icon
                  name="mail"
                  className="w-4 h-4 text-peach-300 flex-shrink-0"
                />
                {contactInfo.email}
              </li>
              <li className="flex items-center gap-2 text-warm-400 text-sm">
                <Icon
                  name="instagram"
                  className="w-4 h-4 text-sage-300 flex-shrink-0"
                />
                {contactInfo.instagram}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-warm-500 text-sm">
            © 2026 Academia de Consultoría Emocional. Todos los derechos
            reservados.
          </p>
          <p className="text-warm-600 text-xs">
            Diseñado con <span className="text-peach-300">♥</span> para tu
            bienestar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
