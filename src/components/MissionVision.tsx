import React from 'react'
import { Target, Eye } from 'lucide-react'

const MissionVision = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              To empower businesses through innovative technology, intelligent automation, 
              and world-class digital solutions that accelerate growth and create lasting 
              competitive advantages.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              To become a globally trusted technology partner recognized for delivering 
              transformative digital solutions that shape the future of business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision