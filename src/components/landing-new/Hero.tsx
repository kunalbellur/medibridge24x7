import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Sparkles, Heart, Pill, Activity, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  clinicName: string;
  role: string;
  patientsPerMonth: string;
};

const floatingIcons = [
  { Icon: Heart, delay: 0, duration: 6 },
  { Icon: Pill, delay: 1, duration: 5 },
  { Icon: Activity, delay: 2, duration: 7 },
];

export function Hero() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Lead captured:', data);
    toast.success('Thank you! Our team will contact you within 24 hours.');
    setIsSubmitted(true);
    reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {floatingIcons.map(({ Icon, delay, duration }, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-300/30"
          style={{
            top: `${20 + index * 30}%`,
            left: `${10 + index * 35}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon className="w-16 h-16 md:w-24 md:h-24" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200"
            >
              <Sparkles className="w-4 h-4" />
              <span>Meet the Future of Healthcare</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                The AI Healthcare Assistant
              </span>
              <br />
              <span className="text-slate-900">That Never Sleeps</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed"
            >
              Transform your clinic with <strong>MediBridge24x7</strong> - where AI meets compassionate care
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Setup in 5 Minutes</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-blue-100 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-teal-500/10 to-blue-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                {!isSubmitted ? (
                  <>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        Book Your Free Demo
                      </h3>
                      <p className="text-slate-600">
                        See how MediBridge24x7 transforms your practice
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div>
                        <input
                          {...register('fullName', { required: 'Full name is required' })}
                          type="text"
                          placeholder="Full Name *"
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors bg-white/50 backdrop-blur-sm"
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                        )}
                      </div>

                      <div>
                        <input
                          {...register('phone', {
                            required: 'Phone number is required',
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: 'Enter a valid 10-digit phone number',
                            },
                          })}
                          type="tel"
                          placeholder="Phone Number *"
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors bg-white/50 backdrop-blur-sm"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <input
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Enter a valid email address',
                            },
                          })}
                          type="email"
                          placeholder="Email Address *"
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors bg-white/50 backdrop-blur-sm"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <input
                          {...register('clinicName', { required: 'Clinic name is required' })}
                          type="text"
                          placeholder="Clinic/Organization Name *"
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors bg-white/50 backdrop-blur-sm"
                        />
                        {errors.clinicName && (
                          <p className="text-red-500 text-sm mt-1">{errors.clinicName.message}</p>
                        )}
                      </div>

                      <div>
                        <select
                          {...register('role', { required: 'Please select your role' })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors bg-white/50 backdrop-blur-sm"
                        >
                          <option value="">Select Your Role *</option>
                          <option value="doctor">Doctor</option>
                          <option value="clinic_admin">Clinic Admin</option>
                          <option value="healthcare_professional">Healthcare Professional</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.role && (
                          <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
                        )}
                      </div>

                      <div>
                        <select
                          {...register('patientsPerMonth', { required: 'Please select patient volume' })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors bg-white/50 backdrop-blur-sm"
                        >
                          <option value="">Patients Per Month *</option>
                          <option value="0-100">0-100</option>
                          <option value="100-500">100-500</option>
                          <option value="500-1000">500-1000</option>
                          <option value="1000+">1000+</option>
                        </select>
                        {errors.patientsPerMonth && (
                          <p className="text-red-500 text-sm mt-1">{errors.patientsPerMonth.message}</p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Book Your Demo</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>

                      <motion.button
                        type="button"
                        onClick={() => window.location.href = '/login'}
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Get Started Free
                      </motion.button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 className="w-12 h-12 text-green-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                    <p className="text-slate-600">
                      Our team will contact you within 24 hours
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 border-2 border-blue-200 hidden lg:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Bank-Grade</p>
                  <p className="text-lg font-bold text-slate-900">Security</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
