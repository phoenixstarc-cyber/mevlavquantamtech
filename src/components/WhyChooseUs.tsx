import React from 'react'
import { Shield, Users, Zap, Lock, MessageSquare, Settings } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Innovative Technology Solutions',
    description: 'We stay ahead of the curve with cutting-edge technologies and modern development practices.',
  },
  {
    icon: Users,
    title: 'Client-Centric Development Approach',
    description: 'Your success is our priority. We work closely with you to understand and deliver on your unique needs.',
  },
  {
    icon: Settings,
    title: 'Scalable & Future-Ready Architecture',
    description: 'Built to grow with your business, our solutions are designed for long-term success and adaptability.',
  },
  {
    icon: Lock,
    title: 'Security-First Development Standards',
    description: 'We implement robust security measures at every level to protect your data and your users.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    description: 'Stay informed with regular updates, clear timelines, and open channels throughout your project.',
  },
  {
    icon: Shield,
    title: 'Dedicated Project Management',
    description: 'Experienced project managers ensure your project stays on track, on time, and within budget.',
  },
]

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We deliver excellence through expertise, dedication, and a passion for innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {reason.title}
              </h3>
              
              <p className="text-slate-400">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs