import { whatsappLink } from '../utils/whatsapp'

const CERTIFICATIONS = [
  { code: 'VCS', name: 'Verra Standard', desc: 'Principal selo internacional para créditos de carbono voluntários.' },
  { code: 'GOLD', name: 'Gold Standard', desc: 'Alternativa premium com foco em desenvolvimento sustentável.' },
  { code: 'MBRE', name: 'Mercado Brasileiro', desc: 'Estratégico para atuação no mercado nacional de redução de emissões.' },
  { code: 'I-REC', name: 'Energia Renovável', desc: 'Certificado complementar de atributos de energia renovável.' },
  { code: '14064', name: 'ISO Standard', desc: 'Valida a metodologia de quantificação de gases de efeito estufa.' },
]

export default function Sustentabilidade() {
  return (
    <main className="min-h-screen relative">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-40 grayscale contrast-125"
            alt="Energia sustentável"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSlBq-rQhQd9_sV0AxhAWQUpg-aGgiTKDurGlSC6uP-5zO8o-_NzdEFdx7iwWMleTnifL-ZbAhSsqne-uSXF0IS4fOkqdl3RTAFHnMaYredi7YEyvbenZFVINC-dPdZClRfpj6NC_P7ZEdnLmRBwI9vbuhRhGT4FWoZMYJrfAJmP_nzlWgxQhPSHQZ8n6cKHx40kYELBEaVq1thcMnKXDCw9r5bfBhhsW-Pohh7sGwbz9DaRs7rghGYIaj97YD5EFebNbR7jghLdKq"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold uppercase tracking-tighter leading-none mb-4">
              Créditos de<br /><span className="text-primary">Carbono</span>
            </h1>
            <div className="flow-line" />
            <p className="mt-8 text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              O Sistema Ventiloar reduz o consumo de energia em até 80%, gerando impacto direto na redução da pegada de CO₂ industrial. Estamos em processo de certificação de créditos de carbono.
            </p>
          </div>
        </div>
      </section>

      {/* Impacto */}
      <section className="py-20 md:py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 bg-surface-container-high p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-8xl md:text-9xl">eco</span>
              </div>
              <h2 className="text-3xl font-headline font-bold uppercase tracking-wider mb-6">
                Eficiência que Gera Impacto Ambiental
              </h2>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-6xl md:text-8xl font-headline font-bold text-primary">80%</span>
                <span className="text-xl text-on-secondary-container uppercase font-headline">Economia de Energia</span>
              </div>
              <p className="text-on-surface-variant leading-relaxed max-w-lg mb-8">
                Cada kilowatt-hora economizado significa menos CO₂ na atmosfera. Nosso sistema de ventilação centralizado não apenas reduz custos, mas contribui diretamente para a sustentabilidade ambiental da sua operação.
              </p>
              <div className="flex items-center gap-4 py-4 px-6 bg-surface-container-lowest inline-flex">
                <div className="w-3 h-3 rounded-full bg-primary-container animate-pulse shadow-[0_0_10px_theme(colors.primary-container)]" />
                <span className="font-headline text-xs font-bold uppercase tracking-widest text-primary">
                  Impacto Mensurável
                </span>
              </div>
            </div>

            <div className="md:col-span-5 grid grid-rows-2 gap-8">
              <div className="bg-surface-container-highest p-6 md:p-8 border-l-4 border-tertiary-container">
                <h3 className="font-headline font-bold uppercase text-sm tracking-widest mb-2 text-tertiary">
                  Status da Certificação
                </h3>
                <div className="flex items-center gap-4 mt-4">
                  <span className="material-symbols-outlined text-4xl text-tertiary">hourglass_top</span>
                  <span className="text-xl md:text-2xl font-headline font-bold uppercase tracking-tight">Em Andamento</span>
                </div>
                <p className="mt-4 text-sm text-on-surface-variant italic">
                  Processos de auditoria e conformidade com padrões globais de compensação de carbono em curso.
                </p>
              </div>
              <div className="industrial-pattern p-6 md:p-8 bg-surface-container">
                <div className="glass-panel h-full p-6 flex flex-col justify-center">
                  <span className="material-symbols-outlined text-primary mb-4">analytics</span>
                  <p className="font-headline text-lg font-bold uppercase tracking-tight">Análise de Ciclo de Vida</p>
                  <p className="text-xs text-on-surface-variant mt-2 leading-tight">
                    Quantificação rigorosa de gases de efeito estufa baseada na ISO 14064.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video / Explicativo */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 aspect-video bg-surface-container-lowest relative group cursor-pointer overflow-hidden ring-1 ring-outline-variant/15">
            <img
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              alt="Vídeo explicativo sobre créditos de carbono"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvBQpzPcqqj6GUuQb7J9rP2BJqug16LRcEAcFkTvBR1CQ4DR0dKomKk2ESOojZRJatIOpiNy-s1KPj9i_YUh5hgzA4JcbnTL8pKL_s9ZZQUhtn6ud08H_FZZ7S46EnKb2wkCCptueNEiVodvfl6LkMsr-pD4HQ-qj658NHLBHiTARj02cj80g8LN1wJfQMpC6kCDAtevUD-ij1Ym091nRT-KFB2Z4JCa5fo9ltHjlIetUOHswE1UeD6VN5t43U51wal2PvvYLUSkcZ"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-container rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-on-primary-container text-3xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-4 md:p-6 bg-gradient-to-t from-background to-transparent w-full">
              <p className="font-headline text-xs font-bold uppercase tracking-[0.2em]">Assistir: O Futuro da Ventilação Sustentável</p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase tracking-tighter mb-4">
              Ventilação com<br />Propósito Ambiental
            </h2>
            <div className="flow-line mb-8" />
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              Entenda como a economia de energia do Sistema Ventiloar se traduz em créditos de carbono. Cada instalação contribui diretamente para a redução de emissões — beneficiando o seu negócio e o meio ambiente.
            </p>
            <ul className="space-y-4">
              {[
                'Redução direta de emissões (Escopo 2)',
                'Metodologia certificável internacionalmente',
                'Retorno financeiro via mercado de carbono',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="text-sm font-headline uppercase tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="py-20 md:py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-sm font-headline font-bold text-outline uppercase tracking-[0.3em] mb-12">
            Certificações em Processo de Homologação
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.code} className="flex flex-col items-center gap-4 group">
                <div className="w-20 h-20 flex items-center justify-center border border-outline-variant/30 font-headline font-bold text-xl opacity-40 group-hover:opacity-100 group-hover:border-primary-container/50 transition-all">
                  {cert.code}
                </div>
                <span className="text-[10px] font-headline uppercase tracking-widest">{cert.name}</span>
                <p className="text-[10px] text-on-surface-variant leading-tight max-w-[140px]">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 industrial-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold uppercase tracking-tight mb-8">
              Quer saber mais sobre o impacto ambiental do seu projeto?
            </h2>
            <p className="text-on-surface-variant mb-12 text-lg">
              Converse com nossa equipe sobre como o Sistema Ventiloar pode contribuir para os seus objetivos de sustentabilidade.
            </p>
            <a
              href={whatsappLink('Olá! Quero saber mais sobre o impacto ambiental do Sistema Ventiloar e créditos de carbono.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-on-primary px-10 py-5 rounded-sm font-headline font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-[0_20px_40px_-10px_rgba(150,234,255,0.3)]"
            >
              Falar com a Equipe
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
