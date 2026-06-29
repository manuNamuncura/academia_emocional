import { useEffect, useState } from "react";
import Icon from "../ui/Icon";
import { navLinks } from "../../types/content";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    setIsMenuOpen(false);

    const target = document.querySelector(href);

    if (!target) return;

    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-beige-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}

            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, "#inicio")}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-peach-300 to-sage-300 flex items-center justify-center">
                <span className="font-serif text-white font-bold text-lg">
                  A
                </span>
              </div>

              <div className="hidden sm:block">
                <span className="block font-serif text-lg font-semibold text-warm-800">
                  Academia de
                </span>

                <span className="font-serif uppercase tracking-wider text-xs text-peach-400">
                  Consultoría Emocional
                </span>
              </div>
            </a>

            {/* Desktop */}

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-medium text-warm-600 hover:text-warm-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contacto"
                onClick={(e) => scrollToSection(e, "#contacto")}
                className="bg-peach-300 hover:bg-peach-400 text-warm-800 font-semibold rounded-full px-6 py-2.5 transition"
              >
                Solicitar Información
              </a>
            </div>

            {/* Botón Mobile */}

            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="lg:hidden"
              aria-label="Abrir menú"
            >
              <Icon
                name={isMenuOpen ? "x" : "menu"}
                className="w-6 h-6 text-warm-700"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Drawer */}

      <aside
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg text-warm-700"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contacto"
            onClick={(e) => scrollToSection(e, "#contacto")}
            className="bg-peach-300 text-center rounded-full py-3 font-semibold text-warm-800 mt-4"
          >
            Solicitar Información
          </a>
        </div>
      </aside>
    </>
  );
};

export default Header;