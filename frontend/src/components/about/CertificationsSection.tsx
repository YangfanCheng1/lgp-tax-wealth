import SectionWrapper from '@/components/ui/SectionWrapper'
import GoldDivider from '@/components/ui/GoldDivider'

const certifications = [
  {
    abbr: 'CFP®',
    name: 'Certified Financial Planner',
    issuer: 'CFP Board',
    description:
      'Comprehensive financial planning credential covering investments, taxes, retirement, and estate planning strategies for individuals and families.',
    verifyUrl: 'https://certificates.cfp.net/1725029b-9421-4239-b7dc-314fd79c1876#acc.lYMcewOt',
  },
  {
    abbr: 'FPC',
    name: 'Financial Planning Certificate',
    issuer: 'CFP Board',
    description:
      'Certificate program covering the core competencies of financial planning, including investment, tax, retirement, and estate planning strategies.',
    verifyUrl: 'https://www.credly.com/badges/8fb1c669-67c5-485f-b649-242a7a985dc8',
  },
  {
    abbr: 'CMA®',
    name: 'Certified Management Accountant',
    issuer: 'Institute of Management Accountants (IMA)',
    description:
      'Advanced credential in financial management and strategy, covering corporate accounting, financial analysis, and decision-making.',
    verifyUrl: 'https://www.credly.com/badges/aa268e88-aa5e-44ee-8bea-bf1dec128311',
  },
  {
    abbr: 'EA',
    name: 'Enrolled Agent',
    issuer: 'Internal Revenue Service (IRS)',
    description:
      'The highest credential awarded by the IRS, granting unlimited practice rights to represent taxpayers before the IRS nationwide.',
    verifyUrl: null,
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
        {certifications.map(({ abbr, name, issuer, description, verifyUrl }) => {
          const inner = (
            <div className="card p-6 flex flex-col h-full">
              <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-5 shadow-md flex-shrink-0">
                <span className="font-display text-gold font-bold text-lg leading-none">{abbr}</span>
              </div>
              <h3 className="font-display text-navy font-semibold text-base mb-1 leading-snug">
                {name}
              </h3>
              <p className="font-body text-xs text-gold font-medium mb-3">{issuer}</p>
              <p className="font-body text-sm text-gray-600 leading-relaxed flex-1">{description}</p>
              {verifyUrl && (
                <p className="font-body text-xs text-navy font-semibold mt-4">
                  Verify credential →
                </p>
              )}
            </div>
          )

          return verifyUrl ? (
            <a
              key={abbr}
              href={verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:-translate-y-1 hover:shadow-card-hover transition-all duration-200 rounded-2xl"
            >
              {inner}
            </a>
          ) : (
            <div key={abbr}>
              {inner}
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
