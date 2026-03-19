import React from 'react';
import { motion } from 'motion/react';
import { ENTERTAINMENT_CONTENT } from '../constants';
import { Gamepad2, ShieldCheck, Trophy, Star, ArrowRight } from 'lucide-react';

export const Entertainment = () => {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-display text-xs tracking-[0.5em] text-peak-gold uppercase mb-6 block">Evening Entertainment</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">The High Stakes Lifestyle</h1>
          <p className="font-body text-xl text-off-white/60 max-w-2xl mx-auto italic">
            From the electric energy of the gaming floor to the hushed luxury of private salons.
          </p>
        </motion.div>
      </section>

      {/* Partner Spotlight */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto glass-morphism p-1 md:p-2">
          <div className="relative h-[600px] overflow-hidden">
            <img 
              src="https://picsum.photos/seed/platinum-casino/1600/900" 
              alt="Platinum Casino" 
              className="w-full h-full object-cover opacity-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center px-12 md:px-24">
              <div className="max-w-xl">
                <span className="font-display text-[10px] tracking-[0.3em] text-peak-gold uppercase mb-4 block">
                  {ENTERTAINMENT_CONTENT.partnerSpotlight.tagline}
                </span>
                <h2 className="text-5xl md:text-7xl font-serif text-off-white mb-6">
                  {ENTERTAINMENT_CONTENT.partnerSpotlight.name}
                </h2>
                <p className="font-body text-lg text-off-white/80 mb-10 leading-relaxed italic">
                  {ENTERTAINMENT_CONTENT.partnerSpotlight.description}
                </p>
                <div className="flex flex-wrap gap-8 mb-12">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-peak-gold w-5 h-5" />
                    <span className="font-display text-[10px] tracking-widest uppercase">Private Salons</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="text-peak-gold w-5 h-5" />
                    <span className="font-display text-[10px] tracking-widest uppercase">High Stakes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="text-peak-gold w-5 h-5" />
                    <span className="font-display text-[10px] tracking-widest uppercase">VIP Service</span>
                  </div>
                </div>
                <button className="peak-button">Inquire About Access</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-serif mb-6 italic">{ENTERTAINMENT_CONTENT.casinoGuide.title}</h3>
              <p className="font-body text-off-white/60 leading-relaxed mb-8">
                {ENTERTAINMENT_CONTENT.casinoGuide.description}
              </p>
              <ul className="space-y-4">
                {['Understanding Table Etiquette', 'The Art of Baccarat', 'Slot Machine Strategies', 'Managing Your Bankroll'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm text-off-white/80 group cursor-pointer">
                    <span className="text-peak-gold font-serif italic text-lg">0{i+1}</span>
                    <span className="group-hover:text-peak-gold transition-colors">{item}</span>
                    <ArrowRight className="w-3 h-3 text-peak-gold opacity-0 group-hover:opacity-100 transition-all" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-morphism p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-serif mb-6 italic">{ENTERTAINMENT_CONTENT.vipLounge.title}</h3>
            <p className="font-body text-off-white/60 leading-relaxed mb-8">
              {ENTERTAINMENT_CONTENT.vipLounge.description}
            </p>
            <div className="aspect-video overflow-hidden mb-8">
              <img 
                src="https://picsum.photos/seed/lounge-vip/800/450" 
                alt="VIP Lounge" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <button className="text-[10px] font-display tracking-widest uppercase text-peak-gold border-b border-peak-gold/30 pb-1 self-start hover:border-peak-gold transition-all">
              View Lounge Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Player's Club */}
      <section className="py-32 bg-midnight/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-8 italic">The Player's Club</h2>
          <p className="font-body text-lg text-off-white/70 mb-12 leading-relaxed">
            Membership has its privileges. From complimentary suite upgrades to invitations to 
            exclusive tournaments and private concerts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-8 border border-white/5 bg-white/5">
              <span className="font-display text-[10px] tracking-widest text-peak-gold uppercase block mb-2">Silver</span>
              <p className="text-xs text-off-white/40">Entry level access</p>
            </div>
            <div className="p-8 border border-peak-gold/30 bg-peak-gold/5 scale-110">
              <span className="font-display text-[10px] tracking-widest text-peak-gold uppercase block mb-2">Gold</span>
              <p className="text-xs text-off-white/40">Preferred benefits</p>
            </div>
            <div className="p-8 border border-white/5 bg-white/5">
              <span className="font-display text-[10px] tracking-widest text-peak-gold uppercase block mb-2">Platinum</span>
              <p className="text-xs text-off-white/40">Ultimate luxury</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
