import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import { usePortfolio } from '../context/PortfolioContext';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const { data } = usePortfolio();
  const { certifications } = data;

  return (
    <section id="certifications" className="py-20 relative z-10 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center neon-text">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <GlassCard key={index} delay={index * 0.1} className="flex items-center gap-4 group">
              <FaCertificate className="text-secondary group-hover:text-primary transition-colors flex-shrink-0" size={24} />
              <p className="text-sm md:text-base font-medium text-gray-200 group-hover:text-white transition-colors">{cert}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
