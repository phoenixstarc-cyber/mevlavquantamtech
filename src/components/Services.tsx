import React from 'react'
import {
  Palette,
  Globe,
  Smartphone,
  Cloud,
  Users,
  Database,
} from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity & Brand Kits',
    description: 'Build a strong and memorable brand presence with comprehensive branding solutions.',
    features: [
      'Logo Design',
      'Brand Guidelines',
      'Typography & Color Systems',
      'Business Stationery',
      'Social Media Branding',
      'Marketing Assets',
    ],
  },
  {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Create high-performance websites that combine aesthetics, functionality, and business objectives.',
    features: [
      'Corporate Websites',
      'Business Portals',
      'E-Commerce Platforms',
      'Landing Pages',
      'Custom Web Applications',
      'SEO-Friendly Development',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Application Development',
    description: 'Transform ideas into powerful applications that deliver exceptional user experiences.',
    features: [
      'Android Applications',
      'iOS Applications',
      'Cross-Platform Apps',
      'Progressive Web Apps (PWA)',
      'Enterprise Applications',
      'Customer Portals',
    ],
  },
  {
    icon: Cloud,
    title: 'SaaS Product Development',
    description: 'Launch scalable Software-as-a-Service products with modern architecture and cloud infrastructure.',
    features: [
      'SaaS Product Strategy',
      'MVP Development',
      'Subscription Systems',
      'User Management',
      'Multi-Tenant Architecture',
      'API Development',
    ],
  },
  {
    icon: Users,
    title: 'CRM Solutions',
    description: 'Streamline customer management and improve business operations through intelligent CRM systems.',
    features: [
      'Customer Lifecycle Management',
      'Sales Pipeline Automation',
      'Lead Tracking',
      'Workflow Automation',
      'Analytics & Reporting',
      'Third-Party Integrations',
    ],
  },
  {
    icon: Database,
    title: 'Database Design & Engineering',
    description: 'Develop secure, scalable, and efficient database infrastructures to support business growth.',
    features: [
      'Database Architecture',
      'Performance Optimization',
      'Data Migration',
      'Data Warehousing',
      'Cloud Database Solutions',
      'Backup & Disaster Recovery',
    ],
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-slate-400 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.slice(0, 4).map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services