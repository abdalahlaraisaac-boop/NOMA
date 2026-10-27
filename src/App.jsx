import { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Studio from './components/Studio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const sections = mainRef.current?.querySelectorAll('.section, .manifesto');
    if (!sections?.length || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    sections.forEach((section) => {
      section.classList.add('reveal-pending');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main ref={mainRef}>
        <Hero />
        <Projects />
        <Services />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
