import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export function FinalCTA() {
  const handleBookDemo = () => {
    const heroSection = document.getElementById('hero');
    heroSection?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const formElement = document.querySelector('input[name="fullName"]') as HTMLInputElement;
      formElement?.focus();
    }, 500);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join the Healthcare Revolution Today
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Start your 14-day free trial. No credit card required. Setup in 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <motion.button
              onClick={handleBookDemo}
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 inline-flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Book Your Demo</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => window.location.href = '/login'}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-teal-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91-98765-43210</span>
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="mailto:hello@medibridge24x7.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>hello@medibridge24x7.com</span>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 inline-block bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full text-white text-sm border border-white/20"
          >
            🔴 <strong>5 doctors</strong> signed up in the last hour
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
