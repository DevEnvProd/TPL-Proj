import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-charcoal/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col items-center">
          <span className="font-serif text-2xl tracking-[0.3em] text-peak-gold">THE PEAK LOUNGE</span>
          <span className="font-display text-[8px] tracking-[0.5em] text-off-white/50 uppercase -mt-1">Genting Highlands</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {CATEGORIES.map((cat) => (
            <Link key={cat.id} to={cat.path} className="nav-link">
              {cat.name}
            </Link>
          ))}
          <Link to="/about" className="nav-link">About</Link>
          <button className="px-5 py-2 border border-peak-gold text-peak-gold font-display text-[10px] tracking-widest uppercase hover:bg-peak-gold hover:text-midnight transition-all duration-300">
            Member Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-peak-gold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[80px] bg-charcoal z-40 lg:hidden px-6 py-10"
          >
            <div className="flex flex-col space-y-6">
              {CATEGORIES.map((cat) => (
                <Link key={cat.id} to={cat.path} className="flex items-center justify-between group">
                  <span className="font-serif text-3xl text-off-white group-hover:text-peak-gold transition-colors">{cat.name}</span>
                  <ChevronRight className="text-peak-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              <Link to="/about" className="font-serif text-3xl text-off-white">About</Link>
              <div className="pt-10">
                <button className="w-full py-4 bg-peak-gold text-midnight font-display font-bold uppercase tracking-widest">
                  Member Login
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-midnight pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl text-peak-gold mb-6">THE PEAK LOUNGE</h3>
            <p className="font-body text-off-white/60 max-w-md leading-relaxed">
              The definitive insider's guide to the high-altitude lifestyle of Genting Highlands. 
              Curating the extraordinary for those who seek the exceptional.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xs tracking-widest uppercase text-peak-gold mb-6">Explore</h4>
            <ul className="space-y-4 font-sans text-sm text-off-white/60">
              <li><Link to="/stays" className="hover:text-peak-gold transition-colors">Premium Stays</Link></li>
              <li><Link to="/dining" className="hover:text-peak-gold transition-colors">Fine Dining</Link></li>
              <li><Link to="/entertainment" className="hover:text-peak-gold transition-colors">Entertainment</Link></li>
              <li><Link to="/wellness" className="hover:text-peak-gold transition-colors">Wellness</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xs tracking-widest uppercase text-peak-gold mb-6">Connect</h4>
            <ul className="space-y-4 font-sans text-sm text-off-white/60">
              <li><Link to="/about" className="hover:text-peak-gold transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-peak-gold transition-colors">Partnerships</Link></li>
              <li><a href="#" className="hover:text-peak-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-peak-gold transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-[10px] font-display tracking-widest text-off-white/30 uppercase">
            © 2026 THE PEAK LOUNGE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-8 text-[10px] font-display tracking-widest text-off-white/30 uppercase">
            <a href="#" className="hover:text-peak-gold">Privacy Policy</a>
            <a href="#" className="hover:text-peak-gold">Terms of Service</a>
          </div>
          <div className="px-3 py-1 border border-red-900/30 text-red-900/50 text-[9px] font-display tracking-tighter uppercase">
            18+ | PLEASE GAMBLE RESPONSIBLY
          </div>
        </div>
      </div>
    </footer>
  );
};
