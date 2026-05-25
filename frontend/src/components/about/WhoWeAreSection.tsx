import Image from 'next/image'
import SectionWrapper from '@/components/ui/SectionWrapper'
import GoldDivider from '@/components/ui/GoldDivider'

const stats = [
  { value: '8+', label: 'Years in Tax & Accounting' },
  { value: '4', label: 'Professional Certifications' },
  { value: '2', label: 'Languages Served' },
  { value: 'NYC', label: 'Metropolitan Area' },
]

const badges = ['Personalized Service', 'Transparent Fees', 'Fiduciary Standard']

export default function WhoWeAreSection() {
  return (
    <SectionWrapper className="bg-white" id="about">
      {/* Top: bio + photo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">

        {/* Left — bio text */}
        <div>
          <p className="font-body text-gold text-xs tracking-[0.25em] uppercase font-semibold mb-3">
            Our Story
          </p>
          <h2 className="section-heading gold-accent-left mb-4">Who We Are</h2>
          <GoldDivider align="left" className="mb-6" />

          <div className="space-y-4 text-gray-600 font-body leading-relaxed">
            <p>
              LGP Tax &amp; Wealth Management is led by Louisa G. Peng, CFP®, CMA, EA — an
              accomplished Senior Tax Accountant with cross-border experience spanning New York and
              Shanghai. Louisa specializes in complex tax compliance and advisory for individuals,
              businesses, and high-net-worth clients.
            </p>
            <p>
              Her expertise spans the full spectrum of U.S. federal tax returns — including Forms
              1040/1040NR, 1120/1120S, 1065, and advanced gift and estate tax filings (Forms 709
              and 706) — paired with a strong background in corporate accounting and payroll
              operations.
            </p>
            <p>
              Bilingual in English and Mandarin Chinese, Louisa brings a unique perspective to
              serving a diverse clientele. She is also an active CPA candidate, committed to the
              highest standards of professional excellence.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((v) => (
              <span
                key={v}
                className="inline-flex items-center gap-2 px-4 py-2 bg-light-gray rounded-full text-sm font-body font-medium text-navy"
              >
                <svg className="w-4 h-4 text-gold flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-72 sm:w-80">
            {/* Offset navy shadow block */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-navy rounded-2xl" />
            {/* Gold accent dot */}
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gold opacity-80 z-10" />
            {/* Photo container */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-gold/50 shadow-xl z-10">
              <Image
                src="/louisa.jpg"
                alt="Louisa G. Peng, CFP® CMA EA"
                width={400}
                height={480}
                className="w-full object-cover object-top"
                priority
              />
              {/* Navy gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-navy via-navy/70 to-transparent" />
              {/* Name / credentials overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-display text-white font-bold text-lg leading-tight">
                  Louisa G. Peng
                </p>
                <p className="font-body text-gold text-sm mt-1 tracking-wide">
                  CFP® &middot; CMA® &middot; EA &middot; MBA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom — stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-gray-100 pt-10">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center p-4 rounded-xl bg-light-gray">
            <p className="font-display text-3xl font-bold text-navy mb-1">{value}</p>
            <p className="font-body text-xs text-gray-500 leading-snug uppercase tracking-wider">
              {label}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
