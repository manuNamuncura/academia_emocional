import { useState, useEffect } from "react";
import Icon from "../ui/Icon";
import { navLinks } from "../../types/content";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevenir scroll del body cuando el menú mobile está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    // Cerrar menú mobile
    setIsMobileMenuOpen(false);

    // Scroll suave al elemento
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  // Cerrar menú al hacer click fuera (opcional)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const mobileMenu = document.getElementById("mobile-menu");
      const menuBtn = document.getElementById("menu-btn");

      if (isMobileMenuOpen && mobileMenu && menuBtn) {
        if (
          !mobileMenu.contains(e.target as Node) &&
          !menuBtn.contains(e.target as Node)
        ) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-beige-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, "#inicio")}
            className="flex items-center gap-3 group z-20 relative"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-peach-300 to-sage-300 flex items-center justify-center">
              <span className="font-serif text-white text-lg font-bold">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-warm-800 font-semibold text-lg leading-tight block">
                Academia de
              </span>
              <span className="font-serif text-peach-400 text-xs tracking-wider uppercase">
                Consultoría Emocional
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-warm-600 hover:text-warm-800 transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, "#contacto")}
              className="bg-peach-300 hover:bg-peach-400 text-warm-800 font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Solicitar Información
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-beige-100 transition-colors z-20 relative"
            aria-label="Menú"
            aria-expanded={isMobileMenuOpen}
          >
            <Icon
              name={isMobileMenuOpen ? "x" : "menu"}
              className="w-5 h-5 text-warm-700"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Versión mejorada */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-beige-200 px-6 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-warm-700 hover:text-warm-800 font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, "#contacto")}
              className="bg-peach-300 hover:bg-peach-400 text-warm-800 font-semibold text-center py-3 rounded-full transition-all mt-2"
            >
              Solicitar Información
            </a>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar menú (opcional, pero mejora UX) */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/20 transition-opacity duration-300"
          style={{ top: "80px" }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Header;
