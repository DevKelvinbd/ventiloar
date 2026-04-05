import { Link } from 'react-router-dom'

const TIMELINE = [
  { year: '2004–2023', title: '20 Anos de Experiência', desc: 'Atuação como eletricista na prefeitura, acumulando conhecimento prático sobre ventilação em ambientes públicos e comerciais.', color: 'primary-container' },
  { year: 'Jan 2024', title: 'Primeiros Protótipos', desc: 'Com R$ 5.000 emprestados pela esposa, o fundador construiu os primeiros protótipos do sistema de ventilação centralizada.', color: 'primary-container' },
  { year: 'Mai 2024', title: 'CearaTech Summit', desc: 'Apresentação no maior evento de inovação do Ceará, onde a Ventiloar entrou no ecossistema de inovação cearense.', color: 'primary-container' },
  { year: 'Set 2024', title: 'Aprovação TECNOVA III', desc: 'Aprovação no programa TECNOVA III CE — FUNCAP/FINEP, garantindo fomento para pesquisa e desenvolvimento.', color: 'tertiary-container' },
  { year: 'Hoje', title: 'Lançamento Comercial', desc: 'Início das operações comerciais no Ceará com rede de parceiros e eletricistas credenciados.', color: 'primary' },
]

export default function QuemSomos() {
  return (
    <main className="min-h-screen relative">
      {/* Hero */}
      <section className="relative min-h-[55vh] md:min-h-[60vh] flex items-center px-6 md:px-8 py-20 overflow-hidden">
        <div className="industrial-pattern absolute inset-0 z-0 opacity-10" />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <h1 className="font-headline font-bold text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter mb-4 leading-none">
              Da necessidade real<br />à <span className="text-primary">solução inovadora.</span>
            </h1>
            <div className="w-32 h-0.5 bg-primary-container mb-8" />
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Nascida do chão de fábrica, forjada pela experiência técnica e movida pela busca por eficiência energética real no coração do Ceará.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="bg-surface-container-high p-4 rounded-sm transform rotate-1 shadow-2xl">
              <img
                alt="Fundador da Ventiloar"
                className="w-full h-auto rounded-sm grayscale hover:grayscale-0 transition-all duration-500 aspect-[4/3] object-cover bg-surface-container-lowest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTUuLttc03UxdxCpSweXtqc1REm0hqWQmXtzktrxwH_Uoqx_ipX2smUuTvfCilaGjWweqrEbzSxF0dJ6wKZf-Ikf3COBC9DaBIqRvhrc4ry_hYV9urdr45T8ubfESmhslmzoUbXQvh6I9Q2_Bmda5BAKJqS4NsCh1VtN2MvUUg8pkUe-VMHMOgbGPFuDj5KSSiLJmIcEkanPD9cnDhjtPuc1-IMVAmMleC9j340QWMwJbV-AGqbe5dMpUZ6zEx6qUqWNWBWXcDvSHo"
              />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-headline font-bold text-sm uppercase">Fundador</p>
                  <p className="text-primary-container text-xs">20 Anos de Experiência Técnica</p>
                </div>
                <span className="material-symbols-outlined text-primary-container">verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 md:py-24 px-6 md:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline font-bold text-3xl uppercase tracking-wider mb-2">A História por trás do Ar</h2>
          <div className="flow-line mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-high p-8 flex flex-col justify-between border-l-4 border-primary/20">
              <div>
                <span className="material-symbols-outlined text-primary mb-4 text-4xl">electric_bolt</span>
                <h3 className="font-headline font-bold text-xl uppercase mb-4">A Base Técnica</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Foram 20 anos como eletricista. Durante esse tempo, o fundador identificou o problema mais comum da ventilação em larga escala: motores individuais que queimam, consomem demais e exigem manutenção constante.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-5">
                <span className="material-symbols-outlined text-on-surface text-9xl">savings</span>
              </div>
              <div>
                <span className="material-symbols-outlined text-tertiary mb-4 text-4xl">payments</span>
                <h3 className="font-headline font-bold text-xl uppercase mb-4">O Investimento Inicial</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Com R$ 5.000 emprestados pela esposa, o fundador construiu os primeiros protótipos na garagem de casa. Um investimento humilde para uma visão que o calor do Ceará exigia.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-high p-8 flex flex-col justify-between border-r-4 border-primary-container/20">
              <div>
                <span className="material-symbols-outlined text-primary-container mb-4 text-4xl">lightbulb</span>
                <h3 className="font-headline font-bold text-xl uppercase mb-4">O Ponto de Virada</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  CearaTech Summit 2024. Mesmo em dúvida sobre a relevância da ideia, o fundador apresentou o projeto — e descobriu o edital TECNOVA III. A Ventiloar entrou no ecossistema de inovação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão & Visão */}
      <section className="py-20 md:py-24 px-6 md:px-8 flex flex-col lg:flex-row gap-8 md:gap-12 max-w-7xl mx-auto items-stretch">
        <div className="flex-1 bg-surface-container-high p-8 md:p-12 relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary-container" />
          <h2 className="font-headline font-bold text-3xl md:text-4xl uppercase mb-6 tracking-tighter">Nossa Missão</h2>
          <p className="text-lg text-on-surface leading-relaxed italic">
            "Levar eficiência energética real para empresas cearenses através de tecnologia de ventilação inteligente."
          </p>
        </div>
        <div className="flex-1 bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/15">
          <h2 className="font-headline font-bold text-3xl md:text-4xl uppercase mb-6 tracking-tighter">Nossa Visão</h2>
          <p className="text-lg text-on-surface leading-relaxed">
            Ser referência nacional em sistemas de ventilação centralizada sustentável, provando que alta performance industrial e responsabilidade ambiental caminham juntas.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="h-1 flex-1 bg-secondary-container" />
            <div className="h-1 flex-1 bg-primary-container/40" />
            <div className="h-1 flex-1 bg-primary-container" />
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 px-6 md:px-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline font-bold text-2xl uppercase tracking-wider mb-2">Diferenciais</h2>
          <div className="flow-line mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'engineering', text: '20 anos de expertise técnica em campo' },
              { icon: 'science', text: 'Produto desenvolvido da necessidade real' },
              { icon: 'workspace_premium', text: 'Aprovado no TECNOVA III CE — FUNCAP/FINEP' },
              { icon: 'eco', text: 'Em processo de certificação de créditos de carbono' },
            ].map((d) => (
              <div key={d.icon} className="bg-surface-container-high p-6 flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container text-2xl mt-0.5">{d.icon}</span>
                <p className="text-sm text-on-surface leading-relaxed">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-24 px-6 md:px-8 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-[1px] flex-grow bg-outline-variant/30" />
            <h2 className="font-headline font-bold text-xl md:text-2xl uppercase tracking-[0.2em] text-center">Nossa Trajetória</h2>
            <div className="h-[1px] flex-grow bg-outline-variant/30" />
          </div>

          <div className="space-y-10 md:space-y-12 relative">
            <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-outline-variant/20 hidden md:block" />

            {TIMELINE.map((item) => (
              <div key={item.year} className="flex flex-col md:flex-row gap-6 md:gap-8 relative">
                <div className={`w-6 h-6 rounded-full bg-${item.color} border-4 border-surface z-10 flex-shrink-0 md:mt-1`} />
                <div>
                  <span className={`text-xs font-headline font-bold text-${item.color} uppercase tracking-widest block mb-2`}>
                    {item.year}
                  </span>
                  <h4 className="text-xl font-headline font-bold uppercase mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant max-w-2xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto bg-surface-container-high rounded-sm overflow-hidden relative border border-outline-variant/10">
          <div className="absolute inset-0 industrial-pattern pointer-events-none opacity-5" />
          <div className="relative z-10 p-8 md:p-16 lg:p-20 flex flex-col items-center text-center">
            <div className="mb-6 flex gap-1">
              <div className="w-1 h-8 bg-primary animate-pulse" />
              <div className="w-1 h-8 bg-primary/60 animate-pulse" style={{ animationDelay: '75ms' }} />
              <div className="w-1 h-8 bg-primary/30 animate-pulse" style={{ animationDelay: '150ms' }} />
            </div>
            <h2 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-tighter mb-6">
              Quer conhecer a Ventiloar de perto?
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mb-10">
              Fale com nossa equipe para entender como podemos reduzir o custo de ventilação do seu negócio.
            </p>
            <Link
              to="/orcamento"
              className="bg-tertiary-container text-on-tertiary px-10 py-4 rounded-sm font-label font-bold uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
