"use client";
import { motion } from "framer-motion";
import NameAnimation from '@/components/nameAnimation';
import AboutPage from './About/page';
import ProjectsPage from './Projects/page';
import TimeLinePage from './TimeLine/page';
import ContactPage from './Contact/page';
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.07)_0%,transparent_70%)]" />
      <main className="relative z-10">
       <section
         id="home"
         className="w-full min-h-[calc(100vh-5rem)] scroll-mt-20"
       >
        <NameAnimation />
        
        </section>

        <motion.section
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full min-h-[calc(100vh-5rem)] scroll-mt-20"
        >
        <ProjectsPage />
        </motion.section>
        <motion.section
          id="timeline"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full min-h-[calc(100vh-5rem)] scroll-mt-20"
        >
        <TimeLinePage />
        </motion.section>
        <motion.section
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full min-h-[calc(100vh-5rem)] scroll-mt-20"
        >
        <ContactPage />
        </motion.section>
        <motion.section
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full min-h-[calc(100vh-5rem)] scroll-mt-20"
        >
        <AboutPage />
        </motion.section>
      </main>
    </div>
  );
}
