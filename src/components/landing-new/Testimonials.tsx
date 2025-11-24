import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Users, Stethoscope, Building, Star, Heart } from 'lucide-react';

const userTypes = [
  { icon: Stethoscope, title: 'Solo Practitioners', desc: 'Perfect for single-doctor clinics' },
  { icon: Users, title: 'Multi-Doctor Clinics', desc: 'Seamless team collaboration' },
  { icon: Heart, title: 'Specialty Centers', desc: 'Customized for your specialty' },
  { icon: Building, title: 'Hospitals', desc: 'Enterprise-ready, scalable' },
];

const testimonials = [
  {
    name: 'Dr. Priya Sharma',
    role: 'General Physician',
    location: 'Mumbai',
    specialty: 'Family Medicine • 15 years experience',
    quote: 'MediBridge24x7 gave me my evenings back. I used to spend 3 hours after clinic on paperwork—now it\'s done in 30 minutes. Medhya handles everything while I focus on what I love: treating patients.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    rating: 5,
  },
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Pediatrician',
    location: 'Bangalore',
    specialty: 'Pediatrics • 500+ patients/month',
    quote: 'The automated follow-ups are a game-changer. Parents get vaccination reminders, growth tracking updates, and I never worry about missing a check-up. My patient retention increased by 35%!',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    rating: 5,
  },
  {
    name: 'Dr. Anita Desai',
    role: 'Clinic Owner',
    location: 'Pune',
    specialty: 'Multi-specialty • 3 doctors, 8 staff',
    quote: 'We went from chaos to clarity. Medhya manages our entire front desk—appointments, billing reminders, patient queries. We saved ₹1.2 lakhs in the first 6 months and our staff can focus on patient care.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    rating: 5,
  },
  {
    name: 'Dr. Mohammed Ali',
    role: 'Cardiologist',
    location: 'Hyderabad',
    specialty: 'Cardiology • High-risk patients',
    quote: 'For cardiac patients, timely follow-ups save lives. MediBridge24x7\'s escalation system alerts me immediately for critical cases. It\'s like having a vigilant nurse who never sleeps.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    rating: 5,
  },
];

export function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Built for Healthcare Heroes,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Loved by Doctors
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Join hundreds of practitioners who've transformed their practice
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">For Whom We Built This</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{type.title}</h4>
                  <p className="text-slate-600 text-sm">{type.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, amount: 0.3 });

            return (
              <motion.div
                key={index}
                ref={cardRef}
                initial={{ opacity: 0, y: 50 }}
                animate={cardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all relative"
              >
                <Quote className="w-12 h-12 text-blue-600/20 absolute top-6 right-6" />

                <div className="relative z-10">
                  <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-blue-200"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                      <p className="text-slate-600 text-sm">{testimonial.role}, {testimonial.location}</p>
                      <p className="text-blue-600 text-xs font-medium">{testimonial.specialty}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 md:p-12 border-2 border-blue-200"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Trusted by 500+ Healthcare Professionals Across India
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            <div className="bg-white px-6 py-3 rounded-xl shadow-md border border-blue-200">
              <span className="text-sm font-medium text-slate-600">🔒 HIPAA Ready</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-md border border-blue-200">
              <span className="text-sm font-medium text-slate-600">✓ ISO Certified</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-md border border-blue-200">
              <span className="text-sm font-medium text-slate-600">🔐 Encrypted</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-xl shadow-md border border-blue-200">
              <span className="text-sm font-medium text-slate-600">⚡ Supabase Powered</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
