import { useTheme } from './hooks/useTheme.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Experience } from './components/Experience.tsx';
import { Projects } from './components/Projects.tsx';
import { Skills } from './components/Skills.tsx';
import { Education } from './components/Education.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppButton } from './components/WhatsAppButton.tsx';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      {/* Ambient blob field — the color that refracts through every glass panel on the page */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-[34rem] w-[34rem] rounded-full bg-signal-500/40 blur-[90px] animate-blob-float dark:bg-signal-500/45" />
        <div className="absolute right-[-8rem] top-1/4 h-[30rem] w-[30rem] rounded-full bg-aurora/35 blur-[90px] animate-blob-float-slow dark:bg-aurora/40" />
        <div className="absolute bottom-[-6rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-mint/30 blur-[90px] animate-blob-float dark:bg-mint/30 [animation-delay:-10s]" />
      </div>

      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
