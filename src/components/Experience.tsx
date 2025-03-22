import { motion } from 'framer-motion';
import { Terminal, Shield, Code, Network, Lock, Bug } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Lead Security Researcher',
      company: 'CyberGuard Labs',
      period: '2023 - Present',
      icon: <Shield className="w-6 h-6" />,
      description: 'Leading vulnerability research team, conducting advanced penetration testing, and developing automated security tools.',
      achievements: [
        'Discovered critical zero-day vulnerabilities in enterprise systems',
        'Developed ML-based threat detection systems',
        'Led red team operations for Fortune 500 companies'
      ]
    },
    {
      title: 'Malware Analyst',
      company: 'Digital Defense Initiative',
      period: '2022 - 2023',
      icon: <Bug className="w-6 h-6" />,
      description: 'Specialized in reverse engineering malware and developing detection signatures for advanced persistent threats.',
      achievements: [
        'Analyzed sophisticated ransomware strains',
        'Created automated malware analysis pipeline',
        'Published research on emerging threat actors'
      ]
    },
    {
      title: 'Network Security Engineer',
      company: 'SecureNet Solutions',
      period: '2021 - 2022',
      icon: <Network className="w-6 h-6" />,
      description: 'Designed and implemented secure network architectures, focusing on intrusion detection and prevention systems.',
      achievements: [
        'Implemented zero-trust architecture',
        'Reduced security incidents by 75%',
        'Developed custom IDS rules'
      ]
    },
    {
      title: 'Cryptography Researcher',
      company: 'Quantum Shield',
      period: '2020 - 2021',
      icon: <Lock className="w-6 h-6" />,
      description: 'Researched post-quantum cryptography solutions and implemented secure communication protocols.',
      achievements: [
        'Developed quantum-resistant algorithms',
        'Published papers on cryptographic protocols',
        'Created secure key exchange system'
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-cyber-black cyber-grid-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container"
      >
        <h2 className="section-title">Mission Log</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-neon-green/30" />
              <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-neon-green shadow-neon-green" />
              
              <div className="cyber-card group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-neon-green group-hover:text-neon-blue transition-colors duration-300">
                    {exp.icon}
                  </div>
                  <h3 className="text-xl font-mono text-neon-green">{exp.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-4 text-neon-blue mb-4 font-mono text-sm">
                  <span>{exp.company}</span>
                  <span className="terminal-text">{exp.period}</span>
                </div>
                
                <p className="text-neon-green/80 mb-4 font-mono text-sm">
                  {exp.description}
                </p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
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