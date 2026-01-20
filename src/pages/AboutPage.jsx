
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Handshake, Lightbulb, ChevronDown } from 'lucide-react';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  const philosophyCards = [
    {
      icon: CheckCircle,
      title: 'Quality',
      description: 'We curate only the finest artisans who demonstrate complete mastery in their respective fields, from ceramics to software.',
    },
    {
      icon: Handshake,
      title: 'Integrity',
      description: 'Transparent processes and fair compensation are at the heart of our platform. We value the maker as much as the object.',
    },
    {
      icon: Lightbulb,
      title: 'Connection',
      description: 'Bridging the gap between the maker and the collector through storytelling, immersive visuals, and direct interaction.',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1626784579980-db39c1a13aa9?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1652829069629-959f8927f608?q=80&w=661&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1687697860916-b05b982decbc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1676486611572-bf887dc2785b?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-background-dark">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-40 py-24 lg:py-40 bg-white dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto my-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-midnight dark:text-white text-6xl md:text-8xl font-black leading-none tracking-[-0.05em] mb-8"
          >
            MIDNIGHT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-700 dark:text-slate-300 font-light leading-relaxed"
          >
            A digital sanctuary for the physical world. NouRender bridges the gap between ancient mastery and modern accessibility.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <button className="flex items-center gap-2 text-primary dark:text-white font-bold border-b-2 border-primary pb-1 hover:gap-4 transition-all">
              Discover our story <ChevronDown size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Image Narrative Block */}
      <section className="px-6 lg:px-40 py-20 bg-white dark:bg-midnight/40">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            <img
              alt="Extreme close-up of a woodworker's hands using a chisel"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition ease-in-out contrast-125"
              src="https://images.unsplash.com/photo-1661446569716-86e93bf267d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/500x500?text=Woodworker'; }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl font-bold tracking-tight text-midnight dark:text-white">Precision is our language.</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-loose">
              We believe that the most meaningful objects carry the soul of their creator. In an era of mass production, NouRender curates the exceptional—the pieces that tell a story of patience, grit, and refined technique. Our platform isn't just a marketplace; it's a testament to the enduring power of human touch.
            </p>
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex gap-12">
              <div>
                <span className="block text-2xl font-bold text-primary dark:text-white">120+</span>
                <span className="text-xs uppercase tracking-widest opacity-60 font-bold text-slate-600 dark:text-slate-400">Vetted Artisans</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-primary dark:text-white">14</span>
                <span className="text-xs uppercase tracking-widest opacity-60 font-bold text-slate-600 dark:text-slate-400">Countries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-6 lg:px-40 py-24 bg-slate-50 dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-midnight dark:text-white text-4xl font-bold leading-tight mb-4 tracking-tight">Our Philosophy</h2>
            <p className="text-slate-700 dark:text-slate-300 max-w-xl mx-auto">Our approach is rooted in the preservation of human touch and the pursuit of excellence across every medium.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyCards.map((card, i) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={i}
                  className="p-10 bg-slate-50 dark:bg-midnight rounded-xl border border-slate-200 dark:border-white/10 transition-transform hover:-translate-y-2"
                >
                  <IconComponent size={40} className="mb-6 text-primary dark:text-primary" />
                  <h3 className="text-xl font-bold mb-3 text-midnight dark:text-white">{card.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-6 lg:px-40 py-24 bg-white dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-midnight dark:text-white">The Future <br />of Craft</h2>
              <p className="text-slate-700 dark:text-slate-300 text-lg">Technology is not a replacement for the hand; it is a tool to amplify its reach. We are building the infrastructure for the next century of craftsmanship.</p>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-primary text-midnight px-8 py-4 rounded-lg font-bold uppercase text-xs tracking-widest hover:opacity-90 transition-all"
            >
              View Journal
            </motion.button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`aspect-[3/4] rounded-lg overflow-hidden group bg-slate-200 dark:bg-slate-800 ${i % 2 === 1 ? 'translate-y-8' : ''}`}
              >
                <img
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  src={img}
                  onError={(e) => { e.target.src = `https://via.placeholder.com/400x500?text=Gallery+${i + 1}`; }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-40 py-32 bg-white dark:bg-background-dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-midnight dark:text-white">Ready to commission <br />something timeless?</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="w-full md:w-auto bg-primary text-midnight px-10 py-4 rounded-lg font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all">
              Explore Artisans
            </button>
            <button className="w-full md:w-auto border border-slate-300 dark:border-slate-600 px-10 py-4 rounded-lg font-bold text-sm tracking-widest uppercase text-midnight dark:text-white hover:bg-slate-50 dark:hover:bg-midnight/50 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
