import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Brain, TrendingUp, Globe, FileText, Target, MessageSquare, Shield } from 'lucide-react';

const coreFeatures = [
  {
    icon: Clock,
    title: 'Always On, Never Tired',
    description: 'Medhya handles patient queries, appointment scheduling, and follow-ups round the clock—even while you sleep',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Brain,
    title: 'Thinks Like Your Best Staff',
    description: 'Automatically prioritizes urgent cases, sends reminders, manages prescriptions, and keeps your workflow seamless',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Gets Smarter Every Day',
    description: 'Learns your clinic\'s patterns, patient preferences, and optimizes responses based on real interactions',
    gradient: 'from-teal-500 to-teal-600',
  },
];

const quickBenefits = [
  { icon: FileText, text: 'Reduces Documentation Time by 60%' },
  { icon: Target, text: 'Zero Missed Follow-ups' },
  { icon: MessageSquare, text: 'Patients Get Instant Responses' },
  { icon: Shield, text: 'Bank-Grade Security & Privacy' },
];

const languages = [
  '🇬🇧 English', '🇮🇳 Hindi', '🇮🇳 Tamil', '🇮🇳 Telugu',
  '🇮🇳 Malayalam', '🇮🇳 Kannada', '🇮🇳 Bengali', '🇮🇳 Marathi',
  '🇮🇳 Gujarati', '🇮🇳 Punjabi', '🇮🇳 Urdu', '🇪🇸 Spanish',
];

const stats = [
  { number: '500+', label: 'Clinics Trust Us' },
  { number: '50,000+', label: 'Patients Served' },
  { number: '99.9%', label: 'Uptime Guaranteed' },
  { number: '4.9★', label: 'Doctor Rating' },
];

function AnimatedCounter({ end, suffix = '' }: { end: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold text-white"
    >
      {end}{suffix}
    </motion.div>
  );
}

export function MeetMedhya() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="medhya" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Meet <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Medhya</span>: Your AI Healthcare Companion
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            An assistant who works 24/7, speaks your language, and learns from every interaction
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 relative"
        >
          <div className="relative mx-auto max-w-4xl">
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-400/30"
              animate={{
                boxShadow: [
                  '0 0 60px rgba(59, 130, 246, 0.4)',
                  '0 0 80px rgba(20, 184, 166, 0.4)',
                  '0 0 60px rgba(59, 130, 246, 0.4)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80"
                alt="AI Healthcare Assistant"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <Globe className="w-8 h-8 inline-block mr-3" />
            Speaks 12+ Languages Fluently
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.05 }}
                className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors"
              >
                {lang}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Why Doctors Love MediBridge24x7</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-teal-400" />
                  <p className="font-semibold">{benefit.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter end={stat.number} />
              <p className="text-blue-200 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
