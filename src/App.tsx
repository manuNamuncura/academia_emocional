import { useEffect, useState } from "react";
import ScrollProgress from "./components/layout/ScrollProgress";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";
import About from "./components/sections/About";
import Courses from "./components/sections/Courses";
import Certifications from "./components/sections/Certifications";
import Benefits from "./components/sections/Benefits";
import Testimonials from "./components/sections/Testimonials";
import Cta from "./components/sections/Cta";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import AdvertisingSimple from "./components/sections/AdvertisingSimple";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-warm-800 flex flex-col items-center justify-center">
        <div className="font-serif text-[clamp(2.5rem,8vw,5rem)] font-normal text-cream-100 tracking-[0.08em] opacity-0 translate-y-[30px] animate-fade-up">
          Miriam
        </div>
        <div className="font-serif text-[clamp(2.5rem,8vw,5rem)] font-bold text-peach-300 tracking-[0.04em] opacity-0 translate-y-[30px] animate-fade-up-delayed">
          Sandoval
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream-100 font-sans text-warm-800 antialiased min-h-screen w-full overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <AdvertisingSimple />
        <Courses />
        <Certifications />
        <Benefits />
        <Testimonials />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
