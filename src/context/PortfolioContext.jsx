import React, { createContext, useContext, useState } from 'react';
import { initialData } from '../data/initialData';

const PortfolioContext = createContext();

export const usePortfolio = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  // Mock CRUD operations
  const updatePersonalInfo = (newInfo) => {
    setData((prev) => ({ ...prev, personalInfo: { ...prev.personalInfo, ...newInfo } }));
  };

  const updateSkills = (category, newSkills) => {
    setData((prev) => ({
      ...prev,
      skills: { ...prev.skills, [category]: newSkills }
    }));
  };

  const addProject = (project) => {
    setData((prev) => ({
      ...prev,
      projects: [...prev.projects, { ...project, id: Date.now() }]
    }));
  };

  const updateProject = (id, updatedProject) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, ...updatedProject } : p))
    }));
  };

  const deleteProject = (id) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id)
    }));
  };

  const updateArrayData = (field, newArray) => {
    setData((prev) => ({ ...prev, [field]: newArray }));
  };

  const value = {
    data,
    updatePersonalInfo,
    updateSkills,
    addProject,
    updateProject,
    deleteProject,
    updateArrayData
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
