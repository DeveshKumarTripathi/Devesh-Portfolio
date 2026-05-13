import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { usePortfolio } from '../context/PortfolioContext';

const Hero = () => {
  const { data } = usePortfolio();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-primary p-1 neon-border bg-background relative overflow-hidden flex items-center justify-center">
             {/* Placeholder for Profile Picture */}
             <span className="text-4xl md:text-6xl font-bold neon-text">DKT</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="neon-text">{data.personalInfo.name}</span>
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-4xl font-semibold text-gray-300 mb-8 h-10"
        >
          I am a{' '}
          <span className="text-secondary neon-pink-text">
            <Typewriter
              words={['Full Stack Developer', 'React Developer', 'Java Programmer', 'Problem Solver']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a 
            href="#contact" 
            className="px-8 py-3 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 rounded-full font-semibold tracking-wide neon-border"
          >
            Hire Me
          </a>
          <a 
            href="/resume.png" 
            download="Devesh_Resume.png"
            className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 rounded-full font-semibold flex items-center gap-2 glass"
          >
            <FaDownload /> Download Resume
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex space-x-6"
        >
          <a href={data.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-300">
            <FaGithub size={30} />
          </a>
          <a href={data.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-300">
            <FaLinkedin size={30} />
          </a>
          <a href={data.socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors hover:scale-110 transform duration-300">
            <FaCode size={30} />
          </a>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full mix-blend-screen filter blur-xl animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-24 h-24 bg-secondary/20 rounded-full mix-blend-screen filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-accent/20 rounded-full mix-blend-screen filter blur-xl animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default Hero;
