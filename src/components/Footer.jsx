import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { usePortfolio } from '../context/PortfolioContext';

const Footer = () => {
  const { data } = usePortfolio();
  
  return (
    <footer className="w-full glass py-8 mt-20 relative z-10 border-t-0 border-x-0 rounded-none">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold neon-text mb-2">Devesh Kumar Tripathi</h2>
          <p className="text-gray-400 text-sm">Building the future, one line of code at a time.</p>
        </div>
        
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href={data.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
            <FaGithub size={24} />
          </a>
          <a href={data.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
            <FaLinkedin size={24} />
          </a>
          <a href={data.socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
            <FaCode size={24} />
          </a>
        </div>
        
        <div className="text-gray-500 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          <p className="text-xs mt-1 text-gray-600">Designed with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
