import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">MEVLAV</span>
                <span className="text-cyan-400 font-bold text-lg"> QUANTAM</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-md">
              Innovating Digital Experiences. Engineering Business Growth. 
              Your trusted technology partner for digital transformation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Brand Identity</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">SaaS Products</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">CRM Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#why-us" className="text-slate-400 hover:text-cyan-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-slate-400 text-sm">
            © {currentYear} Mevlav Quantam Tech. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer