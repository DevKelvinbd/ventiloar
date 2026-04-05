import { Link } from 'react-router-dom'

export default function Produto() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center px-6 md:px-8 overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            alt="Infraestrutura industrial"
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOYcMlPitlKCCrPpwAIx63zU4i8O5D9ot8tfFU1JKdNTBNp3EwzrIwd5riEhLt1Mvu8ZKpjxa4WAVxa9VQ5FnmcS802nmZt-rmuxwA8tF6EpUg6apPtxZCzOX-nPM0z7ySJP2HU9KZT-bJcQ4ACgooD2O-nI3tarmo2_mtbi0kwcnmA6FVxcoeiFh8czQcl7fv9XrEviKYZmGawcPIJvMLVyAVTMSdXXsLk4rZ7v9qGt6LVYHyRnQ6gEtgwtexe6fV5kkKbSa-wIfO"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="text-primary-container font-headline font-bold uppercase tracking-[0.3em] text-sm block mb-4">
            Tecnologia de Transmissão
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold uppercase tracking-tighter leading-none mb-6">
            SISTEMA<br /><span className="text-primary">VENTILOAR</span>
          </h1>
          <div className="w-32 h-1 bg-primary-container mb-8" />
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
            Um único motor de alta qualidade aciona de 2 a 10 hélices via transmissão mecânica centralizada (Sistema 3F). Menos pontos de falha, máxima eficiência e economia de até 80%.
          </p>
        </div>
      </section>

      {/* Sistema 3F */}
      <section className="py-20 md:py-24 px-6 md:px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase tracking-tight">
              Transmissão Central: Sistema 3F
            </h2>
            <div className="flow-line mb-10" />

            <div className="space-y-8">
              <div className="p-6 md:p-8 bg-surface-container-low border-l-4 border-primary-container relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">settings_input_component</span>
                </div>
                <h3 className="text-xl font-headline font-bold uppercase mb-4">Fluxo de Força Fracionada</h3>
                <p className="text-on-surface-variant">
                  O Sistema 3F utiliza um motor central de alta potência que distribui torque para múltiplas hélices através de cabos e polias, eliminando a necessidade de motores individuais por ventilador. O resultado é menor consumo, menos manutenção e maior durabilidade.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-surface-container-high p-6 rounded-sm">
                  <span className="material-symbols-outlined text-primary mb-4">analytics</span>
                  <h4 className="font-headline font-bold uppercase text-sm mb-2">Monitoramento</h4>
                  <p className="text-xs text-on-surface-variant">
                    Sistema projetado para integração futura com sensores de desempenho e telemetria.
                  </p>
                </div>
                <div className="bg-surface-container-high p-6 rounded-sm">
                  <span className="material-symbols-outlined text-primary mb-4">shield_with_heart</span>
                  <h4 className="font-headline font-bold uppercase text-sm mb-2">Alta Durabilidade</h4>
                  <p className="text-xs text-on-surface-variant">
                    Componentes dimensionados para operação contínua com desgaste mínimo e vida útil prolongada.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Diagrama */}
          <div className="bg-surface-container-low p-1 rounded-sm industrial-pattern relative min-h-[500px]">
            <div className="bg-surface-container-lowest h-full w-full p-8 md:p-12 flex flex-col justify-center items-center gap-10 relative overflow-hidden">
              {/* Motor */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-surface-container-high rounded-sm border border-outline-variant/30 flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
                </div>
                <span className="mt-4 font-headline font-bold uppercase text-xs tracking-widest">Motor Central</span>
              </div>

              <div className="w-px h-12 bg-gradient-to-b from-primary-container to-transparent relative">
                <div className="absolute top-0 -left-1 w-3 h-3 bg-primary-container rounded-full animate-pulse" />
              </div>

              {/* Transmissão */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-32 h-20 bg-surface-container-high rounded-sm border border-outline-variant/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-4xl">settings</span>
                </div>
                <span className="mt-4 font-headline font-bold uppercase text-xs tracking-widest">Transmissão 3F</span>
              </div>

              <div className="w-px h-12 bg-gradient-to-b from-primary-container to-transparent" />

              {/* Hélices */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-primary-container/10 rounded-full border-2 border-primary-container border-dashed flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container text-4xl">air</span>
                </div>
                <span className="mt-4 font-headline font-bold uppercase text-xs tracking-widest">2 a 10 Hélices</span>
              </div>

              <div className="absolute bottom-6 right-6 text-right font-mono text-[10px] text-outline">
                <p>SISTEMA 3F — VENTILOAR</p>
                <p>ECONOMIA: ATÉ 80%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-20 md:py-24 px-6 md:px-8 bg-surface-container-low">
        <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase mb-2 tracking-tight max-w-7xl mx-auto">Vantagens Técnicas</h2>
        <p className="text-on-surface-variant mb-4 max-w-7xl mx-auto">Diferenciais que fazem a diferença no dia a dia.</p>
        <div className="flow-line mb-12 max-w-7xl mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Large */}
          <div className="md:col-span-2 bg-surface-container-high p-8 md:p-10 flex flex-col justify-between min-h-[350px]">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container">trending_up</span>
                </div>
                <h3 className="text-2xl font-headline font-bold uppercase">Economia Real de Energia</h3>
              </div>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Ao substituir múltiplos motores individuais por um único motor central de alta qualidade, o Sistema Ventiloar reduz drasticamente o consumo de energia elétrica — até 80% em comparação com ventiladores convencionais.
              </p>
            </div>
            <div className="mt-8 flex gap-12 border-t border-outline-variant/20 pt-8">
              <div>
                <span className="block text-3xl font-headline font-bold text-primary">80%</span>
                <span className="text-xs uppercase font-headline tracking-tighter opacity-60">Economia</span>
              </div>
              <div>
                <span className="block text-3xl font-headline font-bold text-primary">2–10</span>
                <span className="text-xs uppercase font-headline tracking-tighter opacity-60">Hélices/sistema</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-8 md:p-10 flex flex-col justify-center border-t-2 border-tertiary-container">
            <span className="material-symbols-outlined text-tertiary text-5xl mb-6">build</span>
            <h3 className="text-xl font-headline font-bold uppercase mb-4">Menos Manutenção</h3>
            <p className="text-on-surface-variant text-sm">
              Um motor central significa um único ponto de manutenção — reduzindo custos e tempo de parada.
            </p>
          </div>

          <div className="bg-surface-container-high p-8 md:p-10 relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-headline font-bold uppercase mb-4">Escalabilidade</h3>
              <p className="text-on-surface-variant text-sm">
                De 2m² a complexos industriais inteiros. A arquitetura modular permite expansão conforme a necessidade do espaço.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-all duration-500">
              <span className="material-symbols-outlined text-[150px]">zoom_out_map</span>
            </div>
          </div>

          <div className="bg-surface-container-high p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-headline font-bold uppercase mb-4">Configuração Flexível</h3>
              <p className="text-on-surface-variant text-sm">
                Cada sistema é dimensionado sob medida — de 2 a 10 hélices, ajustado conforme a planta do cliente.
              </p>
            </div>
            <div className="mt-6 flex gap-2">
              <div className="h-1 flex-1 bg-primary-container" />
              <div className="h-1 flex-1 bg-primary-container/40" />
              <div className="h-1 flex-1 bg-primary-container/20" />
            </div>
          </div>

          <div className="bg-primary-container/5 p-8 md:p-10 border border-primary-container/20 flex items-center gap-6">
            <span className="material-symbols-outlined text-primary-container text-4xl">construction</span>
            <div>
              <h3 className="text-lg font-headline font-bold uppercase">Instalação Inclusa</h3>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">
                Eletricistas parceiros credenciados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute inset-0 industrial-pattern opacity-[0.03]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold uppercase mb-8 tracking-tighter">
            Quer saber mais sobre o<br /><span className="text-primary">Sistema Ventiloar?</span>
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Solicite um orçamento sem compromisso e descubra quanto o seu negócio pode economizar.
          </p>
          <Link
            to="/orcamento"
            className="inline-block bg-tertiary-container text-on-tertiary px-10 md:px-12 py-5 rounded-sm font-headline font-bold uppercase text-lg tracking-widest hover:bg-tertiary-fixed transition-all duration-300 active:scale-95 shadow-[0_20px_40px_rgba(255,177,79,0.15)]"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </section>
    </main>
  )
}
