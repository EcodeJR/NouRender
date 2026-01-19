
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ isDark, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    // { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'For Artisans', path: '/for-artisans' },
    { name: 'For Clients', path: '/for-clients' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Join Waitlist', path: '/waitlist' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="bg-white dark:bg-midnight/80 backdrop-blur-md border border-gray-200 dark:border-white/10 px-8 py-4 rounded-full flex items-center justify-between shadow-lg dark:shadow-2xl">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <Link to="/" className="font-display font-bold text-xl text-midnight dark:text-white tracking-tight">
            NouRender
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-primary transition-colors ${
                location.pathname === link.path ? 'text-primary' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button & Mobile Menu */}
        <div className="flex items-center gap-4"><button
            onClick={toggleDarkMode}
            className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors p-1"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/login" className="hidden md:inline text-slate-600 dark:text-slate-300 hover:text-primary text-sm font-medium transition-colors">
            Log in
          </Link>
          <Link to="/signup" className="bg-primary text-midnight px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
            Sign up
          </Link>
          
          <button 
            className="md:hidden text-midnight dark:text-white p-1" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white dark:bg-midnight/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg dark:shadow-2xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-600 dark:text-slate-300 font-medium transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleDarkMode();
                  setIsOpen(false);
                }}
                className="text-slate-600 dark:text-slate-300 font-medium transition-colors hover:text-primary flex items-center gap-2"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
              <Link 
                to="/login"
                onClick={() => setIsOpen(false)}
                className="text-slate-600 dark:text-slate-300 font-medium transition-colors hover:text-primary"
              >
                Log in
              </Link>
              <Link 
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-midnight px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform w-full text-center"
              >
                Sign up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
