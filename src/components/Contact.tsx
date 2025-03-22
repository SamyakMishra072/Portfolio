import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
//import emailjs from '@emailjs/browser';
import { Terminal, Shield, AlertTriangle } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
  
    setIsSubmitting(true);
    setSubmitStatus('idle');
  
    try {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());
  
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) throw new Error('Failed to send message');
  
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section id="contact" className="py-20 bg-cyber-black cyber-grid-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container"
      >
        <h2 className="section-title">Establish Connection</h2>
        <div className="max-w-2xl mx-auto">
          <div className="cyber-card">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="w-6 h-6 text-neon-green" />
              <span className="terminal-text">Initializing secure communication channel...</span>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-neon-green mb-2">
                  IDENTIFY YOURSELF_
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="cyber-input w-full"
                  placeholder="Enter codename"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-neon-green mb-2">
                  COMMUNICATION PROTOCOL_
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="cyber-input w-full"
                  placeholder="Enter secure email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-neon-green mb-2">
                  MESSAGE CONTENT_
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="cyber-textarea w-full"
                  placeholder="Enter encrypted message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cyber-button w-full group"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <Terminal className="w-5 h-5 animate-pulse" />
                    <span className="ml-2">Transmitting...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Shield className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    <span>Transmit Secure Message</span>
                  </div>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-neon-green p-4 border border-neon-green rounded-lg">
                  <Terminal className="w-5 h-5" />
                  <p className="font-mono text-sm">Transmission successful. Awaiting response...</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-neon-red p-4 border border-neon-red rounded-lg">
                  <AlertTriangle className="w-5 h-5" />
                  <p className="font-mono text-sm">Transmission failed. Retry connection...</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}