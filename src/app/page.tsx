"use client";
import { motion } from "framer-motion";
import NameAnimation from '@/components/nameAnimation';
import AboutPage from './About/page';
import ProjectsPage from './Projects/page';
import TimeLinePage from './TimeLine/page';
import ContactPage from './Contact/page';

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen scroll-mt-20"
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <main className="relative z-10">
        <section id="home" className="w-full">
          <NameAnimation />
        </section>
        <Section id="about"><AboutPage /></Section>
        <Section id="projects"><ProjectsPage /></Section>
        <Section id="timeline"><TimeLinePage /></Section>
        <Section id="contact"><ContactPage /></Section>
      </main>
    </div>
  );
}
