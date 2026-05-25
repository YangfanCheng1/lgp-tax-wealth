'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="flex flex-col leading-tight group"
            onClick={() => setMenuOpen(false)}
          >
            <span className="font-display text-2xl font-bold text-gold group-hover:text-gold-light transition-colors duration-200">
              LGP
            </span>
            <span className="font-body text-xs text-gray-300 tracking-widest uppercase">
              Tax &amp; Wealth Management
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-body font-medium text-sm tracking-wide transition-colors duration-200 pb-1 group ${
                    isActive ? 'text-gold' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
            <Link href="/contact" className="btn-gold text-sm px-6 py-2.5 ml-2">
              Get In Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded focus:outline-none focus:ring-2 focus:ring-gold"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-all duration-200 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-all duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white rounded transition-all duration-200 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden bg-navy-dark border-t border-navy-light transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-body font-medium text-sm transition-colors duration-150 ${
                  isActive
                    ? 'bg-navy-light text-gold'
                    : 'text-gray-200 hover:bg-navy-light hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-gold text-sm mt-2 py-3"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  )
}
