import React, { useState } from 'react';
import GlassCard from '../components/ui/GlassCard';
import { usePortfolio } from '../context/PortfolioContext';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const { data } = usePortfolio();
  const { personalInfo } = data;
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mock Submit! In a real app, this would send a message.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center neon-text">Get In Touch</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <GlassCard className="flex items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-full text-primary">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400">Email</h4>
                <a href={`mailto:${personalInfo.email}`} className="text-lg font-medium hover:text-primary transition-colors">{personalInfo.email}</a>
              </div>
            </GlassCard>
            
            <GlassCard className="flex items-center gap-4">
              <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                <FaPhone size={24} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400">Phone</h4>
                <p className="text-lg font-medium">{personalInfo.phone}</p>
              </div>
            </GlassCard>
            
            <GlassCard className="flex items-center gap-4">
              <div className="bg-accent/10 p-4 rounded-full text-accent">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h4 className="text-sm text-gray-400">Location</h4>
                <p className="text-lg font-medium">{personalInfo.location}</p>
              </div>
            </GlassCard>
          </div>
          
          {/* Contact Form */}
          <GlassCard className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-gray-400">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-gray-400">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Hello Devesh..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-primary/20 hover:bg-primary border border-primary text-primary hover:text-background font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 self-start neon-border"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
