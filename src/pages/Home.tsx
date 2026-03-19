import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Star, ArrowRight } from 'lucide-react';
import { FEATURED_VENUES, INSIDER_TIPS, CATEGORIES } from '../constants';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/genting-night/1920/1080?blur=2" 
            alt="Genting Highlands Night" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-transparent to-charcoal"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="font-display text-xs tracking-[0.5em] text-peak-gold uppercase mb-6 block">Above the clouds. Beyond the ordinary.</span>
            <h1 className="text-6xl md:text-8xl font-serif text-off-white mb-8 leading-tight">
              THE PEAK LOUNGE
            </h1>
            <p className="font-body text-xl md:text-2xl text-off-white/80 mb-12 max-w-2xl mx-auto leading-relaxed italic">
              Your exclusive insider's guide to the luxury lifestyle of Genting Highlands.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="peak-button">Explore The Guide</button>
              <button className="font-display text-xs tracking-widest uppercase text-off-white/60 hover:text-peak-gold transition-colors flex items-center gap-2">
                View Curator's Picks <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="font-display text-[8px] tracking-[0.3em] text-off-white/30 uppercase mb-2">Scroll to discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-peak-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Curated Experiences</h2>
          <div className="w-24 h-[1px] bg-peak-gold mx-auto mb-8"></div>
          <p className="font-display text-xs tracking-widest text-off-white/40 uppercase">Select your journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={cat.path} className="group block glass-morphism p-10 hover:border-peak-gold/50 transition-all duration-500">
                <div className="text-peak-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-peak-gold transition-colors">{cat.name}</h3>
                <p className="text-sm text-off-white/50 leading-relaxed mb-6">
                  Discover the most exclusive {cat.name.toLowerCase()} offerings at the peak.
                </p>
                <div className="flex items-center text-[10px] font-display tracking-widest uppercase text-peak-gold opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Explore <ChevronRight className="w-3 h-3 ml-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Venues Carousel (Simplified for static) */}
      <section className="py-32 bg-midnight/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Featured Venues</h2>
              <p className="font-display text-xs tracking-widest text-off-white/40 uppercase">The gold standard of Genting</p>
            </div>
            <Link to="/guide" className="font-display text-[10px] tracking-widest uppercase text-peak-gold border-b border-peak-gold/30 pb-1 hover:border-peak-gold transition-all">
              View All Venues
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {FEATURED_VENUES.slice(0, 2).map((venue) => (
              <div key={venue.id} className="group relative overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={venue.image} 
                    alt={venue.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-display text-[9px] tracking-widest text-peak-gold uppercase">{venue.category}</span>
                    <div className="flex items-center text-peak-gold">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-[10px] ml-1">{venue.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-serif text-off-white mb-3">{venue.name}</h3>
                  <p className="text-sm text-off-white/70 line-clamp-2 mb-6 max-w-md">{venue.description}</p>
                  <button className="text-[10px] font-display tracking-widest uppercase text-peak-gold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read Review <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curator's Pick */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto glass-morphism overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 h-[500px] lg:h-auto">
            <img 
              src="https://picsum.photos/seed/curator/1000/1200" 
              alt="Curator's Pick" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <span className="font-display text-xs tracking-[0.3em] text-peak-gold uppercase mb-6">Curator's Pick of the Month</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight italic">"The Cloud Terrace at Crockfords"</h2>
            <p className="font-body text-lg text-off-white/70 mb-10 leading-relaxed">
              "There is no experience quite like sipping a vintage Krug while watching the mist roll over the rainforest canopy. 
              The Cloud Terrace offers a level of serenity that is hard to find elsewhere in the resort."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-peak-gold">
                <img src="https://picsum.photos/seed/avatar/100/100" alt="Curator" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-display text-[10px] tracking-widest uppercase text-off-white">Alexander Vane</p>
                <p className="font-display text-[8px] tracking-widest uppercase text-peak-gold">Chief Curator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insider Tips */}
      <section className="py-32 bg-midnight/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-16 italic">Insider Secrets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {INSIDER_TIPS.map((tip, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-peak-gold/30 flex items-center justify-center text-peak-gold mb-6 font-serif italic text-xl">
                  {idx + 1}
                </div>
                <h4 className="font-display text-xs tracking-widest uppercase text-peak-gold mb-4">{tip.title}</h4>
                <p className="text-sm text-off-white/50 leading-relaxed italic">"{tip.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">The Peak Brief</h2>
          <p className="font-body text-off-white/60 mb-10 italic">
            Monthly dispatches on new openings, secret events, and exclusive offers.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white/5 border border-white/10 px-6 py-4 font-display text-xs tracking-widest uppercase focus:outline-none focus:border-peak-gold transition-colors"
            />
            <button className="peak-button">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};
