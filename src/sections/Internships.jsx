import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import { usePortfolio } from '../context/PortfolioContext';
import { FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';

const Internships = () => {
  const { data } = usePortfolio();
  const { internships } = data;

  return (
    <section id="internships" className="py-20 relative z-10 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center neon-text">Internship Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {internships.map((internship, index) => (
            <GlassCard key={internship.id} delay={index * 0.2} className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-l-xl"></div>
              <div className="absolute left-[-16px] top-8 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 neon-border">
                <FaBriefcase className="text-primary text-xs" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{internship.role}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{internship.description}</p>
              
              {internship.certificate && (
                <a 
                  href={internship.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-lg transition-colors neon-border w-fit"
                >
                  <FaExternalLinkAlt size={12} /> View Certificate
                </a>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
