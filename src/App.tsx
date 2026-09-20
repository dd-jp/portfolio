import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useLenis } from './hooks/useLenis.ts';
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
  const reduceMotion = useReducedMotion();
  useLenis();

  const { scrollYProgress } = useScroll();
  const blobShift = [
    useTransform(scrollYProgress, [0, 1], [0, -180]),
    useTransform(scrollYProgress, [0, 1], [0, -90]),
    useTransform(scrollYProgress, [0, 1], [0, -270]),
  ];
  const blobY = (index: number) => (reduceMotion ? undefined : blobShift[index]);

  return (
    <>
      {/* Ambient blob field — the color that refracts through every glass panel on the page.
          The blur is static; only the transform moves with scroll. Transforming an already
          rasterized blurred layer stays on the compositor, whereas animating the blur itself
          forces a full recomposite behind ~25 backdrop-blur panels every frame. */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{ y: blobY(0) }}
          className="absolute -left-24 -top-24 h-[34rem] w-[34rem] rounded-full bg-signal-500/40 blur-[90px] will-change-transform dark:bg-signal-500/45"
        />
        <motion.div
          style={{ y: blobY(1) }}
          className="absolute right-[-8rem] top-1/4 h-[30rem] w-[30rem] rounded-full bg-aurora/35 blur-[90px] will-change-transform dark:bg-aurora/40"
        />
        <motion.div
          style={{ y: blobY(2) }}
          className="absolute bottom-[-6rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-mint/30 blur-[90px] will-change-transform dark:bg-mint/30"
        />
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
