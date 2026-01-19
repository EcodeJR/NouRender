import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WaitlistPage = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-white dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        {/* Hero Section */}
        <div className="px-4 lg:px-40 flex justify-center pt-32 pb-5">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <div className="relative overflow-hidden rounded-2xl h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center p-6 shadow-lg">
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'linear-gradient(rgba(15, 15, 35, 0.7) 0%, rgba(15, 15, 35, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuATDRiTOLy310f4HQRP9ac67XaRLEWnfP-xuvFsnn-8g25lPipgHccaEwE2KS0WQUECEav9Xxm8XvFk3dGbH3cSl91Vx9p2iVt5I0gFdU7scurjUVRHkqvMv1cF-t3wVT8tbugcVhvQfe2YTPWJBmldT91baMJlPVFzsTc2w9CX5hmM4ki0kqEvLEPDLrHK5Ui-3VBP-FZKsroWlFI8aiis56YUdajByRuuSYVdsHHGVEzynuysOxmvzXZg9yYXHMMicXSUChOazg")'
                }}
              />
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-[700px] flex flex-col gap-4"
              >
                <h1 className="text-slate-900 dark:text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                  The Future of Craft
                </h1>
                <p className="text-slate-900/80 dark:text-white/80 text-lg font-medium leading-relaxed max-w-[500px] mx-auto">
                  Connecting master artisans with world-class opportunities. A premium, minimalist space for artisanry.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative z-10 w-full max-w-[480px] mt-8"
              >
                <div className="flex flex-col md:flex-row h-auto md:h-16 w-full items-stretch rounded-lg overflow-hidden border border-white/20 bg-white shadow-lg">
                  <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 text-primary text-base outline-none placeholder:text-primary/40 py-4 md:py-0 bg-white" 
                    placeholder="Enter your email address" 
                  />
                  <button className="bg-primary text-white px-8 font-bold text-base hover:bg-primary/90 transition-colors py-4 md:py-0">
                    Join Waitlist
                  </button>
                </div>
                <p className="text-slate-900/70 dark:text-white/70 text-xs mt-3 font-medium uppercase tracking-widest">Be among the first to experience the new standard.</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="px-4 lg:px-40 flex justify-center py-20">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4 text-left">
                <h2 className="text-primary dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight">
                  What We're Building
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg font-normal leading-normal max-w-[600px]">
                  Our platform is built on three pillars of excellence, designed for those who value quality above all else.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: '✓', title: 'Vetted Excellence', desc: 'Rigorous standards for elite talent and uncompromising quality control in every project.' },
                  { icon: '⭐', title: 'Curated Projects', desc: 'High-impact commissions from world-class premium clients seeking authentic craft.' },
                  { icon: '🎯', title: 'Community Access', desc: 'Elevating the business of artisanry through meaningful connection and infrastructure.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col gap-4 rounded-xl border border-primary/10 bg-primary/5 dark:bg-midnight/20 p-8 hover:bg-primary/10 dark:hover:bg-midnight/30 transition-all text-left"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-primary dark:text-white text-xl font-bold leading-tight">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 lg:px-40 flex justify-center py-20 bg-primary/5 dark:bg-midnight/20">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-6"
            >
              <h2 className="text-primary dark:text-white text-4xl md:text-5xl font-black leading-tight">
                Ready for the Change?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg max-w-[600px]">
                Join our exclusive waitlist and be among the first to access NouRender when we launch.
              </p>
              <div className="flex flex-col md:flex-row h-auto md:h-16 w-full max-w-[480px] items-stretch rounded-lg overflow-hidden border border-primary/20 bg-white dark:bg-background-dark shadow-lg">
                <input 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 text-primary dark:text-white text-base outline-none placeholder:text-primary/40 py-4 md:py-0 bg-white dark:bg-background-dark" 
                  placeholder="your@email.com" 
                />
                <button className="bg-primary text-white px-8 font-bold text-base hover:bg-primary/90 transition-colors py-4 md:py-0">
                  Get Early Access
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WaitlistPage;
