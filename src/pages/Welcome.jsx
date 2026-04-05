import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 industrial-pattern opacity-5 pointer-events-none" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-surface-container-low pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <span className="text-[10px] font-headline uppercase tracking-[0.5em] text-primary-container block mb-4">
            Bem-vindo à
          </span>
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-headline font-bold uppercase tracking-tighter leading-none text-on-surface">
            VENTILOAR
          </h1>
          <div className="w-24 h-1 bg-primary-container mx-auto mt-6" />
        </div>

        {/* Tagline */}
        <p className="text-on-surface-variant text-sm md:text-base font-body leading-relaxed mb-12 max-w-lg mx-auto">
          Ventilação inteligente para grandes espaços — inovação, eficiência energética e sustentabilidade.
        </p>

        {/* Enter button */}
        <Link
          to="/inicio"
          className="group inline-flex items-center gap-3 bg-primary-container text-on-primary-container px-10 py-4 font-headline font-bold uppercase text-sm tracking-widest hover:bg-primary transition-all active:scale-95 duration-150"
        >
          Entrar no Site
          <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>

        {/* Subtle hint */}
        <div className="mt-16 animate-bounce">
          <span className="material-symbols-outlined text-on-surface-variant/30 text-2xl">
            expand_more
          </span>
        </div>
      </div>
    </main>
  )
}
