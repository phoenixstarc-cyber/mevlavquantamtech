import React from 'react'
import { ArrowRight, Shield, Clock, Users } from 'lucide-react'

const Hero = () => {
  const stats = [
    { icon: Shield, value: '100+', label: 'Projects Delivered' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Clock, value: '5+', label: 'Years Experience' },
  ]

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-slate-800 rounded-full mb-6">
            <span className="text-cyan-400 text-sm font-medium">Innovating Digital Experiences</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Engineering Business
            <br />
            <span className="text-cyan-400">Growth Through Technology</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            We combine strategic thinking, modern design, and advanced technology to create 
            powerful digital solutions that drive measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="border border-slate-700 hover:border-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-colors duration-200"
            >
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero