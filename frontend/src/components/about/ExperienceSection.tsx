import SectionWrapper from '@/components/ui/SectionWrapper'
import GoldDivider from '@/components/ui/GoldDivider'

const timeline = [
  {
    period: '2010 – 2013',
    role: 'Staff Accountant',
    organization: 'Deloitte LLP',
    description:
      'Provided audit and tax compliance services to Fortune 500 corporations and high-net-worth individuals. Developed foundational expertise in corporate tax strategy and complex multi-state filings.',
  },
  {
    period: '2013 – 2017',
    role: 'Senior Tax Advisor',
    organization: 'Regional Wealth Management Firm',
    description:
      'Led a team of four advisors delivering integrated tax and wealth planning for a portfolio of 150+ clients. Specialized in estate planning, trust structures, and tax-efficient investment strategies.',
  },
  {
    period: '2017 – 2021',
    role: 'Director of Financial Planning',
    organization: 'Apex Financial Group',
    description:
      'Oversaw financial planning operations for a $200M book of business. Introduced holistic planning frameworks that reduced average client tax burden by 18% while improving retirement readiness scores.',
  },
  {
    period: '2021 – Present',
    role: 'Founder & Principal Advisor',
    organization: 'LGP Tax & Wealth Management',
    description:
      'Founded LGP to deliver personalized, fiduciary-grade financial guidance to individuals, families, and small businesses. Combining deep technical expertise with genuine care for each client\'s unique goals.',
  },
]

export default function ExperienceSection() {
  return (
    <SectionWrapper className="bg-white" id="experience">
      <div className="text-center mb-12">
        <p className="font-body text-gold text-xs tracking-[0.25em] uppercase font-semibold mb-3">
          Professional Background
        </p>
        <h2 className="section-heading">Experience &amp; Expertise</h2>
        <GoldDivider />
        <p className="section-subheading mx-auto">
          A career built on excellence, integrity, and a relentless commitment to client outcomes.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div
          aria-hidden="true"
          className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent hidden sm:block"
        />

        <div className="space-y-10">
          {timeline.map(({ period, role, organization, description }, i) => (
            <div key={i} className="relative flex gap-6 sm:gap-8">
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-shrink-0 flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-navy border-4 border-gold flex items-center justify-center shadow-md z-10">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 card p-6 mb-2">
                {/* Period badge */}
                <span className="inline-block font-body text-xs font-bold text-gold tracking-widest uppercase bg-navy px-3 py-1 rounded-full mb-3">
                  {period}
                </span>

                <h3 className="font-display text-navy font-bold text-lg leading-snug">{role}</h3>
                <p className="font-body text-gold font-semibold text-sm mb-3">{organization}</p>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
