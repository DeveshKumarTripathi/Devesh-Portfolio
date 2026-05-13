import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import { usePortfolio } from '../context/PortfolioContext';
import { motion } from 'framer-motion';

const Skills = () => {
  const { data } = usePortfolio();
  const { skills } = data;

  const categories = [
    { title: 'Programming', key: 'programming', color: 'text-primary', border: 'border-primary' },
    { title: 'Frontend', key: 'frontend', color: 'text-secondary', border: 'border-secondary' },
    { title: 'Backend', key: 'backend', color: 'text-accent', border: 'border-accent' },
    { title: 'Database', key: 'database', color: 'text-blue-400', border: 'border-blue-400' },
    { title: 'Tools & Platforms', key: 'tools', color: 'text-green-400', border: 'border-green-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 relative z-10 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center neon-text">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <GlassCard key={index} delay={index * 0.1} className={`border-t-2 ${category.border}`}>
              <h3 className={`text-xl font-bold mb-6 ${category.color} tracking-wide`}>
                {category.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {skills[category.key]?.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={itemVariants}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
