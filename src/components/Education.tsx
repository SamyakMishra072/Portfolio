import { motion } from 'framer-motion';
import { GraduationCap, Terminal, Code, Shield } from 'lucide-react';
export function Education() {
  const education = [
    {
      degree: 'MSc in Cybersecurity',
      institution: 'Digital Defense Institute',
      period: '2022 - 2024',
      icon: <Shield className="w-6 h-6" />,
      description: 'Advanced research in malware analysis, cryptography, and network security. Specialized in offensive security and threat intelligence.',
      achievements: [
        'Published research on AI-powered malware detection',
        'Led university CTF team to national victory',
        'Developed novel encryption algorithm'
      ]
    },
    {
      degree: 'BSc in Computer Science',
      institution: 'Tech University',
      period: '2018 - 2022',
      icon: <Code className="w-6 h-6" />,
      description: 'Core focus on systems programming, network protocols, and security fundamentals. Minor in Mathematics with emphasis on cryptography.',
      achievements: [
        'First place in Security Hackathon',
        'Published paper on secure system design',
        'Founded university security club'
      ]
    }
  ];
  return (
    <section id="education" className="py-20 bg-cyber-darker cyber-grid-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container"
      >
        <h2 className="section-title">Training Protocols</h2>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8 last:mb-0"
            >
              <div className="cyber-card group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-neon-green group-hover:text-neon-blue transition-colors duration-300">
                    {edu.icon}
                  </div>
                  <h3 className="text-xl font-mono text-neon-green">{edu.degree}</h3>
                </div>
          
                <div className="flex flex-wrap gap-4 text-neon-blue mb-4 font-mono text-sm">
                  <span>{edu.institution}</span>
                  <span className="terminal-text">{edu.period}</span>
                </div>
                
                <p className="text-neon-green/80 mb-4 font-mono text-sm">
                  {edu.description}
                </p>
                
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="terminal-text text-sm text-neon-green/70">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}