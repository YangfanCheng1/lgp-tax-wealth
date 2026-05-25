import SectionWrapper from '@/components/ui/SectionWrapper'
import GoldDivider from '@/components/ui/GoldDivider'

const timeline = [
  {
    period: '2023 – Present',
    role: 'Senior Tax Accountant',
    organization: 'Barry M. Strauss Associates, Ltd — New York City',
    description:
      'Leads preparation and review of complex U.S. federal returns across multiple entity types — Forms 1040/1040NR, 1120/1120S/1120F, 1065, 709, and 706 — for individuals, businesses, and high-net-worth clients.',
  },
  {
    period: '2022 – 2023',
    role: 'Tax Accountant',
    organization: 'Freedman & Co., CPA, PC — New York City',
    description:
      'Prepared and reviewed multi-entity federal and state tax returns. Deepened expertise in complex individual and business filings, expanding knowledge of trust and estate taxation in a full-service CPA practice.',
  },
  {
    period: '2021 – 2022',
    role: 'Staff Tax Accountant',
    organization: 'AVASK Accounting & Business Consultants',
    description:
      'Prepared partnership, corporate, individual, and fiduciary tax returns, including federal and state income tax, sales tax, use tax, and payroll tax. Conducted tax research, assisted with IRS/state audits, and responded to client tax notices.',
  },
  {
    period: '2017 – 2021',
    role: 'Accountant',
    organization: 'JBAOXIN Health & Co Inc — Greater New York City Area',
    description:
      'Generated financial statements using QuickBooks, ensured GAAP compliance, and assisted external CPAs with tax return preparation. Responsible for revenue recognition, accrual accounting, and full-cycle bookkeeping.',
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
