import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-lg">MEVLAV</span>
                <span className="text-cyan-400 font-bold text-lg"> QUANTAM</span>
              </div>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Started
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200 text-center"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header