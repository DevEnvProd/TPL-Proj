import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { Guide } from './pages/Guide';
import { Entertainment } from './pages/Entertainment';
import { About } from './pages/About';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto text-center min-h-[60vh] flex flex-col justify-center items-center">
    <span className="font-display text-xs tracking-[0.5em] text-peak-gold uppercase mb-6 block">Coming Soon</span>
    <h1 className="text-5xl md:text-7xl font-serif mb-8 italic">{title}</h1>
    <p className="font-body text-xl text-off-white/60 max-w-2xl mx-auto leading-relaxed mb-12">
      We are currently curating the most exclusive {title.toLowerCase()} experiences for our members. 
      Check back soon for the full insider's guide.
    </p>
    <div className="w-24 h-[1px] bg-peak-gold mx-auto"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/about" element={<About />} />
            <Route path="/stays" element={<PlaceholderPage title="Premium Stays" />} />
            <Route path="/dining" element={<PlaceholderPage title="Fine Dining" />} />
            <Route path="/wellness" element={<PlaceholderPage title="Mountain Wellness" />} />
            <Route path="/blog" element={<PlaceholderPage title="Insider Blog" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
