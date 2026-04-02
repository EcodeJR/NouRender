
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Handshake,
  Banknote,
  Target,
  ShieldCheck,
  Users,
} from 'lucide-react';

const AboutPage = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const stats = [
    { label: 'Founded', value: '2026' },
    { label: 'Location', value: 'Abuja' },
    { label: 'Focus', value: 'Vetted Pros' },
    { label: 'Revenue', value: '90% to Artisans' },
  ];

  const differentiators = [
    {
      icon: Target,
      title: 'ARTISAN-FIRST FOCUS',
      description: 'We start small and local, specializing in high-demand trades like plumbing, electrical work, carpentry, and beauty in Abuja.',
    },
    {
      icon: ShieldCheck,
      title: 'REAL VETTING FOR TRUST',
      description: 'Every artisan goes through skill checks, portfolio reviews, and quick assessments. Clients see only reliable pros.',
    },
    {
      icon: Handshake,
      title: 'MANUAL MATCHING',
      description: 'We handle early matches personally – ensuring great fits and learning what works before automating for scale.',
    },
    {
      icon: Banknote,
      title: 'FAIR PRICING',
      description: 'No hidden fees. A small monthly fee for premium access and a fair 10% success fee on completed jobs.',
    },
    {
      icon: Users,
      title: 'COMMUNITY-DRIVEN',
      description: 'Leveraging local networks and events in Abuja to grow. We build lasting partnerships, not just one-off jobs.',
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-background-dark font-sans selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-40 pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-midnight dark:text-primary font-bold text-sm tracking-wide border border-primary/20">
              <MapPin size={16} /> Abuja's Dedicated Artisan Platform
            </div>
            <h1 className="text-midnight dark:text-white text-5xl md:text-8xl font-black leading-[1.1] tracking-tight">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-midnight via-slate-600 to-primary dark:from-white dark:via-primary dark:to-white">
                NouRender
              </span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
              Connecting Abuja's skilled artisans with local jobs and clients who need reliable, hands-on expertise. simple, fair, and fast.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/signup" className="px-8 py-4 bg-midnight dark:bg-primary text-white dark:text-midnight font-bold rounded-xl hover:scale-105 transition-transform">
                Join our waitlist
              </Link>
              <a href="#story" className="px-8 py-4 border border-midnight dark:border-white/20 text-midnight dark:text-white font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                Our Story
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Quick Look */}
      <section className="px-6 lg:px-40 py-12 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <span className="block text-3xl font-black text-midnight dark:text-white mb-1">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 lg:px-40 py-24 lg:py-40">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="space-y-4"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-dark">
                <Target size={28} />
              </div>
              <h2 className="text-4xl font-black text-midnight dark:text-white">Our Mission</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                To bridge the gap between skilled artisans and everyday needs in Abuja – ensuring every match is trustworthy, fast, efficient, and beneficial for both sides. We prioritize real skills over hype, helping artisans earn steadily while giving clients peace of mind.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="space-y-4"
            >
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500">
                <Eye size={28} />
              </div>
              <h2 className="text-4xl font-black text-midnight dark:text-white">Our Vision</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                A thriving local economy where artisans across Nigeria access better opportunities without the grind, and clients get top-notch work every time. We aim to expand nationwide, blending human touch with smart tools for a sustainable artisan gig economy.
              </p>
            </motion.div>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1742900280861-32bed068938b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Artisan working" className="w-full h-full object-cover dark:brightness-75" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl translate-y-12"
            >
              <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop" alt="Stylist at work" className="w-full h-full object-cover dark:brightness-75" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="px-6 lg:px-40 py-24 bg-midnight text-white dark:bg-white dark:text-midnight rounded-[3rem] mx-4 lg:mx-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">What Sets Us Apart</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 dark:bg-midnight/5 border border-white/10 dark:border-midnight/10 hover:border-primary transition-colors group"
              >
                <item.icon className="w-12 h-12 mb-6 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-400 dark:text-slate-600 leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="px-6 lg:px-40 py-24 lg:py-40">
        <div className="max-w-[800px] mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-primary rounded-2xl mx-auto flex items-center justify-center text-midnight rotate-3"
          >
            <Briefcase size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-midnight dark:text-white">OUR STORY</h2>
          <div className="space-y-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed text-left md:text-center">
            <p>
              Based in Abuja, we saw firsthand how skilled artisans struggle with inconsistent work while clients deal with unreliable hires. Drawing from Nigeria's booming construction and beauty sectors, NouRender launched as a simple solution: a platform that vets, matches, and supports.
            </p>
            <p className="font-bold text-midnight dark:text-white pb-2 border-b-2 border-primary w-fit mx-auto">
              Founded in 2026, we're changing the game.
            </p>
            <p>
              In a city where construction booms and beauty services are always in demand, we saw the gap: too many unreliable matches, endless referrals, and wasted talent. We're committed to real impact – one great job at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Trades Carousel / Grid */}
      <section className="px-6 lg:px-40 py-12 pb-32">
        <div className="max-w-[1200px] mx-auto text-center space-y-12">
          <h3 className="text-2xl font-black text-slate-400 uppercase tracking-[0.2em]">High-Demand Trades</h3>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 contrast-125 dark:invert">
            <div className="flex flex-col items-center gap-3">
              <Wrench size={40} />
              <span className="text-xs font-bold tracking-widest">PLUMBING</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Zap size={40} />
              <span className="text-xs font-bold tracking-widest">ELECTRICAL</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Hammer size={40} />
              <span className="text-xs font-bold tracking-widest">CARPENTRY</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Scissors size={40} />
              <span className="text-xs font-bold tracking-widest">BEAUTY/HAIR</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-40 py-24 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-[1000px] mx-auto p-12 lg:p-20 bg-primary rounded-[3rem] text-midnight text-center space-y-10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-50" />

          <h2 className="text-5xl md:text-7xl font-black leading-tight relative z-10">
            Skills meet <br /> opportunity. <span className="opacity-40 italic">Locally.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <Link to="/contact" className="group flex flex-col items-center gap-4 p-6 bg-white/90 hover:bg-white rounded-2xl transition-all hover:shadow-xl">
              <Mail className="w-8 h-8 group-hover:scale-125 transition-transform" />
              <span className="font-black uppercase text-xs tracking-widest">Contact Us</span>
            </Link>
            <Link to="/signup" className="group flex flex-col items-center gap-4 p-6 bg-midnight text-white hover:bg-slate-900 rounded-2xl transition-all hover:shadow-xl">
              <UserPlus className="w-8 h-8 group-hover:scale-125 transition-transform text-primary" />
              <span className="font-black uppercase text-xs tracking-widest">Join as Artisan</span>
            </Link>
            <Link to="/signup" className="group flex flex-col items-center gap-4 p-6 bg-white/90 hover:bg-white rounded-2xl transition-all hover:shadow-xl">
              <Briefcase className="w-8 h-8 group-hover:scale-125 transition-transform" />
              <span className="font-black uppercase text-xs tracking-widest">Post a Job</span>
            </Link>
          </div>

          <p className="text-sm font-bold opacity-60 relative z-10">
            Join Abuja's most trusted artisan network today.
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;

