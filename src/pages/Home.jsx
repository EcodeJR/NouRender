
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slopes font-display transition-colors duration-300">
      {/* Header */}
      <header className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-800/40 rounded-3xl p-8 lg:p-16 border border-slate-100 dark:border-white/5 shadow-2xl relative"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold mb-6">
                  <span>✓</span>
                  CURATED ARTISAN NETWORK
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
                  Empowering Brands <br/>
                  <span className="text-blue-600 dark:text-blue-400 italic font-serif font-medium">Through Creative</span> <br/>
                  Solutions
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mb-10 leading-relaxed">
                  Connect with the world's most talented independent artisans to bring your premium visions to life. Minimal, refined, and professional.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-600/20 hover:translate-y-[-2px] transition-all">
                    Innovate Your Brand
                  </button>
                  <div className="flex items-center gap-4 px-6 border border-slate-200 dark:border-white/10 rounded-full">
                    <span className="font-bold">10 Years</span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest">Experience</span>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-3 translate-x-4 group">
                  <img 
                    alt="Professional Artisan" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj0JkhjBpgJdFX1bwUsi6biCw4S8d4OqThcqSUdYesD0ksvTGpoWsqNV1x2eKP9YM-f2xQiA-jiCPdlqFl6R-cRJsguJumfk6JlIF400MoF17gsMWDVCuyp0IYjLrM0bZ-Puj15jLUNwq0QTN7u9IdXxNKANUgakpEBMBe-SR24HZ36cQsgPtxbcewSIRpEdFBXIn54_5-cyDlpMcu9iDAvFLdjVvZZbI5PCAJq8o7ZmWuoauJnDXR9j-QUpUHU16Sq_nANPARLg" 
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 -rotate-3">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="font-bold">"Exceptional quality and speed."</p>
                  <p className="text-sm text-slate-400 dark:text-slate-500">Sarah Jenkins, Creative Director</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white rounded-[2.5rem] p-12 shadow-2xl"
          >
            <div className="text-center md:border-r border-white/10">
              <h3 className="text-4xl font-extrabold mb-1">2000+</h3>
              <p className="text-slate-400 text-sm uppercase tracking-widest">Projects Done</p>
            </div>
            <div className="text-center md:border-r border-white/10">
              <h3 className="text-4xl font-extrabold mb-1">10+</h3>
              <p className="text-slate-400 text-sm uppercase tracking-widest">Years Exp.</p>
            </div>
            <div className="text-center md:border-r border-white/10">
              <h3 className="text-4xl font-extrabold mb-1">800+</h3>
              <p className="text-slate-400 text-sm uppercase tracking-widest">Digital Hours</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-extrabold mb-1">150M+</h3>
              <p className="text-slate-400 text-sm uppercase tracking-widest">Tracked Revenue</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Masterpieces Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-20 items-end mb-20"
          >
            <h2 className="text-5xl font-extrabold leading-tight">
              Turning Ideas Into <br/>
              <span className="text-blue-600 dark:text-blue-400 italic font-serif font-medium">Masterpieces</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-md">
              We bridge the gap between visionary thinking and flawless execution. Our curated collective of artisans ensures every pixel and every stroke aligns with your brand's essence.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-8 group relative overflow-hidden rounded-3xl h-[500px]"
            >
              <img 
                alt="Team Collaboration" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC39U0okVv5lIDoUgBnPuQwuz4FfngtdgBAZaS9cX7H57ObVqhI_tHhMy3zJ_Ud5BoiG_q7AC3WCQZDT_TQqApmr6_kF5HBp04YT426tvY6rFz8S9QskADrEOXbaeqhjBQPonqinq9QlfufZh1R5_mscfdiXpQtfnCAiimLXnYSlJ1H61DBcUASeXyBoUQG1KauJXPyr7Y7LmjOlvyGPnJRxOssKToXrDjyz453I1pYeUuGBgOGaYVPCJrluHCLL5o3KtkeXInZRQ" 
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10">
                <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold w-fit mb-4">CREATIVE AGENCY</span>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Strategic Design Planning</h4>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 group relative overflow-hidden rounded-3xl h-[500px]"
            >
              <img 
                alt="Office Space" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvE4nGHnoG6ImHpGU7MJaBsLgmq0AKPU5Eg2W5QXXaJLtKFAQ_kv_5etbZ1c-R17dboQ1PIBsmkrUUynmNhPHiMG5OqJwA-x1Jz7AsJCVHND_VQmGq7erWa_ZRBqw-WqPR5wjMe5xB40BbB8RDI5g2K0IshGCm3_V1L9-8jMc6pAXU4kXFPXm4gDWGdDeeYWG1xKIjTGkGo3kkyuI-unn6VhXKM33F0FFil6uyjv_ZRsZHCkGTRiBONc5cfUYQrWqq7U6bTOq6Kw" 
                />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white text-slate-900 p-4 rounded-full shadow-xl">
                  ▶
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-md text-[10px] font-bold tracking-widest uppercase mb-4">OUR SERVICES</div>
              <h2 className="text-4xl font-extrabold">Exquisite Capabilities</h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm">
              We offer a range of creative and digital services designed to make your brand stand out from the noise.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Services List */}
            <div className="lg:col-span-1 space-y-4">
              {[
                { num: '01', title: 'UI/UX Design' },
                { num: '02', title: 'Web Development' },
                { num: '03', title: '3D Designs' },
                { num: '04', title: 'Motion Graphics' }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-white/5 flex items-center justify-between hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-slate-400 group-hover:text-white/60 font-mono text-sm">{service.num}</span>
                    <span className="font-bold group-hover:text-white">{service.title}</span>
                  </div>
                  <span className="text-slate-300 group-hover:text-white">→</span>
                </motion.div>
              ))}
            </div>

            {/* Middle Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-white/5"
            >
              <img 
                alt="Process detail" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlGlzzqVwNiXdhZ3JQ4vCyO7-7LhAL_A1Q7oSm_Csog1BDhFW8aTceV8aPTqtTpYf8No4UqvfosiVk7a_dVU-ET9dbVYGO-WHKvyS4DfNCN6guwyHO6rWR7bijdfbeUgT0qrGNkZkKh1nS5W3F6l7ic4Vvj5HoIaa9-8zuYH5qS2gIiij_c9vNzkUlK6bpbiGaJoFMRtyjg8ybQ_vojcG9IybA234V_8iVAKrcTVRbtpW10Ch25M3yk-LmusJjDFjUkFEx7INTuA" 
                />
            </motion.div>

            {/* Right Side Info */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/5"
              >
                <h4 className="text-xl font-bold mb-4">See how we work</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Ever wondered how design magic happens? Our process is transparent, agile, and results-driven.</p>
                <Link to="/how-it-works" className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 group">
                  Our Process <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-3xl bg-blue-600 text-white flex flex-col justify-between h-56"
              >
                <h4 className="text-xl font-bold">Looking for design experts who can bring your vision to life?</h4>
                <Link to="/artisans" className="bg-white text-blue-600 w-fit px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                  Meet our expert <span>↗</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-12 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap gap-12 animate-marquee">
          {[1, 2].map((i) => (
            <React.Fragment key={i}>
              <span className="text-4xl lg:text-6xl font-extrabold uppercase opacity-10">Innovate</span>
              <span className="text-4xl lg:text-6xl font-extrabold uppercase opacity-10">+</span>
              <span className="text-4xl lg:text-6xl font-extrabold uppercase opacity-10">Inspire</span>
              <span className="text-4xl lg:text-6xl font-extrabold uppercase opacity-10">+</span>
              <span className="text-4xl lg:text-6xl font-extrabold uppercase opacity-10">Create</span>
              <span className="text-4xl lg:text-6xl font-extrabold uppercase opacity-10">+</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Artisans Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-16"
          >
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-md text-[10px] font-bold tracking-widest uppercase mb-4">MEET OUR TALENT</div>
              <h2 className="text-4xl font-extrabold mb-4">Curated Artisan Collective</h2>
              <p className="text-slate-500 dark:text-slate-400">Hand-picked professionals with a proven track record of excellence.</p>
            </div>
            <div className="flex gap-4">
              <button className="p-4 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5">←</button>
              <button className="p-4 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5">→</button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Elena Rodriguez',
                role: 'UI/UX',
                desc: 'Specializing in minimal high-conversion interfaces for fintech brands.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTw94icarGohnqeAzlN3CBsHxXSCZ5KUiGCbYoYmoMFxh3PB8qL45_QC238FvDGpPrR3gjSe3O2VyspFVJPhFbhgXg7QAPlr9Z0Io2_bCWEOHDAeZ8GsSK5WBf6PqUTfQuLfXSqXsGiPvkPVVp0aUomVWs8UNRuw_Rv6jm7uSWHuosrOFLYc0Kl1celWqTdZb80shb7qw5SDBI6aBvn-5NrRTCgmig8ioIoKH5dR-1VlkY66Ipf4UoOleKz4I6uaDsoM0RwAxp3Q',
                projects: 12
              },
              {
                name: 'Marcus Chen',
                role: '3D Artist',
                desc: 'Creating hyper-realistic product visualizations for luxury lifestyle products.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-CJVe1_UOY_mBXLowiQjJawY3Qv7koX8qeAgDu4j56wNTZGCG8uTqdKVFcQvDbfv_n4ZcTM_J0Xj7dXaILsIYkHWWFAIhaCJv-MZp-N0Jkw-2g-htJzvam87zgSMvm8WyesT_AM-G9UWh2ZC1ic0zbqLx4_J2e0DZmU_Ts47LZ5XVaSqzQSkLSIP7LhcNzurWQtVyKW_CUNSja2PWJrf9kKRhxP0IV05r4uToRtu5a-hCOeoAFHXUhy6q4yHtAfRqv8D4JQDLUQ',
                projects: 5
              },
              {
                name: 'Alina Volkov',
                role: 'Branding',
                desc: 'Crafting unique brand identities that resonate with premium global audiences.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXMk-nsi1pFw9d7MO7h6lJ6FhqRtTJ4RG8iyZoZdpcp8OVMuBIwys4umdwZ5CPSV3SoyvjED5fb78nCoHpVjoiKh94khQ9PCC0Fy3JPKK0WgbFKZT2fhyRic5UBEmUVlHqq5UgzRs7po6VYcqTPWLYX_CCo4a3KXJGgEQ75SVljE7Dupk8yHWO7S0AhRKuefHrHebqTrRtwZfuJD9UtY3TvfPsOci4PZ6WByMp9BkE01j7LD3lILnPDaU2_eJK5m8NCkUfkfmEKA',
                projects: 8
              }
            ].map((artisan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm group hover:shadow-xl transition-all"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                  <img alt={artisan.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={artisan.img} />
                </div>
                <div className="px-2 pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">{artisan.name}</h4>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{artisan.role}</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{artisan.desc}</p>
                  <div className="flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((j) => (
                        <div key={j} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200"></div>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">{artisan.projects} Active Projects</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-100 dark:bg-slate-900 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full -z-0 opacity-20 pointer-events-none">
              <img alt="Tech Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAo0DCS2SJj_Ns49ZDYWBNzxpgo4LD4EeMhGU2DkpA7PHCB1EGbQ_cJTfTGgOe6F9b3USjTlxJo2GRhTsMJDGRWoG0mZf_mZ62mTQlBrugbcdXL2FwgPkAtByMvT3gH_amY5i0aFdtopXAcJ3uCM8JrcnhzZGGs7KOXYOMXRIb56VRStx9M7r-NSnptcjGqihxTMUwY1AcpM5FuB-IVUfp9L60r7L-dP_fbU2MImBoQ1rfKPB4s5kL04FqHuHs51MKm-R0jnwoyw" />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
                  Get in Touch <br/>
                  <span className="text-blue-400 italic font-serif font-medium">Today!</span>
                </h2>
                <div className="space-y-4 mb-10">
                  <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full Name" type="text"/>
                  <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address" type="email"/>
                  <button className="bg-blue-600 text-white w-full py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors">Submit Request</button>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <img alt="Contact Specialist" className="w-72 h-96 object-cover rounded-[2rem] shadow-2xl ml-auto border-8 border-white/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYWhncwCs1erui-uCoKBjWKy1qnyMVgTYKuU411WM8ajomxapZNOeRu6VNc1DxjRLYrtC16FVH5obb2vWopa6IU7wU1yeNH5AsGaAMxr2AAGzq6ciNrC6aPtmQm8ziQg-9Ezb8dYJAbyG1lC-6cvzMQAdnvhGKMwTHS7T33OJVsHto_NQgyAlUuGiBAaDZltMzdGC0qyCNSRhvMAI4czVaP4DHGz5mUkqlumDmdegVKtgPFkpMxAmc47x9zFAbtgkdLPYOhO-MXg" />
                  <div className="absolute -bottom-10 right-20 bg-blue-600 text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                    <p className="text-sm font-bold">"Our specialists are ready to guide your project."</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;