import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileSearch, Medal, CheckSquare, Handshake } from 'lucide-react';

const ForClients = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-white dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        {/* Hero Section */}
        <section className="px-4 lg:px-40 flex justify-center py-20 pt-32">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-8"
              >
                <div className="flex flex-col gap-4">
                  <span className="uppercase tracking-widest text-xs font-bold text-primary/60 dark:text-primary/40">Premium Artisan Network</span>
                  <h1 className="text-primary dark:text-white text-5xl md:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
                    Precision Craftsmanship for Your Vision
                  </h1>
                  <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                    Hire verified, elite artisans with confidence. Our rigorous vetting process ensures exceptional quality and reduces project risk for leading brands.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all shadow-lg"
                  >
                    Find an Artisan
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-primary text-primary dark:text-white dark:border-white px-8 py-4 rounded-lg font-bold hover:bg-primary/5 dark:hover:bg-white/5 transition-colors"
                  >
                    View Case Studies
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-full"
              >
                <div className="relative aspect-square bg-primary/10 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuATDRiTOLy310f4HQRP9ac67XaRLEWnfP-xuvFsnn-8g25lPipgHccaEwE2KS0WQUECEav9Xxm8XvFk3dGbH3cSl91Vx9p2iVt5I0gFdU7scurjUVRHkqvMv1cF-t3wVT8tbugcVhvQfe2YTPWJBmldT91baMJlPVFzsTc2w9CX5hmM4ki0kqEvLEPDLrHK5Ui-3VBP-FZKsroWlFI8aiis56YUdajByRuuSYVdsHHGVEzynuysOxmvzXZg9yYXHMMicXSUChOazg" 
                    alt="Artisan craft" 
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 lg:px-40 flex justify-center py-12">
          <div className="layout-content-container max-w-[1200px] flex-1">
            <div className="grid grid-cols-3 gap-6 md:gap-12">
              {[
                { number: '150+', label: 'Verified Artisans' },
                { number: '45', label: 'Countries' },
                { number: '98%', label: 'Client Satisfaction' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-black text-primary dark:text-white">{stat.number}</p>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-medium mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vetting Process Section */}
        <section className="px-4 lg:px-40 flex justify-center py-20">
          <div className="layout-content-container max-w-[1200px] flex-1">
            <div className="bg-primary/5 dark:bg-midnight/20 rounded-3xl px-8 md:px-16 py-20">
              <div className="max-w-3xl mx-auto mb-16">
                <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-black tracking-[-0.02em] text-center mb-4">
                  The NouRender Standard
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-center font-medium italic">
                  Our commitment to excellence is non-negotiable
                </p>
              </div>

              <div className="space-y-12 max-w-2xl mx-auto">
                {[
                  { icon: FileSearch, title: 'Portfolio Review', desc: 'Exhaustive manual assessment of past work, evaluating technical complexity and artistry.' },
                  { icon: Medal, title: 'Skill Assessment', desc: 'Rigorous technical testing under time constraints to verify true proficiency.' },
                  { icon: CheckSquare, title: 'Reliability Verification', desc: 'Background checks and direct reference validation from established clients.' },
                  { icon: Handshake, title: 'Platform Integration', desc: 'Onboarding into our secure infrastructure for seamless collaboration.' }
                ].map((step, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex flex-col items-center">
                      <div className="bg-primary dark:bg-primary/80 p-3 rounded-full text-white shrink-0 shadow-lg">
                        <step.icon className="w-6 h-6" />
                      </div>
                      {i < 3 && <div className="w-[2px] bg-primary/20 dark:bg-primary/30 grow min-h-[40px] mt-2" />}
                    </div>
                    <div className="pb-4">
                      <h4 className="text-primary dark:text-white text-xl font-bold">{step.title}</h4>
                      <p className="text-slate-600 dark:text-slate-300 mt-1 font-normal">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 lg:px-40 flex justify-center py-20">
          <div className="layout-content-container max-w-[1200px] flex-1">
            <div className="text-center mb-16">
              <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-black tracking-[-0.02em] mb-4">
                Why Choose NouRender
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg max-w-[600px] mx-auto">
                Streamlined access to world-class artisans vetted to your standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Quality Assurance', desc: 'Every artisan meets our rigorous quality standards.' },
                { title: 'Risk Mitigation', desc: 'Verified backgrounds and proven track records.' },
                { title: 'Global Reach', desc: 'Access the best artisans from around the world.' },
                { title: 'Project Management', desc: 'Integrated tools for seamless collaboration.' }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl border border-primary/10 dark:border-primary/20 hover:border-primary/30 transition-colors"
                >
                  <h3 className="text-primary dark:text-white text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 font-normal">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 lg:px-40 flex justify-center py-20 bg-primary/10 dark:bg-midnight/20">
          <div className="layout-content-container max-w-[1200px] flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-primary dark:text-white text-4xl md:text-5xl font-black mb-6">
                Ready to Commission Excellence?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-[600px] mx-auto">
                Explore our network of verified artisans and bring your vision to life.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:opacity-90 transition-all"
              >
                Explore Artisans
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ForClients;
