import SectionWrapper from '@/components/ui/SectionWrapper'
import GoldDivider from '@/components/ui/GoldDivider'

const certifications = [
  {
    abbr: 'CPA',
    name: 'Certified Public Accountant',
    issuer: 'American Institute of CPAs (AICPA)',
    description:
      'The gold standard in accounting, ensuring rigorous expertise in tax, audit, and financial reporting.',
  },
  {
    abbr: 'CFP®',
    name: 'Certified Financial Planner',
    issuer: 'CFP Board',
    description:
      'Comprehensive financial planning credential covering investments, taxes, retirement, and estate planning.',
  },
  {
    abbr: 'EA',
    name: 'Enrolled Agent',
    issuer: 'Internal Revenue Service (IRS)',
    description:
      'The highest credential awarded by the IRS, authorizing unlimited practice before the IRS.',
  },
  {
    abbr: 'PFS',
    name: 'Personal Financial Specialist',
    issuer: 'American Institute of CPAs (AICPA)',
    description:
      'Advanced credential for CPAs who specialize in personal financial planning and wealth management.',
  },
]

export default function CertificationsSection() {
  return (
    <SectionWrapper className="bg-light-gray" id="certifications">
      <div className="text-center mb-12">
        <p className="font-body text-gold text-xs tracking-[0.25em] uppercase font-semibold mb-3">
          Credentials &amp; Qualifications
        </p>
        <h2 className="section-heading">Professional Certifications</h2>
        <GoldDivider />
        <p className="section-subheading mx-auto">
          Our credentials represent years of rigorous study, examination, and a continued
          commitment to the highest professional and ethical standards.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map(({ abbr, name, issuer, description }) => (
          <div key={abbr} className="card p-6 flex flex-col">
            {/* Abbreviation badge */}
            <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-5 shadow-md">
              <span className="font-display text-gold font-bold text-lg leading-none">{abbr}</span>
            </div>

            {/* Name */}
            <h3 className="font-display text-navy font-semibold text-base mb-1 leading-snug">
              {name}
            </h3>

            {/* Issuer */}
            <p className="font-body text-xs text-gold font-medium mb-3">{issuer}</p>

            {/* Description */}
            <p className="font-body text-sm text-gray-600 leading-relaxed flex-1">{description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
