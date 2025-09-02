import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/app/education/page';
import Experience from '@/app/experience/page';
import Projects from '@/app/projects/page';
import Skills from '@/app/skills/page';
import Contact from '@/app/contact/page';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}