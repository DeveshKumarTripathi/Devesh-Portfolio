import React from 'react';
import GlassCard from '../components/ui/GlassCard';
import { usePortfolio } from '../context/PortfolioContext';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const Projects = () => {
  const { data } = usePortfolio();
  const { projects } = data;

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center neon-text">Featured Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <GlassCard key={project.id} delay={index * 0.2} className="flex flex-col h-full group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title.replace(' (Featured Project)', '')}
                  {project.featured && <FaStar className="text-yellow-400 text-sm" title="Featured" />}
                </h3>
                <div className="flex gap-3">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start">
                      <span className="text-primary mr-2 mt-1">▹</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
