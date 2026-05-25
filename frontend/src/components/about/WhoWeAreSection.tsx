import SectionWrapper from '@/components/ui/SectionWrapper'
import GoldDivider from '@/components/ui/GoldDivider'

const stats = [
  { value: '8+', label: 'Years in Tax & Accounting' },
  { value: '4', label: 'Professional Certifications' },
  { value: '2', label: 'Languages Served' },
  { value: 'NYC', label: 'Metropolitan Area' },
]

export default function WhoWeAreSection() {
  return (
    <SectionWrapper className="bg-white" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text column */}
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
            {['Personalized Service', 'Transparent Fees', 'Fiduciary Standard'].map((v) => (
              <span
                key={v}
                className="inline-flex items-center gap-2 px-4 py-2 bg-light-gray rounded-full text-sm font-body font-medium text-navy"
              >
                <svg
                  className="w-4 h-4 text-gold flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
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

        {/* Stats card column */}
        <div className="bg-navy rounded-2xl p-8 shadow-card-hover">
          <h3 className="font-display text-white text-xl font-semibold mb-8 text-center">
            By the Numbers
          </h3>
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center p-4 rounded-xl bg-navy-light">
                <p className="font-display text-3xl font-bold text-gold mb-1">{value}</p>
                <p className="font-body text-xs text-gray-400 leading-snug uppercase tracking-wider">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-navy-light text-center">
            <p className="font-body text-sm text-gray-400 italic">
              &ldquo;Our mission is your financial peace of mind.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
