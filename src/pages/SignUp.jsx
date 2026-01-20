
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Eye } from 'lucide-react';

const SignUp = () => {
  const [userType, setUserType] = useState(null);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        {/* Page Content */}
        <main className="flex flex-1 justify-center pt-32 pb-10 px-6">
          <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
            {/* PageHeading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center gap-4 mb-12"
            >
              <h1 className="text-midnight dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">Choose Your Path</h1>
              <p className="text-midnight/60 dark:text-white/60 text-lg font-normal max-w-lg">Join our exclusive community of elite artisans and visionary clients.</p>
            </motion.div>

            {/* Identity Selection Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Artisan Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => setUserType('artisan')}
                className={`group flex flex-col gap-6 rounded-xl border p-8 cursor-pointer shadow-sm transition-all ${userType === 'artisan'
                  ? 'border-midnight dark:border-white bg-midnight/5 dark:bg-white/5'
                  : 'border-midnight/10 dark:border-white/10 bg-white/40 dark:bg-midnight/20 hover:border-midnight/20'
                  }`}
              >
                <div className="bg-midnight text-white size-14 rounded-lg flex items-center justify-center">
                  <Building2 size={28} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-midnight dark:text-white text-xl font-black uppercase tracking-tight">I am an Artisan</h3>
                  <p className="text-midnight/70 dark:text-white/60 text-base font-normal leading-relaxed">Showcase your craft and connect with premium, world-class projects.</p>
                </div>
              </motion.div>

              {/* Client Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => setUserType('client')}
                className={`group flex flex-col gap-6 rounded-xl border p-8 cursor-pointer shadow-sm transition-all ${userType === 'client'
                  ? 'border-midnight dark:border-white bg-midnight/5 dark:bg-white/5'
                  : 'border-midnight/10 dark:border-white/10 bg-white/40 dark:bg-midnight/20 hover:border-midnight/20'
                  }`}
              >
                <div className="bg-midnight text-white size-14 rounded-lg flex items-center justify-center">
                  <Eye size={28} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-midnight dark:text-white text-xl font-black uppercase tracking-tight">I am a Client</h3>
                  <p className="text-midnight/70 dark:text-white/60 text-base font-normal leading-relaxed">Discover and hire the world's most skilled creators for your vision.</p>
                </div>
              </motion.div>
            </div>

            {/* Registration Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/40 dark:bg-midnight/20 rounded-2xl p-8 md:p-12 border border-midnight/5 dark:border-white/5 backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-midnight dark:text-white text-sm font-bold uppercase tracking-wider">Full Name</label>
                  <input className="form-input flex w-full rounded-lg text-midnight dark:text-white border border-midnight/10 dark:border-white/10 bg-white/60 dark:bg-midnight/20 focus:ring-1 focus:ring-midnight focus:border-midnight h-14 px-4 text-base font-normal" placeholder="Enter your full name" type="text" />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-midnight dark:text-white text-sm font-bold uppercase tracking-wider">Email Address</label>
                  <input className="form-input flex w-full rounded-lg text-midnight dark:text-white border border-midnight/10 dark:border-white/10 bg-white/60 dark:bg-midnight/20 focus:ring-1 focus:ring-midnight focus:border-midnight h-14 px-4 text-base font-normal" placeholder="name@domain.com" type="email" />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-midnight dark:text-white text-sm font-bold uppercase tracking-wider">Password</label>
                  <input className="form-input flex w-full rounded-lg text-midnight dark:text-white border border-midnight/10 dark:border-white/10 bg-white/60 dark:bg-midnight/20 focus:ring-1 focus:ring-midnight focus:border-midnight h-14 px-4 text-base font-normal" placeholder="Create a secure password" type="password" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-10">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary dark:bg-white text-midnight dark:text-midnight h-14 rounded-lg font-bold text-lg uppercase tracking-widest hover:opacity-90 transition-all"
                  type="button"
                >
                  Get Started
                </motion.button>
              </div>

              {/* Footer Links */}
              <div className="mt-8 text-center">
                <p className="text-midnight/40 dark:text-white/40 text-xs">
                  By signing up, you agree to our{' '}
                  <a href="#" className="underline hover:text-midnight/60 dark:hover:text-white/60">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="underline hover:text-midnight/60 dark:hover:text-white/60">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Footer Section */}
        <footer className="py-10 border-t border-midnight/5 dark:border-white/5">
          <div className="max-w-[1200px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-midnight/40 dark:text-white/40 text-sm font-medium">
              © 2024 NouRender. All rights reserved.
            </div>
            <div className="flex gap-8 text-midnight/40 dark:text-white/40 text-sm font-medium uppercase tracking-tighter">
              <a className="hover:text-midnight dark:hover:text-white transition-colors" href="#">Twitter</a>
              <a className="hover:text-midnight dark:hover:text-white transition-colors" href="#">Instagram</a>
              <a className="hover:text-midnight dark:hover:text-white transition-colors" href="#">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SignUp;
