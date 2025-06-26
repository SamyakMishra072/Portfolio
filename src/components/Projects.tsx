
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const projects = [
    {
      title: "Stock Market Price Prediction System",
      tech: ["ReactJS", "Python", "Clerk Auth", "Docker", "Yahoo Finance API"],
      description: "A comprehensive web application that predicts stock market prices using machine learning algorithms. Features real-time data fetching, user authentication, and interactive charts for data visualization.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      liveUrl: "https://stock-price-prediction-system-lemon.vercel.app",
      codeUrl: "https://github.com/SamyakMishra072/Stock-Price-Prediction-System"
    },
    {
      title: "Spam Email Detection System",
      tech: ["Python", "Flask", "scikit-learn", "NLTK"],
      description: "An intelligent email classification system that uses natural language processing and machine learning to detect spam emails with high accuracy. Built with Flask for web interface.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=300&fit=crop",
      liveUrl: null,
      codeUrl: "https://github.com/SamyakMishra072/Spam-Email-Detection"
    },
    {
      title: "Online Pharmacy Management System",
      tech: ["PHP", "MySQL", "CRUD", "Role-Based Access"],
      description: "A complete pharmacy management solution with inventory tracking, prescription management, and role-based access control. Features separate interfaces for customers, pharmacists, and administrators.",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=500&h=300&fit=crop",
      liveUrl: "https://opmsportal.vercel.app",
      codeUrl: "https://github.com/SamyakMishra072/Online_Pharmacy_Management_System"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-3d font-['Montserrat']">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="perspective-1000 h-96"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d
                              ${flippedCard === index ? 'rotate-y-180' : ''}`}>
                
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden
                              bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm 
                              border border-white/10 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-purple-600/20 border border-purple-500/30 
                                   rounded text-purple-300 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600/20 border border-gray-500/30 
                                       rounded text-gray-300 text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl
                              bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm 
                              border border-white/10 p-6 flex flex-col justify-between">
                  
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-blue-600/20 border border-blue-500/30 
                                   rounded text-blue-300 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-green-600 to-green-700 
                                 text-white px-4 py-2 rounded-lg text-sm font-medium
                                 hover:from-green-500 hover:to-green-600 transition-all duration-300
                                 flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 
                               text-white px-4 py-2 rounded-lg text-sm font-medium
                               hover:from-gray-600 hover:to-gray-700 transition-all duration-300
                               flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
