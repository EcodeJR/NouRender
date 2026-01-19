import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gem, Zap, Users, BarChart3, Quote } from 'lucide-react';

const ForArtisans = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        {/* Hero Section */}
        <section className="px-4 lg:px-40 flex justify-center py-20 pt-32">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full w-fit">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-primary">Now Accepting Applications</span>
                </div>

                <h1 className="font-display text-5xl lg:text-7xl font-black leading-[1.1] tracking-[-0.033em] text-primary dark:text-white">
                  Where Elite <br />
                  <span className="italic text-primary">Artisans</span> Meet <br />
                  Masterpieces.
                </h1>

                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                  Join an exclusive collective of high-tier creators. We connect the world's most talented artisans with high-stakes projects that demand excellence.
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-midnight dark:bg-primary text-white dark:text-midnight px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all flex items-center gap-2 group"
                  >
                    Apply as an Artisan
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-2xl font-bold text-lg border border-primary dark:border-white text-primary dark:text-white hover:bg-primary/5 dark:hover:bg-white/5 transition-colors"
                  >
                    View Standards
                  </motion.button>
                </div>
              </motion.div>

              {/* Right: Image with Overlay */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-full"
              >
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl z-10">
                  <img 
                    alt="Artisan working on high-end design" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuChBxQpvUzTMKWmGhH-EKWobEroymHXV4ItNNyzc1pc3mfohanK0TU1G1AirhEQgtVUWGNr9oN2tMsXqvJBBdVAHdlaaHy99s1c8qrr5l478JOj7ZfX4BizAjBYnf6KvlyTDU-oMyMhmqkfhQiu7JCartH8EVNm15FICqsZX08IY6VBLUnPw0DuXAG9DO3J_B87_9mWPhavJOfV_lIgS537Jd9pqxspVUs-DucIfzsPxjTHN3DNKvYETZIpxhPRgv9qxbMRUcEszQ"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent flex items-end p-10">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl w-full">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex -space-x-3">
                          <img alt="Artisan profile" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByJS83aJfHRgyITocdm4o41SzahizGeV2C0aegiVNVWbrj_VlYvQuGEnMgccjuqM6Nd5iwC_7Nbt8V7gF3MucJMsr9LoW1IQJFDuOGuO-jpGe0OM38xQquaOsIVpxuX9fRsu-vwgxwuXh5i1Fjr-WniOMl2_qhp33pzvs2jl3BFx5Et2IOWHKraJ8d7PYelJmXWYfZzKhXFt9Jm3PflhBSI7w_eE8H-whU1VSyhEwl98S51uDDewuKRkE5bzLGTf5KM5gz5XZFMw" />
                          <img alt="Artisan profile" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGrUgIXR_zMxnlKWWoBkUO9PdSpKn3dhlja_hwHAwLKqVAQEZJ-eBmX6O3_RibYJnyuSJ_6gZe4X_lfDy5VRB5ExFFGKEot6GIgDQOcIgZE6vpszIYOvl8yoTzOqIx6FRFOxCJVdgSKUy6ThQTzxnOmgNmKhlhWDwA7BLDw5sHZnyxg2vFUN9fFi_TXi2DJLxr8v4mI_DYgF6jgthboLNSAxKiWR-Jx2VtpR4UL-j2Al7pKUD7lyS-bSNE8AzLGURzNeFOvoEfhQ" />
                          <img alt="Artisan profile" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZEIvLl3I3PjgunPmPia5iHQGg8czjSGhw-R0BGHtPutNPxcvpivIeviNVqYNg67Qj3QuAdrIpf4rP1ej_SVfDCGdzdMjonvYbRm8ceyBlx1jpya1yI48GQC82enFgpl-luTlsXoNWj6aeTMN3n89r1OItIir3B-De7xaUcylwHHNeWKX0H3h9vWN179neqo4prXjsbfCLbn7VzV-mwJfYQjq40JuULvrE9AhlaSlaDKQkVcPi1YPhRefUhp0ey_Wm2DDOp7O_tg" />
                          <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-midnight">+400</div>
                        </div>
                        <span className="text-white text-xs font-bold uppercase tracking-widest opacity-60">Verified Pros</span>
                      </div>
                      <p className="text-white font-medium italic">"The projects here aren't just work—they're legacies. NouRender redefined my career."</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 lg:px-40 flex justify-center py-12 bg-primary/5 dark:bg-midnight/20 border-y border-primary/10">
          <div className="layout-content-container max-w-[1200px] flex-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '200+', label: 'Global Brands' },
                { number: '$50M+', label: 'Commissioned' },
                { number: '15+', label: 'Creative Niches' },
                { number: 'Top 1%', label: 'Talent Tier' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="text-4xl font-display font-black text-primary dark:text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 uppercase tracking-widest font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 lg:px-40 flex justify-center py-24">
          <div className="layout-content-container max-w-[1200px] flex-1">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Sticky Image */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="lg:sticky lg:top-32"
              >
                <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-primary dark:text-white">
                  Elevate Your Practice to a Global Stage.
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                  We don't just find you jobs; we curate partnerships. Our platform is built specifically for artisans who prioritize quality, craft, and professional integrity.
                </p>
                <div className="relative group cursor-pointer overflow-hidden rounded-[2rem] aspect-square">
                  <img 
                    alt="Detail of artisan craft" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCobeFmYR9PoTvjBet_Nb8ElIgqDWADbybj_GkNEkMne_Bg_fvwq071SBBWSk3onV8gt2uPM20j43ixtksOYCVTxK-X_tPLSLCKvxNAJh-jQ8P3v_mWkqBskWSW1lVGd1nHhygu6orLp1ZPls4d81yVMNUB3fPV6apB_zCLPT0HrkTyuOTrcXLygHgLWxY5xq1iKVp1R7-UcJjupd4Noe0jrCJbIwPvcEnOrU1Cf4nx-Uh8MzGZA4LgZkBIsVDiaMswDgdzrVpJdw"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </motion.div>

              {/* Right: Feature Cards */}
              <div className="space-y-6">
                {[
                  { 
                    icon: Gem, 
                    title: 'Premium Exposure', 
                    desc: 'Access a curated network of luxury brands and high-net-worth clients who value artisanal excellence over generic production.' 
                  },
                  { 
                    icon: Zap, 
                    title: 'Seamless Payments', 
                    desc: 'Focus on your craft while we handle the logistics. Secure milestone payments, automated invoicing, and low platform fees.' 
                  },
                  { 
                    icon: Users, 
                    title: 'Artisan Community', 
                    desc: 'Join private forums, collaborate on massive scale multi-disciplinary projects, and attend exclusive artisan-only retreats.' 
                  },
                  { 
                    icon: BarChart3, 
                    title: 'Project Management', 
                    desc: 'Our bespoke dashboard lets you manage timelines, assets, and communications in one refined interface designed for creative workflows.' 
                  }
                ].map((feature, i) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -5 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className="bg-white dark:bg-midnight p-8 rounded-[2.5rem] border border-primary/10 dark:border-white/5 hover:border-primary/30 dark:hover:border-primary/30 transition-all group shadow-sm hover:shadow-md"
                    >
                      <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-midnight">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-3 text-primary dark:text-white">{feature.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="px-4 lg:px-40 flex justify-center py-20">
          <div className="layout-content-container max-w-[1200px] flex-1">
            <div className="bg-white dark:bg-midnight rounded-[3rem] p-12 lg:p-24 relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <div className="text-primary text-6xl mb-8 inline-block">
                  <Quote size={48} fill="currentColor" />
                </div>
                <h2 className="font-display text-4xl lg:text-6xl text-slate-900 dark:text-white font-black leading-tight mb-8">
                  "NouRender is the bridge between raw talent and extraordinary legacies."
                </h2>
                <div className="flex items-center gap-4">
                  <img alt="Creative Director" className="w-16 h-16 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVsZIuWtNOrFkxm9VjKCKzf8c8DamTlKG--OD8dPY8palLXO1MSHEnwk9JPYG2M5kI0cvp1N4LBQqePGAATT3yFGsNXOibVsOSsAan31MdC5X7FLms1z7cJjAxAPFjV6iVzbn9aIPCIKv2bCMtBfPdIgarnQX6DXUO0qfk_fSGe-gdGTuYdCUaNmn3PFfiDePYOoev5bKXV6YZZjnMCifebrGLjDWC-1jWwiwHuQYyp4u1lowE3EICC7GTw4m1wLhpX9SrOs4PIg" />
                  <div>
                    <p className="text-slate-900 dark:text-white font-bold text-lg">Julian Voss</p>
                    <p className="text-primary/70 text-sm uppercase tracking-widest font-bold">Creative Director at ELITE</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"></div>
              <div className="absolute top-10 right-20 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Disciplines Section */}
        <section className="px-4 lg:px-40 flex justify-center py-24">
          <div className="layout-content-container max-w-[1200px] flex-1">
            <div className="mb-16">
              <h2 className="font-display text-4xl font-bold mb-4 text-primary dark:text-white">Mastery Across Disciplines</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-xl">We are looking for experts in specialized fields to fill our current project pipeline.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Fine Furniture', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAagxe69AR6B21D9w5lQVFyNXiM5itdBmefGHcu6ggHZyC6rXyEHIUTXI1lE7UqEDp3UjolgEAyazwgDK1Hcb23vNxYzP8Zrw8hdXPozCZ9NJl_SHr5DV1pvdhskPmGnR-_1yj-NbW0VTCSo1SUnKAwhNWkgLnCOId2t-ii-H15DnEHZCWMqML5VAJ3hn6qiJSTO0LUKcxKO-HSn7vXPbwAE24rEV3e3xbnEAXtim_e_8keQ3FcQ8rIwbdELDunCqSUtuOp9BXwig', tag: 'Craft' },
                { title: 'Visual Arts', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0OWqQqml3DFsnK8iNdjXvUkwZ-ZgR3sXpNxNWKNETse8baJQOLrrAsGAzoGIXVOgMQXeCkviijvs-HQxsi8quYwPbDAr4r8cpTfkOybj4BD0sunu4JAKOXKU0opoFcn6W9lqhZ6UTlcTiYafDx9-b1YAqyFEFqnqEPGTeNLkIE0VWZGkoS6QSqsiipA3QmPTS4M7dMF4MJ5fHfJVDbsAzdDuURaKsl2CPE17vf1NZdPsNN05-GWZIMlrIoQbNkQEwR-JB5NUMGA', tag: 'Arts' },
                { title: 'Digital Heritage', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpIyBI-rHf0p-zsgRg71URZDNyGV0v_qShuuPvidr9ujRVmUOYG3-v0LQPHeT16YWxMREtB6OKxKv5JwaNhGG-w4uZBPTEqd5XInT1PVG6ZcyHAUqufEqqoLeF9U19KPvlcrvgXeYxJME1AAuO7hkTjXeGDY3dO5irb4q539rhxopqF50QXK9T1UOtk4LN3CvyZaY2j-6CZ_XpzerquEI51B3sT5tK9dS3C7JPpqMNUxVkzge4BaKX55pg7sno5I-D9D0Yy8Sjng', tag: 'Digital' },
                { title: 'Industrial Design', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAu2v9jnUZIEX3ZnkIRyVwkF8HXH0pcMxJqfvV6SR1bDUZta9_jfLaBJp9gCbe6c663FB9V68Knf5t2GzwId3iXhJz6LUCt89lU5tpud6Fu9zy0yK4ezgiLmGRSo6Ib9-YaMuH4cusGoypzrU2S9ydTHtmpb9Cd6PQFCxOAugr1t2mjm-J8ods_C5wrcpLKHdnpZnVZBgOxTiVCiNkmX0DOpVLIfes4zxymUSU2sUh0SIABQwIdAuLT34fkq0gKXNn4SnKUKzGyuA', tag: 'Design' }
              ].map((discipline, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative aspect-square rounded-[2rem] overflow-hidden cursor-pointer"
                >
                  <img 
                    alt={discipline.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={discipline.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent p-8 flex flex-col justify-end">
                    <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{discipline.tag}</p>
                    <h4 className="text-slate-900 dark:text-white text-xl font-bold">{discipline.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 lg:px-40 flex justify-center py-20 bg-primary">
          <div className="layout-content-container max-w-[1200px] flex-1">
            <div className="bg-primary/10 dark:bg-midnight p-8 md:p-16 rounded-[4rem] text-center relative overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative z-10"
              >
                <h2 className="font-display text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8">
                  Ready to join the elite?
                </h2>
                <p className="text-slate-900/60 dark:text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                  We review applications on a rolling basis. Our selection process is rigorous to maintain the highest standard of service for our clients.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-midnight px-10 py-5 rounded-2xl font-bold text-lg hover:opacity-90 transition-all"
                  >
                    Start Your Application
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-slate-900/20 dark:border-white/20 text-slate-900 dark:text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-900/5 dark:hover:bg-white/5 transition-colors"
                  >
                    View Portfolio Guidelines
                  </motion.button>
                </div>
                <p className="mt-10 text-slate-900/40 dark:text-white/40 text-sm font-medium">Average review time: 3–5 business days</p>
              </motion.div>
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ForArtisans;
