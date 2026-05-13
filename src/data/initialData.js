export const initialData = {
  personalInfo: {
    name: "Devesh Kumar Tripathi",
    role: "Full Stack Developer",
    education: "B.Tech in Computer Science Engineering, Galgotias University",
    cgpa: "8.86",
    location: "Prayagraj, Uttar Pradesh",
    email: "devesh8245@gmail.com",
    phone: "+91 9289508245",
    about: "I am a passionate Full Stack Developer currently pursuing B.Tech in Computer Science Engineering from Galgotias University. I enjoy building modern, responsive, and user-friendly web applications using technologies like React.js, Node.js, JavaScript, and Java. I am highly interested in problem-solving, Data Structures & Algorithms, and continuously improving my development skills by working on real-world projects."
  },
  skills: {
    programming: ["Java", "JavaScript"],
    frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    database: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "LeetCode", "HackerRank", "CodeForces", "GeeksforGeeks"]
  },
  projects: [
    {
      id: 1,
      title: "InterviewIQ (Featured Project)",
      description: "A MERN-stack interview assistant platform.",
      features: [
        "Whisper API integration for live interview transcription",
        "GPT-4 powered STAR-format response generation",
        "Real-time hint system",
        "Firebase Authentication",
        "MongoDB-based analytics tracking",
        "Modern responsive UI"
      ],
      techStack: ["React.js", "Node.js", "MongoDB", "Firebase"],
      featured: true
    },
    {
      id: 2,
      title: "JobHunt",
      description: "A responsive React-based job portal platform.",
      features: [
        "Job searching and filtering",
        "Save and manage jobs",
        "Modern responsive UI",
        "Clean navigation and user experience"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "React.js"],
      featured: false
    },
    {
      id: 3,
      title: "Internship Recommendation Platform",
      description: "A modern web application that helps students discover and explore internship opportunities based on their skills, interests, and career goals.",
      features: [
        "Internship recommendation system",
        "Responsive and modern UI design",
        "Fast performance with optimized frontend architecture",
        "Dynamic and reusable React components",
        "Interactive user experience",
        "Deployed on Vercel for live access"
      ],
      techStack: ["JavaScript", "React.js", "Next.js", "Tailwind CSS", "Vercel"],
      featured: false
    }
  ],
  internships: [
    {
      id: 1,
      role: "MERN Full Stack Development Internship",
      description: "Completed a 10-week internship in MERN Full Stack Development, gaining hands-on experience in modern web development using MongoDB, Express.js, React.js, and Node.js. Worked on building responsive web applications, RESTful APIs, authentication systems, and full-stack project integration.",
      certificate: "/cert-mern.png"
    },
    {
      id: 2,
      role: "HCL GUVI Mentor Internship",
      description: "Successfully completed an internship with HCL GUVI as a Mentor for HCL JIGSAW participants. During the internship, developed strong skills in mentoring, guidance, communication, teamwork, and problem-solving while assisting learners in their technical growth and project understanding.",
      certificate: "/cert-guvi.jpg"
    }
  ],
  achievements: [
    "Qualified for Round 3 of Smart India Hackathon (SIH) 2025",
    "Secured Top 50 Teams Position",
    "Strong DSA and problem-solving background"
  ],
  certifications: [
    "Oracle Database Design — Oracle Academy",
    "MERN Full Stack Development Internship Certificate",
    "HCL GUVI Mentor Internship Certificate",
    "Accenture Virtual Internship — Forage",
    "Data Structures Using Java — Simplilearn SkillUp"
  ],
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    leetcode: "https://leetcode.com"
  }
};
