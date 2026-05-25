export default function ContactHero() {
  return (
    <section className="relative bg-hero-gradient pt-20 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="font-body text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
          Reach Out
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5">
          Contact Us
        </h1>
        <div
          aria-hidden="true"
          className="h-0.5 w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
        />
        <p className="font-body text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
          Ready to take control of your financial future? Send us a message and we&apos;ll be in
          touch within one business day.
        </p>
      </div>
    </section>
  )
}
