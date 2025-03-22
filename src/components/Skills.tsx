import { motion } from 'framer-motion';
import { Terminal, Shield, Code, Brain, Globe, Database, Lock, Cpu, Network, Bug, Server, Webhook } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      category: 'Offensive Security',
      icon: <Shield className="w-6 h-6" />,
      items: [
        { name: 'Penetration Testing', level: 95 },
        { name: 'Exploit Development', level: 90 },
        { name: 'Malware Analysis', level: 85 },
        { name: 'Social Engineering', level: 88 },
      ],
    },
    {
      category: 'Programming & Development',
      icon: <Code className="w-6 h-6" />,
      items: [
        { name: 'Python', level: 92 },
        { name: 'C/C++', level: 88 },
        { name: 'Assembly', level: 85 },
        { name: 'Shell Scripting', level: 90 },
      ],
    },
    {
      category: 'Network Security',
      icon: <Network className="w-6 h-6" />,
      items: [
        { name: 'Packet Analysis', level: 90 },
        { name: 'Network Protocols', level: 88 },
        { name: 'Firewall Configuration', level: 85 },
        { name: 'IDS/IPS', level: 87 },
      ],
    },
    {
      category: 'Cryptography',
      icon: <Lock className="w-6 h-6" />,
      items: [
        { name: 'Encryption/Decryption', level: 90 },
        { name: 'Hash Cracking', level: 88 },
        { name: 'PKI', level: 85 },
        { name: 'Blockchain Security', level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-cyber-darker cyber-grid-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container"
      >
        <h2 className="section-title">Arsenal</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cyber-card group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-neon-green group-hover:text-neon-blue transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-mono">{category.category}</h3>
              </div>
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="terminal-text text-sm">{skill.name}</span>
                      <span className="text-neon-blue font-mono">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bar"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}