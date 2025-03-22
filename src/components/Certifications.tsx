import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      name: 'GDSC Wow Kolkata',
      issuer: 'Google Developer Student Clubs',
      date: 'March 2023',
      url: '#',
    },
    {
      name: 'Hasta La Vista',
      issuer: 'Tech Conference',
      date: 'February 2023',
      url: '#',
    },
    {
      name: 'Learn Java Programming',
      issuer: 'Coding Platform',
      date: 'January 2023',
      url: '#',
    },
    {
      name: 'Web Development Bootcamp',
      issuer: 'Online Learning Platform',
      date: 'December 2022',
      url: '#',
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container"
      >
        <h2 className="section-title">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <h3 className="text-xl font-semibold">{cert.name}</h3>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mb-4">
                <p>{cert.issuer}</p>
                <p>{cert.date}</p>
              </div>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}