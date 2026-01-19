
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="bg-white dark:bg-background-dark">
      {/* Methodology Header */}
      <header className="relative pt-44 pb-32 px-6 overflow-hidden bg-white dark:bg-midnight">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest mb-6">
            The NouRender Methodology
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-midnight dark:text-white">
            Empowering Brands Through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-lime-500">Premium Artisan Talent</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-12">
            We've redesigned the hiring experience. No more guesswork, just direct access to vetted premium artisans who deliver world-class results.
          </p>
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group">
            <img alt="Artisan at work" className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1544411047-c491584222f0?q=80&w=2070" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent flex items-end p-12">
              <div className="flex gap-12 text-left">
                <div>
                  <div className="text-3xl font-bold text-accent">2000+</div>
                  <div className="text-xs text-slate-300 uppercase tracking-widest mt-1">Vetted Artisans</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">150M+</div>
                  <div className="text-xs text-slate-300 uppercase tracking-widest mt-1">Project Value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Step 1: Vetting */}
      <section className="relative bg-slate-100 dark:bg-midnight text-slate-900 dark:text-white py-32 md:py-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center text-left">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="w-12 h-12 rounded-xl bg-accent text-midnight flex items-center justify-center font-bold text-xl mb-8">01</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Rigorous Vetting <br /> & Portfolio Review</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Our curators meticulously review thousands of portfolios. We don't just look at aesthetics; we verify technical proficiency, reliability, and past client success. Only the top 3% of applicants make it onto NouRender.
            </p>
            <ul className="space-y-4">
              {[
                'Deep technical assessment',
                'Identity and background verification',
                'Portfolio authenticity check'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img className="rounded-xl shadow-xl grayscale" src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800" alt="work" />
                <img className="rounded-xl shadow-xl grayscale" src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=800" alt="work" />
              </div>
              <div className="space-y-4">
                <img className="rounded-xl shadow-xl grayscale" src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=800" alt="work" />
                <div className="bg-accent p-8 rounded-xl flex flex-col justify-end min-h-[200px]">
                  <p className="text-midnight font-bold leading-tight text-xl italic">"The quality bar is exceptionally high."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Discovery */}
      <section className="bg-slate-50 dark:bg-background-dark py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-accent font-bold tracking-widest text-xs uppercase">Step Two</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-midnight dark:text-white">Seamless Discovery</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Precision Match', desc: 'Our intelligent matching engine pairs your project needs with niche expertise.', img: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=800' },
              { title: 'Direct Communication', desc: 'No middlemen. Connect directly with makers through our encrypted dashboard.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800' },
              { title: 'Secure Contracts', desc: 'Built-in escrow and contract management ensure both parties are protected.', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-midnight p-10 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group text-left"
              >
                <div className="mb-8 overflow-hidden rounded-xl h-48">
                  <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={item.title} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-midnight dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">{item.desc}</p>
                <div className="flex items-center gap-2 text-accent font-bold">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
