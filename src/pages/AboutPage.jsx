
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      icon: 'verified',
      title: 'Quality',
      description: 'We curate only the finest artisans who demonstrate complete mastery in their respective fields, from ceramics to software.',
    },
    {
      icon: 'handshake',
      title: 'Integrity',
      description: 'Transparent processes and fair compensation are at the heart of our platform. We value the maker as much as the object.',
    },
    {
      icon: 'hub',
      title: 'Connection',
      description: 'Bridging the gap between the maker and the collector through storytelling, immersive visuals, and direct interaction.',
    },
  ];

  const galleryImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC-cK9Cz-aoKiPVw7j447biJqM_zEd1R0E1ix_9VsXmdM417OdZnY-7srhCvYWg-FI92BoFHJpKzSB6NQhnk83iZsAqBqXpyLRSG2rKFZ7ClHUL85wK4RxwMroUiixZ4rtBaqNaUbFOOXBE139JtsleZcQYLbxv3DI3kU7L86GJGWLx-XhPhK7i8nZ1V7Na761GMsYv6gS_rS84Y8YvjeUyKOF',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuASbE7fxeqt7k4lZsxvyZS4GG9O1ZrzugjSfc1cROQDITA27fElS9TE92AVHZmmQ3a1lzuPv3lIKtrR9MTE_TSgWulNIzZr1c8TddZXJPjR2ozGmCnY_kjJD7wJzMVuIHVoB1ps1kr3wFy26JCOTyq0XlWFlmvfNkK9HLHUNIxLi7ioBvXdsMp3u2ntSg7S0gLPtye_YlVsJB2mTwo9oj1Klr',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA18hfX2-DDxJVFVBacLWC5u60ig7uJ0DYrVkwOAcJs-OBbUbolvsskHPfVrjRhxyXe0cokyksh16_M2Utftt6YVa3EpSorM8EDB8Ubqy3ixw-uHBwi6Y2BexhAwZcWXFZyapQ7l2_1GwbW5rJk5KADRxz6BErbku19xUWyNAx3vtR8aIxOkLj-eZY5o--MroYl5NhZRZ8N6pQQx6O5DNf2goV',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAne0RmM9Isveu5WqxBSD9NNL7QI603DVMxITErF5OUffxVVXWTdOSm9rQEUHMtl7q1J8WAHp2s_qdsASirWbyCGbCadCFNw1ib2xdocOxCxl5GUDZFF0hO7VK11wvXrdfQZ_wc7huhoZVWfHqLpFrQy-DJFyiIA98QC6dccu1EjR-cXrGGytzrKmmnbXJpvWqKUajiBYqoRM7DI-Af8vs2FTAzz_yqFQTG2',
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-background-dark">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-40 py-24 lg:py-40 bg-white dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto text-center">
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
              Discover our story <span className="material-symbols-outlined">arrow_downward</span>
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
              className="w-full h-full object-cover grayscale contrast-125"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdVlxxHv0h7KRZWwD5ORlCHJOpt2PG3TLR01nGgfQ8D2FlqvN4KzuFRfMn8aRKZP_HCKz_9mcZAuP42ASLDrE4vZtc8K4yRoQST4cBnT79nltXhhR27NtfSOYOoQgpkxlOxBU9J6cqJItClFfF31CiPD2ZYxfrcxcRVWUAphpJYUy1mZqh3-0IW4NvxoPihypvpDcRmWCKUsoDelyRpwk4P07u7Q6oEsQ9oGlHeIgPbNY-gvAREd59hBjaApLfL88KPXxuWsiFWw"
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
            {philosophyCards.map((card, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                custom={i}
                className="p-10 bg-slate-50 dark:bg-midnight rounded-xl border border-slate-200 dark:border-white/10 transition-transform hover:-translate-y-2"
              >
                <span className="material-symbols-outlined text-4xl mb-6 text-primary dark:text-primary">{card.icon}</span>
                <h3 className="text-xl font-bold mb-3 text-midnight dark:text-white">{card.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={`https://images.unsplash.com/photo-${['1578500494', '1599922746', '1572365992', '1536882240'][i]}-${['c9e7e6d4', 'a2e93c8f', '8b9d5c3e', 'f1e9d8c2'][i]}?w=400&h=500&fit=crop`}
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
