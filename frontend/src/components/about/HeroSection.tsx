import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Decorative radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(201,168,76,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Decorative corner accents */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-gold opacity-10 rounded-br-full"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-gold opacity-10 rounded-tl-full"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20 pb-16">
        {/* Eyebrow */}
        <p className="font-body text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-6 animate-fade-in">
          Trusted Financial Professionals
        </p>

        {/* Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in-up">
          LGP Tax &amp; Wealth
          <br />
          <span className="text-gold">Management</span>
        </h1>

        {/* Gold divider */}
        <div
          aria-hidden="true"
          className="h-0.5 w-20 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-7"
        />

        {/* Tagline */}
        <p
          className="font-body text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.15s' }}
        >
          Trusted financial guidance for individuals and businesses — tax planning, wealth
          management, and strategic advisory under one roof.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '0.25s' }}
        >
          <Link href="/services" className="btn-gold">
            Our Services
          </Link>
          <Link href="/contact" className="btn-outline-white">
            Get In Touch
          </Link>
        </div>

        {/* Trust indicators */}
        <div
          className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          {[
            { value: '8+', label: 'Years of Experience' },
            { value: '4', label: 'Certifications Held' },
            { value: 'Bilingual', label: 'English & Mandarin' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-3xl font-bold text-gold">{value}</p>
              <p className="font-body text-xs text-gray-400 mt-1 tracking-wide uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg
          className="w-6 h-6 text-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
