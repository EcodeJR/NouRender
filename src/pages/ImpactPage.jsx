import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Quote,
    ArrowRight,
    CheckCircle2,
    Clock,
    MapPin,
    Star,
    ShieldCheck,
    Zap,
    Hammer,
    Droplets,
    Heart
} from 'lucide-react';

const ImpactPage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <main className="min-h-screen bg-white dark:bg-background-dark selection:bg-primary/30 overflow-hidden">
            {/* Hero Section */}
            <section className="relative px-6 lg:px-40 pt-32 pb-20">
                <div className="max-w-[1000px] mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-midnight dark:text-primary font-bold text-sm tracking-wide border border-primary/20"
                    >
                        Real Stories. Real Impact.
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-midnight dark:text-white leading-tight tracking-tight"
                    >
                        Stories that <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-slate-500 to-midnight dark:to-white">
                            Shape Abuja
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium"
                    >
                        NouRender isn't just a platform; it's a bridge. See how we're turning one-off jobs into lasting livelihoods and peace of mind.
                    </motion.p>
                </div>
            </section>

            {/* Artisan's Story: Umar */}
            <section className="relative px-6 lg:px-40 py-24 bg-midnight text-white dark:bg-white/5 dark:text-white rounded-[4rem] mx-4 lg:mx-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4 text-primary">
                            <div className="w-12 h-1 bg-primary rounded-full" />
                            <span className="font-black uppercase tracking-[0.2em] text-sm">The Artisan's Perspective</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black leading-tight">
                            The Hands That <br />Built Abuja.
                        </h2>

                        <div className="space-y-6 text-lg text-slate-300 dark:text-slate-300 font-medium leading-relaxed italic">
                            <Quote className="text-primary w-12 h-12 opacity-50 -mb-4" />
                            <p>
                                "He woke up at 4 a.m. every day, tools strapped to his old okada, scanning WhatsApp groups for a whisper of work."
                            </p>
                        </div>

                        <div className="space-y-4 text-slate-400 dark:text-slate-400 leading-relaxed">
                            <p>
                                Umar, a 32-year-old carpenter from Garki, has hands that can turn scrap wood into heirloom furniture—but mouths to feed at home and bills that didn't wait for inspiration.
                            </p>
                            <p>
                                After weeks of canceled jobs and ghosting clients, Umar found NouRender. No more haggling, no more chasing payments. His first match was a wardrobe job in Maitama with a vetted client and a secured deposit.
                            </p>
                            <p className="text-white dark:text-white font-bold">
                                "Payment hit his account instantly... for the first time in years, Umar slept without the knot in his stomach."
                            </p>
                        </div>

                        <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/10">
                            <div>
                                <span className="block text-3xl font-black text-primary">0%</span>
                                <span className="text-xs uppercase font-bold tracking-widest opacity-60">Revenue Fees</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-black text-primary">Vetted</span>
                                <span className="text-xs uppercase font-bold tracking-widest opacity-60">Client Matches</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop"
                                alt="Carpenter Umar"
                                className="w-full h-full object-cover dark:brightness-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent flex flex-col justify-end p-10">
                                <span className="text-primary font-black text-sm uppercase mb-2">Umar G.</span>
                                <p className="text-white text-xs font-bold opacity-60 uppercase tracking-widest">Master Carpenter, Garki</p>
                            </div>
                        </motion.div>
                        <div className="absolute top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-[3rem] -z-0" />
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-2xl shadow-xl text-midnight font-black text-sm z-20 flex items-center gap-3"
                        >
                            <Hammer size={20} /> New tools for his son.
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Client's Story: The 2 AM Emergency */}
            <section className="px-6 lg:px-40 py-32 lg:py-48">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl"
                            >
                                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" alt="Kitchen emergency" className="w-full h-full object-cover" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl mt-12"
                            >
                                <img src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vetted plumber arriving" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="order-1 lg:order-2 space-y-8"
                    >
                        <div className="flex items-center gap-4 text-blue-500">
                            <div className="w-12 h-1 bg-blue-500 rounded-full" />
                            <span className="font-black uppercase tracking-[0.2em] text-sm text-slate-500">The Client's Perspective</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black text-midnight dark:text-white leading-tight">
                            Chaos into <br /><span className="text-blue-500 italic">Calm.</span>
                        </h2>

                        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            "She was knee-deep in water at 2 a.m., flashlight in one hand, bucket in the other... The leak was turning her Abuja kitchen into a shallow lagoon."
                        </p>

                        <div className="space-y-4 text-slate-500 dark:text-slate-500 leading-relaxed">
                            <p>
                                Thirty-seven minutes later, a vetted plumber named Musa arrived. Calm as a master craftsman, he fixed the leak and explained the "why" without upselling nonsense.
                            </p>
                            <p className="text-midnight dark:text-white font-bold text-lg">
                                "By dawn, her home was dry, her child asleep, and she breathed for the first time that night."
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                                <ShieldCheck className="text-blue-500 w-8 h-8 shrink-0" />
                                <div>
                                    <h4 className="font-black text-midnight dark:text-white uppercase text-xs tracking-widest mb-1">We don't just connect, we curate.</h4>
                                    <p className="text-sm text-slate-500">Skill checks & portfolio reviews for every artisan.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                                <Clock className="text-blue-500 w-8 h-8 shrink-0" />
                                <div>
                                    <h4 className="font-black text-midnight dark:text-white uppercase text-xs tracking-widest mb-1">37 Minute Response</h4>
                                    <p className="text-sm text-slate-500">Finding reliable pros in records time when it matters most.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Impact Numbers */}
            <section className="px-6 lg:px-40 py-24 bg-primary rounded-[4rem] text-midnight text-center mx-4 lg:mx-12 overflow-hidden relative">
                <div className="relative z-10 space-y-12">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight">Turning One-off Jobs into <br />Lasting Partnerships.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1000px] mx-auto">
                        <div className="space-y-2">
                            <span className="block text-6xl font-black">90%</span>
                            <p className="font-bold uppercase text-xs tracking-[0.2em] opacity-60">Revenue Kept by Artisans</p>
                        </div>
                        <div className="space-y-2">
                            <span className="block text-6xl font-black">100%</span>
                            <p className="font-bold uppercase text-xs tracking-[0.2em] opacity-60">Vetted Connections</p>
                        </div>
                        <div className="space-y-2">
                            <span className="block text-6xl font-black">2026</span>
                            <p className="font-bold uppercase text-xs tracking-[0.2em] opacity-60">Launched in Abuja</p>
                        </div>
                    </div>

                    <div className="pt-8">
                        <Link to="/signup" className="inline-flex items-center gap-2 group px-10 py-5 bg-midnight text-white font-black rounded-2xl hover:scale-105 transition-all text-sm uppercase tracking-widest">
                            Start Your Story <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final Quote */}
            <section className="px-6 lg:px-40 py-40 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <Heart className="mx-auto text-primary w-12 h-12 fill-primary/20" />
                    <p className="text-2xl md:text-4xl font-black text-midnight dark:text-white leading-tight italic">
                        "Whether you're an artisan seeking steady gigs or a client needing trusted help, join us and forge better connections today."
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 pt-8">
                        <Link to="/signup" className="flex items-center gap-2 text-midnight dark:text-white font-black border-b-2 border-primary pb-1 hover:gap-4 transition-all uppercase text-xs tracking-widest">
                            Join as Artisan
                        </Link>
                        <Link to="/waitlist" className="flex items-center gap-2 text-midnight dark:text-white font-black border-b-2 border-primary pb-1 hover:gap-4 transition-all uppercase text-xs tracking-widest">
                            Post a Job
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default ImpactPage;
