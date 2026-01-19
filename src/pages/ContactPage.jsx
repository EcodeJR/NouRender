import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-white dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        {/* Hero Image Section */}
        <div className="px-4 lg:px-40 flex justify-center">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <div className="@container">
              <div className="py-3">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[300px] relative"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(211, 209, 206, 0.4), rgba(211, 209, 206, 0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuATDRiTOLy310f4HQRP9ac67XaRLEWnfP-xuvFsnn-8g25lPipgHccaEwE2KS0WQUECEav9Xxm8XvFk3dGbH3cSl91Vx9p2iVt5I0gFdU7scurjUVRHkqvMv1cF-t3wVT8tbugcVhvQfe2YTPWJBmldT91baMJlPVFzsTc2w9CX5hmM4ki0kqEvLEPDLrHK5Ui-3VBP-FZKsroWlFI8aiis56YUdajByRuuSYVdsHHGVEzynuysOxmvzXZg9yYXHMMicXSUChOazg")'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <main className="px-4 lg:px-40 flex justify-center py-10">
          <div className="layout-content-container flex flex-col md:flex-row max-w-[1200px] flex-1 gap-12 lg:gap-24">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col flex-1"
            >
              <h1 className="text-primary dark:text-white text-[40px] font-bold leading-tight tracking-[-0.02em] pb-4">
                Get in Touch
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-lg font-normal leading-relaxed pb-8 max-w-md">
                Have a project in mind? Reach out to our team and let's create something remarkable together.
              </p>

              <div className="flex flex-col gap-2">
                {/* Email Item */}
                <div className="flex items-center gap-4 py-4 border-b border-primary/5">
                  <div className="text-primary flex items-center justify-center rounded-lg bg-slopes/30 shrink-0 size-12">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-primary dark:text-white text-base font-semibold leading-normal">Email</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm font-normal">hello@nourender.com</p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-4 py-4 border-b border-primary/5">
                  <div className="text-primary flex items-center justify-center rounded-lg bg-slopes/30 shrink-0 size-12">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-primary dark:text-white text-base font-semibold leading-normal">Studio HQ</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm font-normal">Remote Global / Zurich, Switzerland</p>
                  </div>
                </div>

                {/* Support Item */}
                <div className="flex items-center gap-4 py-4">
                  <div className="text-primary flex items-center justify-center rounded-lg bg-slopes/30 shrink-0 size-12">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-primary dark:text-white text-base font-semibold leading-normal">Availability</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm font-normal">Responds within 24 hours.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className="bg-white/40 dark:bg-background-dark/40 p-8 rounded-xl shadow-sm border border-white/20 dark:border-white/5">
                <form action="#" className="flex flex-col gap-6" method="POST">
                  <div className="flex flex-col gap-2">
                    <label className="text-primary dark:text-white text-sm font-bold uppercase tracking-wider">Full Name</label>
                    <input className="w-full h-12 px-4 bg-slopes/20 dark:bg-midnight/20 border-none rounded-lg focus:ring-2 focus:ring-primary text-primary placeholder-apres-ski/60 dark:placeholder-white/40" placeholder="Your Name" type="text" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-primary dark:text-white text-sm font-bold uppercase tracking-wider">Email Address</label>
                    <input className="w-full h-12 px-4 bg-slopes/20 dark:bg-midnight/20 border-none rounded-lg focus:ring-2 focus:ring-primary text-primary placeholder-apres-ski/60 dark:placeholder-white/40" placeholder="email@example.com" type="email" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-primary dark:text-white text-sm font-bold uppercase tracking-wider">Service Type</label>
                    <select className="w-full h-12 px-4 bg-slopes/20 dark:bg-midnight/20 border-none rounded-lg focus:ring-2 focus:ring-primary text-primary">
                      <option>Select a service</option>
                      <option>Custom Furniture</option>
                      <option>Architectural Visualization</option>
                      <option>Interior Styling</option>
                      <option>Industrial Design</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-primary dark:text-white text-sm font-bold uppercase tracking-wider">Message</label>
                    <textarea className="w-full px-4 py-3 bg-slopes/20 dark:bg-midnight/20 border-none rounded-lg focus:ring-2 focus:ring-primary text-primary placeholder-apres-ski/60 dark:placeholder-white/40 resize-none" placeholder="Tell us about your project..." rows={4}></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-primary text-white h-12 rounded-lg font-bold uppercase text-sm tracking-widest hover:opacity-90 transition-all"
                    type="button"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
