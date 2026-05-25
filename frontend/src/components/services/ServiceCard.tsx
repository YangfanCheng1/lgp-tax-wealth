interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="card p-7 flex flex-col h-full">
      {/* Icon container */}
      <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mb-5 shadow-md flex-shrink-0">
        <div className="text-gold w-7 h-7">{icon}</div>
      </div>

      {/* Title */}
      <h3 className="font-display text-navy font-semibold text-lg mb-3 leading-snug">{title}</h3>

      {/* Description */}
      <p className="font-body text-gray-600 text-sm leading-relaxed flex-1">{description}</p>

      {/* Learn more link */}
      <div className="mt-5 pt-4 border-t border-gray-100">
        <a
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-gold hover:text-gold-dark transition-colors duration-150 group"
        >
          Learn More
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}
