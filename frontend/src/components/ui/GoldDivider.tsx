interface GoldDividerProps {
  className?: string
  align?: 'left' | 'center' | 'right'
}

export default function GoldDivider({ className = '', align = 'center' }: GoldDividerProps) {
  const alignClass = align === 'left' ? 'mr-auto' : align === 'right' ? 'ml-auto' : 'mx-auto'
  return (
    <div
      className={`h-1 w-16 rounded-full bg-gold-gradient ${alignClass} my-5 ${className}`}
      aria-hidden="true"
    />
  )
}
