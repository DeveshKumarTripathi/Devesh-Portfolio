import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import { usePortfolio } from '../context/PortfolioContext';
import { FaTrophy } from 'react-icons/fa';

const Achievements = () => {
  const { data } = usePortfolio();
  const { achievements } = data;

  return (
    <section id="achievements" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center neon-text">Achievements</h2>
        
        <div className="max-w-3xl mx-auto">
          <GlassCard className="p-8 md:p-12">
            <ul className="space-y-6">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 bg-white/5 p-3 rounded-full group-hover:bg-primary/20 group-hover:text-primary transition-colors border border-white/10">
                    <FaTrophy className="text-yellow-500 group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-lg text-gray-200 group-hover:text-white transition-colors pt-2">{achievement}</p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
