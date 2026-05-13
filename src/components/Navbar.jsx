import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = isAdmin 
    ? [{ name: 'Back to Portfolio', path: '/' }]
    : [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Skills', path: '#skills' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
        { name: 'Admin', path: '/admin' }
      ];

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold neon-text tracking-wider">
          <span className="text-white">DK</span>T<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            link.path.startsWith('#') ? (
              <a 
                key={index} 
                href={link.path} 
                onClick={(e) => { e.preventDefault(); handleNavClick(link.path); }}
                className="text-gray-300 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={index} 
                to={link.path}
                className="text-gray-300 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-4"
        >
          {navLinks.map((link, index) => (
            link.path.startsWith('#') ? (
              <a 
                key={index} 
                href={link.path} 
                onClick={(e) => { e.preventDefault(); handleNavClick(link.path); }}
                className="text-gray-200 hover:text-primary transition-colors text-lg"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={index} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-primary transition-colors text-lg"
              >
                {link.name}
              </Link>
            )
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
