import { motion } from 'framer-motion';
import { GraduationCap, Terminal, Code, Shield } from 'lucide-react';
export function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology',
      institution: 'Techno Main Salt Lake',
      period: '2022 - 2026',
      icon: <Shield className="w-6 h-6" />,
      description: 'I am Pursuing my BTech in Computer Science & Engineering from Techno Main Salt Lake',
      achievements: [
        'Class Representative of CSE Department',
        'Student Convenor of CSE Department',
        'Technical Head of GeeksforGeeks Student Chapter Techno Main Salt Lake',
        'Tech Team Member of CUrBrain @Geekonix'
      ]
    },
    {
      degree: 'Higher Secondary CBSE Board',
      institution: 'D.A.V Model School Durgapur',
      period: '2019 - 2021',
      icon: <Code className="w-6 h-6" />,
      description: 'Secured 87.4% Marks with 95/100 in Computer Science',
      achievements: [
        '',
      ]
    },
    {
      degree: 'Secondary CBSE Board',
      institution: 'D.A.V Model School Durgapur',
      period: '2007 - 2019',
      icon: <Code className="w-6 h-6" />,
      description: 'Secured 90% Marks in CBSE Board Examinations',
      achievements: [
        '',
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