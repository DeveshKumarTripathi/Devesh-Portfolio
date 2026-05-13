import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import Navbar from '../components/Navbar';
import GlassCard from '../components/ui/GlassCard';
import { FaSave, FaPlus, FaTrash } from 'react-icons/fa';

const AdminDashboard = () => {
  const { data, updatePersonalInfo, updateSkills, updateArrayData } = usePortfolio();
  
  // Local state for basic editing
  const [personalInfo, setPersonalInfo] = useState(data.personalInfo);
  const [activeTab, setActiveTab] = useState('personal');

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const savePersonalInfo = () => {
    updatePersonalInfo(personalInfo);
    alert('Personal info updated successfully!');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>
      
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 neon-text">Admin Dashboard</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <GlassCard className="lg:w-1/4 h-fit sticky top-32">
            <h3 className="text-xl font-bold mb-4 text-white">Menu</h3>
            <ul className="space-y-2">
              {[
                { id: 'personal', label: 'Personal Info' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'internships', label: 'Internships' },
              ].map(tab => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeTab === tab.id ? 'bg-primary/20 text-primary border border-primary/50' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </GlassCard>
          
          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {activeTab === 'personal' && (
              <GlassCard className="animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-primary">Edit Personal Info</h2>
                  <button 
                    onClick={savePersonalInfo}
                    className="flex items-center gap-2 bg-primary/20 hover:bg-primary border border-primary text-primary hover:text-background font-bold py-2 px-4 rounded transition-colors"
                  >
                    <FaSave /> Save Changes
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(personalInfo).map(([key, value]) => (
                    <div key={key} className={`flex flex-col gap-2 ${key === 'about' ? 'md:col-span-2' : ''}`}>
                      <label className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                      {key === 'about' ? (
                        <textarea 
                          name={key}
                          value={value}
                          onChange={handlePersonalInfoChange}
                          rows="4"
                          className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary w-full"
                        />
                      ) : (
                        <input 
                          type="text" 
                          name={key}
                          value={value}
                          onChange={handlePersonalInfoChange}
                          className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary w-full"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </GlassCard>
            )}
            
            {activeTab !== 'personal' && (
              <GlassCard className="animate-fade-in flex flex-col items-center justify-center py-20">
                <div className="text-4xl text-gray-500 mb-4">🚧</div>
                <h2 className="text-2xl font-bold text-gray-400 mb-2">Section Under Construction</h2>
                <p className="text-gray-500 text-center max-w-md">
                  This is a mock admin dashboard. CRUD operations for {activeTab} can be implemented here using the PortfolioContext functions.
                </p>
              </GlassCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
