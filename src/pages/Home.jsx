import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden technical-grid px-6 md:px-8 py-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-surface-container-low/40 to-background" />

        {/* Decorative SVG */}
        <div className="absolute right-0 top-1/4 opacity-10 pointer-events-none select-none hidden md:block">
          <svg className="stroke-primary-container fill-none" height="600" width="600" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" strokeDasharray="2 2" />
            <path d="M50 5 L50 95 M5 50 L95 50" strokeWidth="0.1" />
            <circle cx="50" cy="50" r="20" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/30 border-l-2 border-primary-container">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_8px_theme(colors.primary-container)]" />
              <span className="text-xs font-label uppercase tracking-widest text-primary">
                Ventilação Inteligente — Ceará
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold text-on-background leading-[1.1] uppercase tracking-tight">
              Um motor.<br />Até 10 hélices.<br />
              <span className="text-primary-container">80% menos energia.</span>
            </h1>

            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              O Sistema Ventiloar revoluciona a ventilação industrial e comercial com tecnologia de transmissão mecânica centralizada. Menos pontos de falha, máxima eficiência e redução drástica no custo operacional.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/orcamento"
                className="bg-tertiary-container text-on-tertiary px-8 md:px-10 py-4 rounded-sm font-label font-bold uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-tertiary-container/10"
              >
                Solicitar Orçamento
              </Link>
              <Link
                to="/produto"
                className="border border-outline-variant/30 text-on-surface px-8 md:px-10 py-4 rounded-sm font-label font-bold uppercase tracking-widest text-sm hover:bg-surface-container-high transition-all"
              >
                Ver Produto
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square rounded-sm overflow-hidden bg-surface-container-low border border-outline-variant/20">
              <img
                alt="Sistema de ventilação industrial Ventiloar"
                className="w-full h-full object-cover mix-blend-luminosity opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjLci_QdWB_a_IvANi1PfX5Uz1_g9dfoUDweA7U2YP43fvTvvQxv6h3PvZm8Jk6vuUh1uJW9gAciCulTCmQj3mtpziqp3dwIdQNrdZcUBqvqvnjXiw35ef9d5kfesZTABdQOFjJqPdM_m_UtginTspyKRBXFF99__LMj6-KbPc77Dfn8ajX9GVk8h1jiYncmeXIK7Wzak4MDdeQlPb5mP1EbCndOo8KxnfgbVtfRoFvoa1DJOtI38X1N4tdppSmArbsU1iXa130o3z"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

              {/* Floating telemetry card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-surface-container-low/60 backdrop-blur-xl border-l-4 border-primary-container">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-label text-primary uppercase tracking-widest mb-1">Status do Sistema</p>
                    <p className="text-2xl font-headline font-bold text-on-surface">OPERACIONAL 100%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-label text-primary uppercase tracking-widest mb-1">Eficiência</p>
                    <p className="text-2xl font-headline font-bold text-tertiary-container">+80%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema vs Solução */}
      <section className="bg-surface-container-low py-20 md:py-24 px-6 md:px-8 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-headline font-bold uppercase tracking-wider text-on-surface">
              Problema vs. Solução
            </h2>
            <div className="flow-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20">
            {/* Problema */}
            <div className="bg-surface-container-low p-8 md:p-12 space-y-8">
              <div className="flex items-center gap-4 text-error">
                <span className="material-symbols-outlined text-4xl">warning</span>
                <h3 className="text-xl font-headline font-bold uppercase tracking-widest">O Modelo Tradicional</h3>
              </div>
              <ul className="space-y-6">
                {[
                  { title: 'Múltiplos Motores', desc: 'Maior probabilidade de falha mecânica e elétrica em cada unidade individual.' },
                  { title: 'Consumo Energético Elevado', desc: 'Cada motor operando independentemente gera desperdício massivo de energia elétrica.' },
                  { title: 'Manutenção Fragmentada', desc: 'Custo logístico alto para manter dezenas de motores em diferentes pontos.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="material-symbols-outlined text-error-container mt-1">close</span>
                    <div>
                      <p className="font-bold text-on-surface uppercase text-sm tracking-wide">{item.title}</p>
                      <p className="text-on-surface-variant text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solução */}
            <div className="bg-surface-container-high p-8 md:p-12 space-y-8 relative overflow-hidden">
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined text-4xl">verified</span>
                <h3 className="text-xl font-headline font-bold uppercase tracking-widest">O Sistema Ventiloar</h3>
              </div>
              <ul className="space-y-6">
                {[
                  { title: 'Motor Central Robusto', desc: 'Um único núcleo de potência de alta qualidade aciona todas as hélices simultaneamente.' },
                  { title: 'Redução de 80% no Consumo', desc: 'Transmissão mecânica eficiente elimina perdas eletrônicas de motores individuais.' },
                  { title: 'Manutenção Simplificada', desc: 'Um ponto de manutenção único — acesso fácil, menor custo e menos paradas.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
                    <div>
                      <p className="font-bold text-on-surface uppercase text-sm tracking-wide">{item.title}</p>
                      <p className="text-on-surface-variant text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Números de Impacto */}
      <section className="py-20 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-right flex flex-col items-end">
            <h2 className="text-3xl font-headline font-bold uppercase tracking-wider text-on-surface">
              Métricas de Performance
            </h2>
            <div className="flow-line" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[600px]">
            {/* Large card */}
            <div className="sm:col-span-2 md:row-span-2 bg-surface-container-high p-8 md:p-10 flex flex-col justify-between border-t border-primary-container">
              <span className="material-symbols-outlined text-primary-container text-5xl">bolt</span>
              <div>
                <h4 className="text-6xl md:text-8xl font-headline font-bold text-on-surface leading-none tracking-tighter">80%</h4>
                <p className="text-xl font-headline font-bold uppercase tracking-widest text-primary mt-4">Economia Energética</p>
                <p className="text-on-surface-variant mt-4 max-w-sm">
                  Economia real comparada a ventiladores convencionais em ambientes industriais e comerciais.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-low p-6 md:p-8 flex flex-col justify-between border-r-2 border-outline-variant/10">
              <h4 className="text-4xl font-headline font-bold text-on-surface">2–10</h4>
              <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mt-2">Hélices por motor</p>
            </div>

            <div className="bg-surface-container-highest p-6 md:p-8 flex flex-col justify-between">
              <h4 className="text-4xl font-headline font-bold text-on-surface">01</h4>
              <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mt-2">Motor Centralizado</p>
            </div>

            <div className="sm:col-span-2 bg-surface-container-lowest p-6 md:p-8 flex items-center justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-xl md:text-2xl font-headline font-bold text-on-surface uppercase tracking-widest">
                  Atendimento<br />Todo Ceará
                </h4>
                <p className="text-sm text-primary mt-2">Logística e Suporte Regional</p>
              </div>
              <div className="opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-8xl md:text-9xl">map</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="bg-surface py-20 md:py-24 px-6 md:px-8 technical-grid">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-headline font-bold uppercase tracking-wider text-on-surface">
              Como Funciona
            </h2>
            <div className="flow-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: '01',
                icon: 'description',
                title: 'Solicite um Orçamento',
                desc: 'Preencha o formulário com as dimensões e tipo do seu espaço. É rápido e sem compromisso.',
              },
              {
                num: '02',
                icon: 'analytics',
                title: 'Análise do Espaço',
                desc: 'Nossa equipe técnica analisa as necessidades do seu ambiente para dimensionar o sistema ideal.',
              },
              {
                num: '03',
                icon: 'construction',
                title: 'Instalação Profissional',
                desc: 'Eletricistas parceiros credenciados realizam a instalação completa do sistema no local.',
              },
            ].map((step) => (
              <div key={step.num} className="space-y-6 relative">
                <div className="text-6xl font-headline font-bold text-outline-variant/20 absolute -top-8 -left-4">
                  {step.num}
                </div>
                <div className="w-16 h-16 bg-surface-container-high flex items-center justify-center border border-primary-container/30">
                  <span className="material-symbols-outlined text-primary">{step.icon}</span>
                </div>
                <h3 className="text-lg font-headline font-bold uppercase tracking-widest text-on-surface">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Últimas Notícias */}
      <section className="py-20 md:py-24 px-6 md:px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-headline font-bold uppercase tracking-wider text-on-surface">
              Novidades
            </h2>
            <div className="flow-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News 1 */}
            <div className="group bg-surface-container-low border border-outline-variant/10 hover:border-primary-container/50 transition-all p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="w-full md:w-48 aspect-square bg-surface-container-high flex-shrink-0 overflow-hidden">
                <img
                  alt="CearaTech Summit 2024"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuZI231ysvBtgXCYVHzvhABvre3ew0bLiUvkytK2gBqYdbED6LCxKKffJZ5nF4aH6e7OFahTvNgUFkqEJ-pRqqeI-EyDbI1iV1vifTtnT18cgmSUEYiMqOdENQgFVAV-gb0dZyzeoMVZfvt3haVEQMqNFVQfZAoauRr-Qm2PvVUPaB5N5d5QwDQ6Zqq1rBx9g9LZAeD_MiPbjL3e3qvY3_iFZ7zXrqbrNRRnwnJ3P8Ne5NJZyPAYGbJdeBuly-fFY-93NcDNxI0aO6"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-label uppercase">Evento</span>
                  <span className="text-[10px] text-on-surface-variant font-label uppercase">Out 2024</span>
                </div>
                <h4 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                  CearaTech Summit 2024
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  A Ventiloar foi apresentada no maior encontro de inovação do Ceará, marcando a entrada no ecossistema de inovação cearense.
                </p>
              </div>
            </div>

            {/* News 2 */}
            <div className="group bg-surface-container-low border border-outline-variant/10 hover:border-primary-container/50 transition-all p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="w-full md:w-48 aspect-square bg-surface-container-high flex-shrink-0 overflow-hidden">
                <img
                  alt="Aprovação TECNOVA III"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo460K77kyNQFB_C8NPeKMGnbFkBtP_8nyOzgpItod7A17bk2RAAa6MiW4fSN6eJDzwPtEgDYuGlGMmn8RW8o3wQ8y8NeEmQ8eJjg-7XmqfKZV5zp1cppqAkZ4cv2XnDx4m_Dx4Pohu2s6x9y7jbpHU-CjPGamDuSM0O4JpzNfgFYaJnEasVbo2olFv31XVnQ8H55kjAfl_m5e9zJ_vQ3dm08BKIqc6B4bzcKsBbn-05WTzb1ETVIaiYBw-5ubT9CnHRTO4dlrBNgO"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-label uppercase">Inovação</span>
                  <span className="text-[10px] text-on-surface-variant font-label uppercase">Set 2024</span>
                </div>
                <h4 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                  Aprovação TECNOVA III
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Ventiloar recebe apoio do programa TECNOVA III CE — FUNCAP/FINEP para expandir pesquisa e desenvolvimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-24 px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-container/5 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-headline font-bold uppercase tracking-tight text-on-surface">
            Pronto para reduzir sua conta de energia?
          </h2>
          <p className="text-on-surface-variant text-lg">
            Nossa equipe está pronta para dimensionar a solução ideal para o seu espaço.
          </p>
          <div className="pt-4">
            <Link
              to="/orcamento"
              className="inline-block bg-tertiary-container text-on-tertiary px-10 md:px-12 py-5 rounded-sm font-label font-bold uppercase tracking-widest text-base md:text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-tertiary-container/20"
            >
              Solicitar Orçamento Agora
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
