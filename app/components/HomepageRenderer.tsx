'use client'

import Link from 'next/link'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import Footer from './Footer'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Building2, Wifi, Users, Coffee, Monitor, Zap } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const whyFeatures = [
  { icon: Building2, title: 'Flexible Spaces', description: 'From hot desks to private offices, find the perfect workspace for your needs.' },
  { icon: Wifi, title: 'Blazing-Fast WiFi', description: '1Gbps fiber internet with enterprise-grade security and redundant connections.' },
  { icon: Users, title: 'Vibrant Community', description: 'Join a network of 500+ professionals, attend events, and find collaborators.' },
  { icon: Coffee, title: 'Premium Amenities', description: 'Craft coffee bar, wellness room, phone booths, and a stocked kitchen on every floor.' },
  { icon: Monitor, title: 'Meeting Rooms', description: 'Book fully-equipped conference rooms with AV setups for presentations and calls.' },
  { icon: Zap, title: '24/7 Access', description: 'Work on your schedule with secure round-the-clock access to all facilities.' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80&fit=crop', alt: 'Open workspace' },
  { src: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=600&q=80&fit=crop', alt: 'Meeting room' },
  { src: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80&fit=crop', alt: 'Lounge area' },
  { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80&fit=crop', alt: 'Private office' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Featured Spaces Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 uppercase tracking-tight mb-4">
              Our Spaces
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every workspace designed for productivity, comfort, and collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Hot Desks', desc: 'Flexible seating in our open workspace. Drop in anytime and plug into the energy of the community.', href: '/plans' },
              { name: 'Dedicated Desks', desc: 'Your own permanent desk with storage. Personalize your space and build your routine.', href: '/plans' },
              { name: 'Private Offices', desc: 'Fully furnished private offices for teams of 2-20. Lockable and customizable.', href: '/plans' },
            ].map((program, i) => (
              <Link
                key={i}
                href={program.href}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-1 bg-gradient-to-r from-primary-600 to-accent-500" />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center mb-5">
                    {i === 0 && <Users className="w-7 h-7 text-white" />}
                    {i === 1 && <Monitor className="w-7 h-7 text-white" />}
                    {i === 2 && <Building2 className="w-7 h-7 text-white" />}
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 uppercase tracking-wide mb-3 group-hover:text-primary-700 transition-colors">
                    {program.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{program.desc}</p>
                  <span className="text-primary-700 font-display font-semibold uppercase tracking-wide text-sm group-hover:text-accent-600 transition-colors">
                    Learn More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-20 bg-gray-100"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 uppercase tracking-tight mb-4">
              Why The Nexus Hub
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              More than a workspace. A launchpad for your best ideas and biggest ambitions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyFeatures.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div key={i} className="text-center p-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 uppercase tracking-wide mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="relative py-20 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 uppercase tracking-tight mb-4">
              Our Space
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A modern, inspiring environment designed for focused work and spontaneous collaboration.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl aspect-square"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${img.src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-display font-semibold uppercase tracking-wide text-sm">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      <Footer />
    </div>
  )
}
