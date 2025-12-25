import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    let visibleIndex = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.setProperty(
              "--delay",
              `${visibleIndex * 120}ms`
            );
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
            visibleIndex++;
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    // Sécurité : éviter tout élément invisible
    setTimeout(() => {
      elements.forEach((el) => el.classList.add("reveal-visible"));
    }, 1500);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO VISUEL COLLÉ EN HAUT */}
      <section className="portfolio-hero" />

      <Hero />
      <About />
      <Skills />
      <Projects />

      {/* FOOTER CONTACT */}
      <Contact />
    </>
  );
}

export default App;
