import type { Metadata } from 'next'
import ServicesHero from '@/components/services/ServicesHero'
import ServiceCard from '@/components/services/ServiceCard'
import SectionWrapper from '@/components/ui/SectionWrapper'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore LGP Tax & Wealth Management services: tax planning, wealth management, retirement planning, estate planning, and more.',
}

const TaxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const PiggyBankIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const TrendingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

const MapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
)

const services = [
  {
    title: 'Tax Planning',
    icon: <TaxIcon />,
    description:
      'Proactive, year-round tax strategies designed to legally minimize your tax burden — for individuals, families, and businesses at every income level.',
  },
  {
    title: 'Tax Preparation',
    icon: <ChartIcon />,
    description:
      'Accurate, timely preparation of federal and state returns for individuals, corporations, partnerships, trusts, and estates. No surprises at filing time.',
  },
  {
    title: 'Wealth Management',
    icon: <BriefcaseIcon />,
    description:
      'Comprehensive portfolio oversight aligned with your risk tolerance and long-term goals — integrating investments, taxes, and estate considerations.',
  },
  {
    title: 'Retirement Planning',
    icon: <PiggyBankIcon />,
    description:
      'Strategic planning to help you retire on your terms. We optimize Social Security timing, IRA strategies, and income distribution to maximize retirement security.',
  },
  {
    title: 'Investment Advisory',
    icon: <TrendingIcon />,
    description:
      'Evidence-based, fiduciary investment guidance that prioritizes your financial interests. Asset allocation tailored to your time horizon and objectives.',
  },
  {
    title: 'Estate Planning',
    icon: <HomeIcon />,
    description:
      'Preserve and transfer your wealth according to your wishes. We coordinate wills, trusts, beneficiary designations, and gifting strategies to protect your legacy.',
  },
  {
    title: 'Business Tax Services',
    icon: <BuildingIcon />,
    description:
      'Entity selection, payroll tax compliance, quarterly estimated payments, and exit-planning strategies for business owners and entrepreneurs.',
  },
  {
    title: 'Financial Planning',
    icon: <MapIcon />,
    description:
      'A holistic financial roadmap that brings together every dimension of your financial life — cash flow, insurance, education funding, and long-term wealth building.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <SectionWrapper className="bg-light-gray">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 rounded-2xl bg-navy p-10 text-center shadow-card">
          <h2 className="font-display text-2xl font-bold text-white mb-3">
            Not Sure Where to Start?
          </h2>
          <p className="font-body text-gray-300 mb-7 max-w-xl mx-auto">
            Schedule a complimentary consultation and we&apos;ll help you identify which services
            will have the greatest impact on your financial future.
          </p>
          <a href="/contact" className="btn-gold">
            Schedule a Consultation
          </a>
        </div>
      </SectionWrapper>
    </>
  )
}
