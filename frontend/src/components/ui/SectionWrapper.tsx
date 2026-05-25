interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  innerClassName?: string
}

export default function SectionWrapper({
  children,
  className = '',
  id,
  innerClassName = '',
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${innerClassName}`}>
        {children}
      </div>
    </section>
  )
}
