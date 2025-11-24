import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, DollarSign, Heart, Star, Smile, ArrowRight } from 'lucide-react';

const saves = [
  {
    icon: Clock,
    title: 'Save Time',
    headline: 'Save 15+ Hours Every Week',
    details: [
      'Automated appointment reminders',
      'Instant prescription generation',
      'Voice-to-text consultation notes',
      'Bulk patient updates',
    ],
    stat: 'Doctors report 60% less admin work',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: DollarSign,
    title: 'Save Money',
    headline: 'Reduce Operational Costs by 40%',
    details: [
      'No need for extra receptionist staff',
      'Reduced missed appointments (auto-reminders)',
      'Lower phone costs (automated communication)',
      'Paperless operations',
    ],
    stat: 'Average savings: ₹80,000/month',
    image: 'https://images.unsplash.com/photo-1554224311-beee2091c7ed?w=800&q=80',
    gradient: 'from-green-500 to-green-600',
  },
  {
    icon: Heart,
    title: 'Save Patient Health',
    headline: 'Better Outcomes, Happier Patients',
    details: [
      'Timely medication reminders',
      'Automatic chronic care follow-ups',
      'Early warning for critical escalations',
      'Complete medical history at fingertips',
    ],
    stat: '30% improvement in treatment adherence',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    gradient: 'from-red-500 to-pink-600',
  },
  {
    icon: Star,
    title: 'Save Reputation',
    headline: 'Build a Practice Patients Rave About',
    details: [
      'Instant response to patient queries',
      'Professional communication',
      'Never miss a callback',
      'Personalized patient experience',
    ],
    stat: 'Clinics see 45% more positive reviews',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Smile,
    title: 'Save Your Peace of Mind',
    headline: 'Focus on Medicine, Not Management',
    details: [
      'AI handles routine tasks',
      'Real-time alerts for emergencies only',
      'Secure, compliant data management',
      '24/7 system monitoring',
    ],
    stat: 'Doctors report 80% less stress',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80',
    gradient: 'from-purple-500 to-indigo-600',
  },
];

export function Benefits() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="benefits" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            5 Ways MediBridge24x7{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transforms Your Practice
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Save time. Save money. Save lives.
          </p>
        </motion.div>

        <div className="space-y-32">
          {saves.map((save, index) => {
            const Icon = save.icon;
            const isEven = index % 2 === 0;
            const saveRef = useRef(null);
            const saveInView = useInView(saveRef, { once: true, amount: 0.3 });

            return (
              <motion.div
                key={index}
                ref={saveRef}
                initial={{ opacity: 0 }}
                animate={saveInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={saveInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`${!isEven ? 'lg:order-2' : ''}`}
                >
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${save.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-slate-600">{save.title}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    {save.headline}
                  </h3>

                  <ul className="space-y-4 mb-8">
                    {save.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        animate={saveInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-6 h-6 bg-gradient-to-br ${save.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg text-slate-700">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={saveInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className={`bg-gradient-to-r ${save.gradient} text-white px-6 py-4 rounded-xl shadow-lg inline-block`}
                  >
                    <p className="text-lg font-bold">{save.stat}</p>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  animate={saveInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`relative ${!isEven ? 'lg:order-1' : ''}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={save.image}
                      alt={save.title}
                      className="w-full h-auto rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  </motion.div>

                  <motion.div
                    className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} bg-white rounded-xl shadow-2xl p-6 border-2 border-blue-200 hidden lg:block`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={saveInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${save.gradient} rounded-lg flex items-center justify-center mb-2`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-slate-900">#{index + 1}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-32 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 500+ healthcare professionals who've already made the switch
            </p>
            <motion.button
              onClick={() => {
                const heroSection = document.getElementById('hero');
                heroSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
