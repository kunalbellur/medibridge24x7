import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Phone } from 'lucide-react';
import { Navigation } from '../components/landing-new/Navigation';
import { Hero } from '../components/landing-new/Hero';
import { MeetMedhya } from '../components/landing-new/MeetMedhya';
import { Benefits } from '../components/landing-new/Benefits';
import { Testimonials } from '../components/landing-new/Testimonials';
import { FinalCTA } from '../components/landing-new/FinalCTA';
import { Footer } from '../components/landing-new/Footer';
import { ScrollProgress } from '../components/landing-new/ScrollProgress';
import { CursorTrail } from '../components/landing-new/CursorTrail';

export function LandingNew() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      setShowMobileCTA(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookDemo = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const formElement = document.querySelector('input[name="fullName"]') as HTMLInputElement;
        formElement?.focus();
      }, 500);
    }
  };

  return (
    <div className="bg-white relative overflow-hidden">
      <CursorTrail />
      <ScrollProgress />
      <Navigation />

      <main>
        <Hero />
        <MeetMedhya />
        <Benefits />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 md:bottom-8 md:right-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 z-50 backdrop-blur-sm"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMobileCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-blue-200 shadow-2xl p-4"
          >
            <div className="flex gap-3">
              <button
                onClick={handleBookDemo}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Book Demo
              </button>
              <a
                href="tel:+919876543210"
                className="bg-teal-500 text-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
