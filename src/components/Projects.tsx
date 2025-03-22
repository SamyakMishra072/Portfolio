import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal, Shield, Bug, Lock } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Zero-Day Hunter',
      description: 'Advanced vulnerability scanner with AI-powered detection capabilities. Identifies and analyzes potential security threats in real-time.',
      technologies: ['Python', 'TensorFlow', 'Nmap', 'Docker'],
      icon: <Bug className="w-6 h-6" />,
      githubUrl: 'https://github.com/yourusername/zero-day-hunter',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Crypto Fortress',
      description: 'End-to-end encrypted communication platform with quantum-resistant algorithms and zero-knowledge proofs.',
      technologies: ['Rust', 'WebAssembly', 'Signal Protocol', 'React'],
      icon: <Lock className="w-6 h-6" />,
      githubUrl: 'https://github.com/yourusername/crypto-fortress',
      liveUrl: 'https://crypto-fortress.example.com',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Network Sentinel',
      description: 'Advanced IDS/IPS system with machine learning-based threat detection and automated response capabilities.',
      technologies: ['Python', 'Keras', 'Scapy', 'ElasticSearch'],
      icon: <Shield className="w-6 h-6" />,
      githubUrl: 'https://github.com/yourusername/network-sentinel',
      image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-cyber-darker cyber-grid-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container"
      >
        <h2 className="section-title">Security Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cyber-card group hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-cyber-black/50 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 z-20 text-neon-green">
                  {project.icon}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-mono text-neon-green group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm font-mono text-neon-green/80">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-mono rounded-md border border-neon-green/30 text-neon-green/80
                        bg-cyber-black/30 hover:bg-neon-green/10 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button py-2 px-4 text-sm"
                  >
                    <Github className="w-4 h-4 mr-2 inline-block" />
                    Source
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button py-2 px-4 text-sm"
                    >
                      <Terminal className="w-4 h-4 mr-2 inline-block" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}