import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import { usePortfolio } from '../context/PortfolioContext';
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const About = () => {
  const { data } = usePortfolio();
  const { personalInfo } = data;

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center neon-text">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard className="md:col-span-2 group">
            <h3 className="text-2xl font-semibold mb-4 text-primary">My Story</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              {personalInfo.about}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
                <span className="text-primary font-bold">8.86</span> CGPA
              </div>
              <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
                <span className="text-secondary font-bold">10+</span> Projects
              </div>
            </div>
          </GlassCard>

          <GlassCard className="flex flex-col gap-6 group">
            <h3 className="text-xl font-semibold text-primary border-b border-white/10 pb-2">Details</h3>
            
            <div className="flex items-start gap-3">
              <FaGraduationCap className="text-secondary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-sm text-gray-400">Education</p>
                <p className="text-sm font-medium">{personalInfo.education}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-sm font-medium">{personalInfo.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-secondary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-sm font-medium break-all"><a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">{personalInfo.email}</a></p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhone className="text-secondary mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-sm font-medium">{personalInfo.phone}</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default About;
