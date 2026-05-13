import React from 'react';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Internships from '../sections/Internships';
import Achievements from '../sections/Achievements';
import Certifications from '../sections/Certifications';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div className="relative w-full h-full text-white overflow-hidden">
      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10 flex flex-col gap-10 lg:gap-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
