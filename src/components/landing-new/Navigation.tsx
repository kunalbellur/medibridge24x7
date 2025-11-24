import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Menu, X, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleBookDemo = () => {
    scrollToSection('hero');
    setTimeout(() => {
      const formElement = document.querySelector('input[name="fullName"]') as HTMLInputElement;
      formElement?.focus();
    }, 500);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-blue-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.5)',
                  '0 0 30px rgba(139, 92, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Activity className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MediBridge24x7
              </span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('medhya')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium relative group"
            >
              Benefits
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium relative group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </button>
            <a
              href="tel:+919876543210"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              +91-98765-43210
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={() => navigate('/login')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
            <motion.button
              onClick={handleBookDemo}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 font-semibold relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Book Demo</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.button>
          </div>

          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-blue-100 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('medhya')}
                className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                Testimonials
              </button>
              <a
                href="tel:+919876543210"
                className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors font-medium py-2 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <div className="pt-4 space-y-3 border-t border-slate-200">
                <button
                  onClick={() => navigate('/login')}
                  className="block w-full text-center text-slate-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  Sign In
                </button>
                <button
                  onClick={handleBookDemo}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
                >
                  Book Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
