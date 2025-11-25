import { Link } from 'react-router-dom';
import { Activity, Shield, Users, MessageSquare, FileText, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="fixed w-full bg-slate-900 bg-opacity-90 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">MediBridge</span>
            </div>
            <Link
              to="/login"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Healthcare Management
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Simplified
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Streamline your clinic operations with AI-powered consultations, real-time escalations,
            and comprehensive patient management.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/login"
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-600 text-white rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all font-semibold text-lg flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#features"
              className="px-8 py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-semibold text-lg border border-slate-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Everything You Need to Run Your Clinic
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MessageSquare className="w-8 h-8" />}
              title="AI-Powered Consultations"
              description="Intelligent chat interface for patient consultations with real-time escalation to doctors when needed."
              color="from-blue-500 to-blue-600"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Smart Escalations"
              description="Automatic escalation system based on symptoms, ensuring critical cases get immediate attention."
              color="from-red-500 to-red-600"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Patient Management"
              description="Comprehensive patient records, visit history, prescriptions, and lab reports in one place."
              color="from-green-500 to-green-600"
            />
            <FeatureCard
              icon={<FileText className="w-8 h-8" />}
              title="Digital Prescriptions"
              description="Create, manage, and track digital prescriptions with complete medication history."
              color="from-purple-500 to-purple-600"
            />
            <FeatureCard
              icon={<Activity className="w-8 h-8" />}
              title="Lab Integration"
              description="Order lab tests, track results, and upload reports seamlessly within the platform."
              color="from-amber-500 to-amber-600"
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Analytics Dashboard"
              description="Real-time insights into consultations, escalations, and clinic performance metrics."
              color="from-pink-500 to-pink-600"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-800 bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Built for Healthcare Professionals
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">For Clinic Administrators</h3>
              <ul className="space-y-4">
                <BenefitItem text="Manage multiple doctors and staff members" />
                <BenefitItem text="Track all consultations and escalations" />
                <BenefitItem text="Monitor clinic performance in real-time" />
                <BenefitItem text="Customize organization branding and settings" />
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">For Doctors</h3>
              <ul className="space-y-4">
                <BenefitItem text="Review escalated cases with complete context" />
                <BenefitItem text="Create prescriptions and order lab tests" />
                <BenefitItem text="Access patient history instantly" />
                <BenefitItem text="Collaborate with AI assistant for better care" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Clinic?
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Join healthcare professionals who are already using MediBridge to deliver better patient care.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all font-semibold text-lg"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2025 MediBridge. Healthcare Management Platform.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) {
  return (
    <div className="bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all hover:transform hover:scale-105">
      <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 text-white`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
      <span className="text-slate-300 text-lg">{text}</span>
    </li>
  );
}
