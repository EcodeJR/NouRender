
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Verified, Briefcase, Heart, Target, Zap } from 'lucide-react';

const Vision = () => {
  return (
    <div className="bg-white min-h-screen pt-44 pb-20">
      <div className="max-w-[960px] mx-auto px-4 lg:px-0">
        <header className="mb-20 text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-midnight text-6xl font-black leading-tight tracking-tight mb-6"
          >
            Our Vision: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-midnight via-apresSki to-slopes">The Digital Renaissance.</span>
          </motion.h1>
          <p className="text-slate-600 dark:text-slate-300 text-xl leading-relaxed max-w-2xl font-light">
            NouRender was founded on a singular belief: that the human touch is irreplaceable. We are building the infrastructure for a world where craftsmanship is celebrated, protected, and accessible.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden h-[500px] shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1544411047-c491584222f0?q=80&w=2000" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Artisan workspace"
            />
          </motion.div>
          <div className="flex flex-col justify-center gap-8 text-left">
            {[
              { icon: Target, title: 'Focused Intent', desc: 'We curate only the most meaningful projects that challenge the boundaries of what is possible.' },
              { icon: Zap, title: 'Sustainable Speed', desc: 'Quality takes time, but our infrastructure ensures that the process is as efficient as it is exquisite.' },
              { icon: Heart, title: 'Human Centric', desc: 'Beyond the pixels and products, we prioritize the well-being and growth of our artisan collective.' }
            ].map((pillar, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="bg-slate-100 dark:bg-midnight text-slate-900 dark:text-white p-3 rounded-lg shrink-0 shadow-lg">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-midnight">{pillar.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-arctic/30 rounded-3xl p-12 border border-midnight/5 mb-20 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
             <div className="flex flex-col gap-4">
                <Verified className="w-8 h-8 text-midnight" />
                <h4 className="text-lg font-bold text-midnight">Vetted Excellence</h4>
                <p className="text-sm text-apresSki">Our 12-point vetting process ensures you only work with the top 3% of creative talent globally.</p>
             </div>
             <div className="flex flex-col gap-4">
                <Sparkles className="w-8 h-8 text-midnight" />
                <h4 className="text-lg font-bold text-midnight">Bespoke Matches</h4>
                <p className="text-sm text-apresSki">We don't just find an artisan; we find the artisan whose style and philosophy match your brand's soul.</p>
             </div>
             <div className="flex flex-col gap-4">
                <Briefcase className="w-8 h-8 text-midnight" />
                <h4 className="text-lg font-bold text-midnight">Enterprise Ready</h4>
                <p className="text-sm text-apresSki">Full contract management, escrow services, and milestone tracking built into every project.</p>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vision;
