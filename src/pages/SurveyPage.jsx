/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { CheckCircle, MessageSquare, Zap } from 'lucide-react';

const SurveyPage = () => {
  // TODO: Add your survey form link here
  const SURVEY_FORM_URL = 'https://forms.example.com/survey'; // Replace with actual survey link

  const handleTakeSurvey = () => {
    if (SURVEY_FORM_URL === 'https://forms.example.com/survey') {
      alert('Survey link not yet configured. Please add the link in SurveyPage.jsx');
      return;
    }
    window.open(SURVEY_FORM_URL, '_blank');
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-white dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        {/* Hero Section */}
        <div className="px-4 lg:px-40 flex justify-center pt-32 pb-5">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <div className="relative overflow-hidden rounded-2xl h-[500px] md:h-[600px] flex flex-col items-center justify-center text-center p-6 shadow-lg">
              <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'linear-gradient(rgba(15, 15, 35, 0.7) 0%, rgba(15, 15, 35, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuATDRiTOLy310f4HQRP9ac67XaRLEWnfP-xuvFsnn-8g25lPipgHccaEwE2KS0WQUECEav9Xxm8XvFk3dGbH3cSl91Vx9p2iVt5I0gFdU7scurjUVRHkqvMv1cF-t3wVT8tbugcVhvQfe2YTPWJBmldT91baMJlPVFzsTc2w9CX5hmM4ki0kqEvLEPDLrHK5Ui-3VBP-FZKsroWlFI8aiis56YUdajByRuuSYVdsHHGVEzynuysOxmvzXZg9yYXHMMicXSUChOazg")'
                }}
              />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-[700px] flex flex-col gap-4"
              >
                <h1 className="text-white dark:text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                  Help Shape Our Future
                </h1>
                <p className="text-white/80 dark:text-white/80 text-lg font-medium leading-relaxed max-w-[500px] mx-auto">
                  Your feedback is invaluable. Share your insights and help us create the platform artisans and clients deserve.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative z-10 mt-8"
              >
                <button
                  onClick={handleTakeSurvey}
                  className="bg-primary text-midnight px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-primary/20 hover:bg-primary/90 hover:translate-y-[-2px] transition-all"
                >
                  Take Survey Now
                </button>
                <p className="text-white/70 dark:text-white/70 text-xs mt-4 font-medium uppercase tracking-widest">
                  Estimated time: 3-5 minutes
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Why Your Feedback Matters Section */}
        <section className="px-4 lg:px-40 flex justify-center py-20">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4 text-left">
                <h2 className="text-primary dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight">
                  Why Your Feedback Matters
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg font-normal leading-normal max-w-[600px]">
                  We're building NouRender with artisans and clients at the heart. Your opinions directly influence our roadmap.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: CheckCircle, title: 'Direct Input', desc: 'Your responses shape feature priorities and platform improvements.' },
                  { icon: MessageSquare, title: 'Your Voice Matters', desc: 'Every response is reviewed and considered by our leadership team.' },
                  { icon: Zap, title: 'Be Part of Innovation', desc: 'Help us build the next standard in artisan-brand collaboration.' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col gap-4 rounded-xl border border-primary/10 bg-primary/5 dark:bg-midnight/20 p-8 hover:bg-primary/10 dark:hover:bg-midnight/30 transition-all text-left"
                  >
                    <item.icon className="w-8 h-8 text-primary" />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-primary dark:text-white text-xl font-bold leading-tight">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Survey Preview Section */}
        <section className="px-4 lg:px-40 flex justify-center py-20 bg-primary/5 dark:bg-midnight/20">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4 text-center">
                <h2 className="text-primary dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight">
                  What We'll Ask
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg font-normal leading-normal max-w-[600px] mx-auto">
                  Our survey covers your experience, expectations, and vision for the future of artisan collaboration.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Your role in the creative industry',
                  'Key challenges you face today',
                  'Features you\'d like to see',
                  'How we can serve you better'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-6 rounded-lg border border-primary/20 bg-white dark:bg-background-dark"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <p className="text-slate-700 dark:text-slate-300 font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 lg:px-40 flex justify-center py-20">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-6 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-midnight/40 dark:to-midnight/20 rounded-2xl p-12"
            >
              <h2 className="text-primary dark:text-white text-4xl md:text-5xl font-black leading-tight">
                Your Voice. Our Future.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg max-w-[600px]">
                Take just 3-5 minutes to share your thoughts. Every response helps us build something exceptional.
              </p>
              <button
                onClick={handleTakeSurvey}
                className="bg-primary text-white px-10 py-4 rounded-full font-bold text-base shadow-lg shadow-primary/30 hover:bg-primary/90 hover:translate-y-[-2px] transition-all"
              >
                Take Survey Now
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SurveyPage;
