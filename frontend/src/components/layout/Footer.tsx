import Link from 'next/link'

const quickLinks = [
  { href: '/', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  'Tax Planning & Preparation',
  'Wealth Management',
  'Retirement Planning',
  'Estate Planning',
  'Business Tax Services',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-gray-300">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-4">
              <span className="font-display text-2xl font-bold text-gold">LGP</span>
              <p className="font-body text-xs text-gray-400 tracking-widest uppercase mt-0.5">
                Tax &amp; Wealth Management
              </p>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Professional financial guidance you can trust. Helping individuals and businesses
              achieve lasting financial clarity and security.
            </p>
            <div className="flex gap-2 mt-5 flex-wrap">
              {['CPA', 'CFP®', 'EA'].map((cert) => (
                <span
                  key={cert}
                  className="px-2.5 py-1 bg-navy-light border border-navy-light rounded text-gold text-xs font-semibold font-body tracking-wide"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="font-display text-white font-semibold text-base mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services & Contact */}
          <div>
            <h3 className="font-display text-white font-semibold text-base mb-4 tracking-wide">
              Services
            </h3>
            <ul className="space-y-2 mb-6">
              {services.map((s) => (
                <li key={s} className="text-sm text-gray-400">
                  {s}
                </li>
              ))}
            </ul>
            <div className="space-y-1.5 text-sm text-gray-400">
              <p className="font-semibold text-gray-300">Contact Us</p>
              <p>contact@lgptaxwealth.com</p>
              <p>(555) 000-0000</p>
              <p>123 Financial Plaza, Suite 100</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            &copy; {year} LGP Tax &amp; Wealth Management. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Securities and investment advisory services are provided by registered professionals.
          </p>
        </div>
      </div>
    </footer>
  )
}
