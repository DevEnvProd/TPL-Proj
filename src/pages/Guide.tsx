import React from 'react';
import { motion } from 'motion/react';
import { GUIDE_SECTIONS } from '../constants';
import { Map, Compass, Clock, CloudRain, Car } from 'lucide-react';

export const Guide = () => {
  return (
    <div className="pt-32">
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="font-display text-xs tracking-[0.5em] text-peak-gold uppercase mb-6 block">The Genting Guide</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 italic">Navigating the Peak</h1>
          <p className="font-body text-xl text-off-white/60 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know for a seamless journey to the clouds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-20">
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-peak-gold">
                <Car className="w-8 h-8" />
                <h2 className="text-3xl font-serif italic">{GUIDE_SECTIONS.gettingThere.title}</h2>
              </div>
              <p className="font-body text-lg text-off-white/70 leading-relaxed">
                {GUIDE_SECTIONS.gettingThere.content}
              </p>
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/genting-road/1200/600" 
                  alt="Road to Genting" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4 text-peak-gold">
                <Clock className="w-8 h-8" />
                <h2 className="text-3xl font-serif italic">{GUIDE_SECTIONS.bestTime.title}</h2>
              </div>
              <p className="font-body text-lg text-off-white/70 leading-relaxed">
                {GUIDE_SECTIONS.bestTime.content}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4 text-peak-gold">
                <CloudRain className="w-8 h-8" />
                <h2 className="text-3xl font-serif italic">{GUIDE_SECTIONS.packing.title}</h2>
              </div>
              <p className="font-body text-lg text-off-white/70 leading-relaxed">
                {GUIDE_SECTIONS.packing.content}
              </p>
            </div>
          </div>

          <aside className="space-y-12">
            <div className="glass-morphism p-10">
              <h3 className="font-display text-xs tracking-widest uppercase text-peak-gold mb-8">Quick Facts</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-display tracking-widest text-off-white/40 uppercase mb-1">Elevation</p>
                  <p className="font-serif text-xl italic">1,865 Meters (6,118 ft)</p>
                </div>
                <div>
                  <p className="text-[10px] font-display tracking-widest text-off-white/40 uppercase mb-1">Average Temp</p>
                  <p className="font-serif text-xl italic">14°C - 25°C</p>
                </div>
                <div>
                  <p className="text-[10px] font-display tracking-widest text-off-white/40 uppercase mb-1">Distance from KL</p>
                  <p className="font-serif text-xl italic">54 Kilometers</p>
                </div>
              </div>
            </div>

            <div className="bg-peak-gold p-10 text-midnight">
              <h3 className="font-display text-xs tracking-widest uppercase font-bold mb-6">Concierge Service</h3>
              <p className="font-body text-sm mb-8 italic">
                Need a private chauffeur or helicopter transfer? Our concierge team is at your service.
              </p>
              <button className="w-full py-3 border border-midnight font-display text-[10px] tracking-widest uppercase font-bold hover:bg-midnight hover:text-peak-gold transition-all">
                Contact Concierge
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
