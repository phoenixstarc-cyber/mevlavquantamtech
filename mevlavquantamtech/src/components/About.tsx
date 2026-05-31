import React from 'react'
import { Check } from 'lucide-react'

const About = () => {
  const highlights = [
    'Strategic Thinking & Modern Design',
    'Advanced Technology Solutions',
    'Scalable & Secure Architecture',
    'Future-Ready Development',
    'End-to-End Digital Transformation',
    'Measurable Results',
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              About Mevlav Quantam Tech
            </h2>
            
            <p className="text-lg text-slate-400 mb-6">
              Mevlav Quantam Tech is a forward-thinking technology and digital transformation 
              company dedicated to helping businesses establish, scale, and optimize their 
              digital presence.
            </p>
            
            <p className="text-lg text-slate-400 mb-8">
              Our team specializes in transforming ideas into fully functional digital 
              ecosystems—from brand identity and websites to enterprise-grade applications, 
              SaaS platforms, CRM systems, and database architectures.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-cyan-400" />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
                  <div className="text-slate-400">Projects Completed</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-slate-400">Happy Clients</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
                  <div className="text-slate-400">Years Experience</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-slate-400">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About