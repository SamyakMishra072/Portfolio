import { motion } from 'framer-motion';
import { Code2, Users, Globe, MessageSquare, Sparkles, Brain, Rocket, Heart } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Software Development',
      description: 'Passionate about creating efficient and scalable solutions',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Tech Leadership',
      description: 'GFG Tech Head with experience in team management',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Open Source',
      description: 'Active contributor to various open source projects',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Public Speaking',
      description: 'Experienced in technical presentations and workshops',
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-transparent dark:from-primary-900/10" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container relative"
      >
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a passionate software engineer and tech enthusiast currently pursuing my BTech in Computer Science 
            at Techno Main Salt Lake. With a strong foundation in programming and problem-solving, I actively 
            contribute to the tech community through various roles and initiatives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card hover-card p-6 relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300`} />
              
              <div className="relative">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-primary-500/10 to-primary-500/20">
                  <div className="text-primary-600 dark:text-primary-400">{item.icon}</div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn btn-outline">
            Let's Connect
            <Heart className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}