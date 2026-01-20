
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-light dark:bg-midnight text-slate-900 dark:text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-4 h-4 bg-primary rounded-full"></div>
            <span className="font-display font-bold text-2xl tracking-tight">NouRender</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed mb-8">
            The premier destination for high-end artisan hiring. We bridge the gap between creative vision and technical execution.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-midnight transition-colors text-slate-900 dark:text-white" href="#">
              <Globe size={18} />
            </a>
            <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-midnight transition-colors text-slate-900 dark:text-white" href="#">
              <Camera size={18} />
            </a>
          </div>
        </div>

        <div>
          <h6 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-600 dark:text-slate-500">Platform</h6>
          <ul className="space-y-4 text-slate-600 dark:text-slate-400">
            <li><a className="hover:text-primary" href="#">How it works</a></li>
            <li><a className="hover:text-primary" href="#">Safety</a></li>
            <li><a className="hover:text-primary" href="#">Pricing</a></li>
            <li><a className="hover:text-primary" href="#">Curator Team</a></li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-600 dark:text-slate-500">Talent</h6>
          <ul className="space-y-4 text-slate-600 dark:text-slate-400">
            <li><a className="hover:text-primary" href="#">Apply as Artisan</a></li>
            <li><a className="hover:text-primary" href="#">Portfolio Tips</a></li>
            <li><a className="hover:text-primary" href="#">Education</a></li>
            <li><a className="hover:text-primary" href="#">Community</a></li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-600 dark:text-slate-500">Legal</h6>
          <ul className="space-y-4 text-slate-600 dark:text-slate-400">
            <li><a className="hover:text-primary" href="#">Privacy</a></li>
            <li><a className="hover:text-primary" href="#">Terms</a></li>
            <li><a className="hover:text-primary" href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <p>© 2024 NouRender Platform. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="hover:text-midnight dark:hover:text-white" href="#">Twitter</a>
          <a className="hover:text-midnight dark:hover:text-white" href="#">LinkedIn</a>
          <a className="hover:text-midnight dark:hover:text-white" href="#">Behance</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
