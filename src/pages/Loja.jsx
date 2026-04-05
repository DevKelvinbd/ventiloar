import { whatsappLink } from '../utils/whatsapp'

const PRODUCTS = [
  {
    name: 'Engrenagem Cônica',
    desc: 'Aço temperado de alta resistência com perfil de dente otimizado para transmissão silenciosa e eficiente no Sistema 3F.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAm3y71T3K_xiJBImo7vsnfHK34xUqGhI6gjvBM78PII2MvoF-spTsM8d-JYibMNQJzyMn8NRLFkXHTpPJDqNbjayb1Or0ucsugGfGjnvwehdDheXyAyNIwFmf0Pt3oYx0_USrDYW8Pb3-eXSatmACHHgU2jYtp0AbhtiRifLn8q6TfUjfGk2GFPCSpHQg1EvR6tXo3QI1Q1FjSrkQI71P17_fRpPSfub4WizYFkcRPgtf7DxauOSawImhriYDOjuZBcE4YoK-NQh2',
  },
  {
    name: 'Suporte / Braçadeira Metálica',
    desc: 'Braçadeira estrutural em aço galvanizado com sistema de fixação antivibração para montagem segura.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHZr_38U3v5PjloCfy6k6Taxcg7NfW_PApv-zz0QxqcADZkQ2TfdEfYCSd7TOWroad06Hn6xGr3_2lDdrzmQv9YjcbuHPfzsKmsRIN8GubRQzsEeOco8lSkRJR5aQEkdB2iYojeR4gqpuXXjeW9QwyaypQHL2bW9kAYU23B18HsqZCk6u3PWnTeFBT8lZfq_fBXeCaC4bC5pba3Kov6Tx_XommIvw5HRfnpKgK0uOdMaKym5Md2EkA717A-C_zwrBVipKLhiHIFEQd',
  },
  {
    name: 'Caixa de Engrenagem + Eixo',
    desc: 'Conjunto de transmissão integrada com vedação contra partículas e poeira para ambientes industriais.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiXmWZy17fblGuXcUZYDjaoiB_G4jh0QgIRMYvC3XbyjnHL5zn-7CUpTPIfiPB2B9M51BRMjVZq1CpG8DtJ-VAWoir5L6ek3Ozr64JxcK8_w4-8uemxPuNcrjnQiGfLv9dY2-B-4BSp5erqZkJdBT41B6Q9Djw3LbmcyyYQ1qb_G7vgGXW_6nbbTPVN52K631XbjBg6q0yiCPltR7MB8dylaZRE8ZwMzd9pffjhMrp_ejkltMsKvX4rFWloat5t2lTSevYmEB1Qj9s',
  },
  {
    name: 'Suporte em U',
    desc: 'Base de ancoragem universal para sistemas de ventilação, fabricada em aço de alta liga laminado.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJSuU-nkaRRxXphPuTVSPPtz6t0SnHlSm2rZYYx4ec5_gYtoUEblGHzlIvCUAEj6AdtMAZBo3_eJ1jCqdn7VU2GE0nKVCcwU-UjmFjezQ0J9D98R3dtBr3w1tb87xdSr3U2LQTEcDB_MEzaBWl0aPd5vyqOnkUgzs03D10mwX6ulSpGHKM71k5Vp8aLdMnApHDw7T1VJSiKNUrqk4WldB9YbDmZdCp7tNijVloPJeHyU1VA1lle2D4ySvXVXKchtK4I7qcHrnu4TcU',
  },
  {
    name: 'Painel Elétrico',
    desc: 'Módulo de comando centralizado com proteção IP65 e componentes elétricos de alta confiabilidade.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD37X_xKaWp_39xIXzGQs-52kIfQfwOjveUZ9pkZRrmARygpVAWDSxcboUNN6PMqVILgrJG1U54aF5yysAfiG1X9UyPch_X1MWjQVjCCugwp2PZKzIuadyP2U4ZmQHDoUCGhkbm-iSdEc4GIcgCCbf-5XuLfMOFD6y3hb7Z-fLQdMP9n4i1jRYJaxZ0jVGCiK1Y-kmXJbV0QNMwNkgcdyCDpINq4nwbW2NDfg2RwhrIABUstlgKGdXCI2cXCcysC7WqRu7wchpscn7u',
  },
  {
    name: 'Controlador Eletrônico',
    desc: 'Interface digital para ajuste de velocidade e monitoramento de operação do sistema em tempo real.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgcqvWNk75PvkM_iCvLCyP-yXVPDhquc_EWE8KccScbtqECAsS4xZaW_Myk1i5jNze3iooJ7h2N_zFuIPc4GUNxNgUxqXqrvgYevzRNCkIjf4AodmCNllZgSH6qMerbd9jwOLBoTG4nLMpzAJSnrZ9k-6sUvpQlA8nhVPRhvOkgTbdhyNcCVD1U3ghzminIKAXBl-hnj7BvbHfQzEG5wqWj4OaYe0dhF4RrzVTUU6Ys2h7nAal4EYfzSiE42SPE3r1wz2jAdfFC8Zg',
  },
  {
    name: 'Kit Correia + Polias GT2',
    desc: 'Par de polias em alumínio e correia de borracha reforçada com fibra de vidro para transmissão precisa.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD59PqCY2XeeiHk8-mdgTTILw1lPmfmE5-GKi0w-CPzb7nKeqEGuo7GUTRTi8Z6jS75JZ3vISPxOAUvVIihH-MQLLCulPIDnX6tLqKlRNMOBxp8fXSyQX-df7YHMgwIjePECabebnMaRmWlHEsd2yQDseIVKYnq1jNqMhb2Qyga4f0hFkjc86g6Vy5HoydfzqCs9PRfZzUb_kP3VLGF8VblRbU02wDXYQRPYxljfwHQIr2RbeAfTeNX2-A9hWsW6BrYa0dc_ALcFJvb',
  },
  {
    name: 'Tampa / Capa Ventiloar',
    desc: 'Proteção aerodinâmica em polímero de alta densidade com acabamento resistente a intempéries.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdeEBGHsZsCUefWOomKB1hAf70mZFuJ_kjZ1hHfXRR0oWEp8NVbx2FnFz44e5_V_zb8lg9gIqszxJsqwRyKlLID_54RIfpz3JiRayC5PAJla3i_G4rliKq1ksA54nF6NDWcZVJBQtCslviVmIBCF09NfX_L5swXrFN9SaGVoNgb42OM5xLjTkfaeKKAjlKTuEtNH9IqvnfAwx7H571OttKCGg0XyCd28nhUgh_3PxRnqu3J9TcuUAkIKTPbioRoVqfQRu0Rb3JTFqy',
  },
]

export default function Loja() {
  return (
    <main className="min-h-screen bg-surface-container-lowest industrial-pattern">
      {/* Header */}
      <header className="pt-20 md:pt-24 pb-12 md:pb-16 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="relative inline-block mb-4">
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-sm text-xs font-headline flex items-center gap-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_theme(colors.primary-container)]" />
            LOJA EM CONSTRUÇÃO
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold uppercase tracking-tight text-on-surface">
          Componentes de <br /><span className="text-primary">Precisão</span>
        </h1>
        <div className="flow-line" />
        <p className="mt-8 max-w-2xl text-on-surface-variant text-lg font-light leading-relaxed">
          Explore nosso catálogo de acessórios originais Ventiloar. Em breve com compra direta. Por enquanto, consulte a disponibilidade via WhatsApp.
        </p>
      </header>

      {/* Grid de Produtos */}
      <section className="px-6 md:px-8 pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="bg-surface-container-low p-1 rounded-sm group hover:bg-surface-container-high transition-all duration-300"
            >
              <div className="aspect-square bg-surface-container-lowest overflow-hidden">
                <img
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 scale-105 group-hover:scale-100"
                  alt={product.name}
                  src={product.img}
                />
              </div>
              <div className="p-6">
                <h3 className="font-headline font-bold uppercase text-lg mb-2 text-on-surface">
                  {product.name}
                </h3>
                <p className="text-sm text-on-surface-variant font-light mb-6 line-clamp-3">
                  {product.desc}
                </p>
                <a
                  href={whatsappLink(`Olá! Gostaria de consultar a disponibilidade do item: ${product.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 border border-outline-variant/30 text-primary uppercase font-headline font-bold text-xs tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-colors"
                >
                  Consultar disponibilidade
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Under construction banner */}
      <section className="bg-surface-container-high py-20 md:py-24 border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <span className="material-symbols-outlined text-tertiary text-6xl mb-6">engineering</span>
          <h2 className="text-2xl md:text-3xl font-headline font-bold uppercase tracking-widest mb-4">
            E-commerce em Desenvolvimento
          </h2>
          <p className="text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Estamos preparando nossa plataforma de vendas direta. Em breve você poderá realizar pedidos e acompanhar envios por aqui.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="bg-surface-container-lowest p-6 rounded-sm border border-outline-variant/20 flex-1 max-w-sm mx-auto md:mx-0">
              <h4 className="font-headline font-bold uppercase text-xs text-primary mb-2">Próxima Fase</h4>
              <p className="text-sm">Catálogo com preços e pagamento via PIX.</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-sm border border-outline-variant/20 flex-1 max-w-sm mx-auto md:mx-0">
              <h4 className="font-headline font-bold uppercase text-xs text-primary mb-2">Por Agora</h4>
              <p className="text-sm">Consulte disponibilidade pelo WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
