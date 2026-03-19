import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="pt-32">
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-display text-xs tracking-[0.5em] text-peak-gold uppercase mb-6 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-12 italic">Curation Above the Clouds</h1>
          <div className="w-24 h-[1px] bg-peak-gold mx-auto mb-12"></div>
          
          <div className="space-y-8 font-body text-lg text-off-white/70 leading-relaxed text-left">
            <p>
              THE PEAK LOUNGE was born from a simple observation: Genting Highlands is a world of its own, 
              yet its most refined experiences often remain hidden from the casual visitor.
            </p>
            <p>
              Our mission is to bridge that gap. We are a collective of frequent visitors, luxury travel experts, 
              and local insiders who believe that the true magic of the peak lies in the details—the vintage 
              champagne served at midnight, the suite with the perfect sunrise view, and the quiet spa 
              sanctuary away from the bustling resort.
            </p>
            <p>
              We don't just list venues; we curate moments. Every recommendation in this guide has been 
              vetted for its commitment to excellence, sophistication, and that indefinable mountain luxury.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-32 bg-midnight/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-8 italic">Our Philosophy</h2>
              <div className="space-y-10">
                <div>
                  <h4 className="font-display text-xs tracking-widest uppercase text-peak-gold mb-3">Exclusivity</h4>
                  <p className="text-sm text-off-white/50 leading-relaxed">
                    We prioritize venues and experiences that offer privacy, personalized service, and a sense of being part of something special.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-xs tracking-widest uppercase text-peak-gold mb-3">Sophistication</h4>
                  <p className="text-sm text-off-white/50 leading-relaxed">
                    True luxury is never loud. We seek out the understated elegance that defines the modern high-altitude lifestyle.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-xs tracking-widest uppercase text-peak-gold mb-3">Insider Knowledge</h4>
                  <p className="text-sm text-off-white/50 leading-relaxed">
                    Our guide is built on real experiences. If we haven't been there ourselves, it doesn't make the list.
                  </p>
                </div>
              </div>
            </div>
            <div className="aspect-[3/4] overflow-hidden glass-morphism p-2">
              <img 
                src="https://picsum.photos/seed/philosophy/800/1200" 
                alt="Philosophy" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="glass-morphism p-12 md:p-20 text-center">
          <h2 className="text-4xl font-serif mb-8 italic">Partnership Inquiries</h2>
          <p className="font-body text-lg text-off-white/60 mb-12 max-w-2xl mx-auto">
            Does your venue represent the pinnacle of Genting Highlands? We are always looking for 
            extraordinary experiences to share with our discerning audience.
          </p>
          <button className="peak-button">Get In Touch</button>
        </div>
      </section>
    </div>
  );
};
