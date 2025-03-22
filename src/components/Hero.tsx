import { motion } from 'framer-motion';
import { Terminal, Shield, Code, Cpu, Network, Lock } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-cyber-black cyber-grid-bg">
      <div className="absolute inset-0 bg-matrix-rain opacity-10" />
      
      <div className="container pt-32 pb-20 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative w-64 h-64 lg:w-96 lg:h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green via-neon-blue to-neon-red opacity-50 rounded-lg animate-pulse" />
            <div className="absolute inset-2 bg-cyber-darker rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Profile"
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
              />
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-green via-neon-blue to-neon-red opacity-30 rounded-lg blur animate-border-flow" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="cyber-border p-2">
                <span className="terminal-text text-lg">
                  Security Researcher & Ethical Hacker
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-8xl font-bold glitch-text mb-8"
            >
              <span className="text-neon-green">
                {"<"}Cyber{"/>"}
              </span>
              <span className="text-neon-red">Security</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-neon-blue max-w-3xl mb-12"
            >
              Penetration Testing | Vulnerability Assessment | Security Research
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              <a href="#contact" className="cyber-button group">
                <Terminal className="w-5 h-5 mr-2 inline-block" />
                Initialize Connection
              </a>
              <a href="#projects" className="cyber-button group">
                <Shield className="w-5 h-5 mr-2 inline-block" />
                View Arsenal
              </a>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mt-16"
            >
              {[
                { icon: <Code className="w-6 h-6" />, label: "Exploit Development" },
                { icon: <Shield className="w-6 h-6" />, label: "Penetration Testing" },
                { icon: <Network className="w-6 h-6" />, label: "Network Security" },
                { icon: <Lock className="w-6 h-6" />, label: "Cryptography" },
              ].map((item, index) => (
                <div key={index} className="cyber-card group">
                  <div className="text-neon-green group-hover:text-neon-blue transition-colors duration-300">
                    {item.icon}
                  </div>
                  <p className="mt-2 text-sm font-mono">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-black to-transparent" />
      </div>
    </section>
  );
}