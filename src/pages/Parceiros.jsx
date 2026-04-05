import { whatsappLink } from '../utils/whatsapp'

const PARTNERS = [
  {
    name: 'RUDSON',
    city: 'Madalena',
    specialty: 'Climatização Industrial',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAG5lbkK4wWkHp2WqPPK04YGVkrzgWb793Cw3yCO8TNzmwILwriSDiJ4EsKZWW__tmyiZnDeiBexVAfzKGUV9RelhxvugR0wpIhZRh6imFc1aYIWbKgjZv8I3fWxESbAJKNOzOZK5vWQ5zmsJpKARIghwJRqg4VyAjpcYf6baCG00sSjQ5BiMau8WKr7E0kdyTqtdm6dpgh3vPYgqt0tchhRSCJo2txK6u_xfsLjHItYBOWewzr1wiqTRJ65p97-6grHVEZJ45JVuk',
    badge: 'ATIVO',
  },
  {
    name: 'SMART TEC',
    city: 'Canindé',
    specialty: 'Automação e Ventilação Inteligente',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA79e-ilxQCygyyYth3Q-1KMbhYOYuBzEkv2DTrcELLsuzxhp0gtAOxug8cIgmxeMl4dapx3561V_9Dk923tPLnTVxXPLdSBlj8XV36VClgFpY7OeuTFjluiR9d1dRTLwcGiw-KnVZW2knLTgCK-18x4X7X7zX1-IW2VVKefTAOlZp6Epznaci4dKuRwTGGXDOUZZulICl_7wLxTDybCCOLHxpweRmxvynL6wWcGKYj_8yq8PFTULWbXWsXzuijEDsnFurbQYlBG-no',
    badge: 'CERTIFICADO',
  },
  {
    name: 'JOÃO APIGUANA',
    city: 'Fortaleza',
    specialty: 'Projetos de Grande Porte',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxNhGryd3M7IaJVeVEQMrhajbkWzaClx6-IYgtYRZtyvfEVoHsUlQJMAQ6CbdtZAYNLcnLRs6r7U4OcTiU7vL8JiOg_ddwxpHajThqZPlVWOZpFbJMUfY0rGEed35l1S6Yjep807ouO1hhggRzaYE4LOzWwIEa95d--UzjEz0YM0ErJlst-SAN8928602E7b_AA2u3XHezVJUtOZ1-1NdwjshBAfl1Wbsb9QEP3Op0QRtWc26NOtM_hRI7cpb4X9TxuthDN8QrX4_i',
    badge: 'MASTER',
  },
  {
    name: 'ANDERSOM',
    city: 'Eusébio',
    specialty: 'Instalação e Manutenção',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkviXaRH-FO_WupqfXjFZisO8jdOTJ1sW7Ak3CAe8eC6z2a5pD2q0zM7KESPBVAtGe6RgZnAOqqXTrAM76w4-B204HibUCdsvPz9hwwfRspVlk26VGcqGmEGjoVFmYbQHoBWhGx7pwhRP89m1xQ56fHfJx8jluLvWBA-w2ifE3B_u0rQ7siGbA_xX-IczsOwS6E-fzh51f1xWEOQNwPbTkOipW2tdny1ZZkd9CxqKAFu5CsJ3f1-hMR3gUzf8SSgqStJyF9sA31ifu',
    badge: 'REGIONAL',
  },
]

export default function Parceiros() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-20 md:pt-24 pb-12 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[2px] bg-primary-container" />
            <span className="font-headline font-bold text-primary tracking-widest uppercase text-xs">
              Rede de Parceiros
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-headline font-bold uppercase tracking-tighter leading-none mt-4 max-w-4xl">
            Parceiros Estratégicos
          </h1>
          <div className="w-32 h-1 bg-primary-container mt-2" />
          <p className="mt-8 text-on-surface-variant max-w-2xl text-lg leading-relaxed font-light">
            Eletricistas credenciados que garantem a qualidade da instalação do Sistema Ventiloar em todo o Ceará.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="px-6 md:px-12 py-12 md:py-16 bg-surface-container-low flow-monitor-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARTNERS.map((partner, i) => (
              <div
                key={partner.name}
                className={`bg-surface-container-high group hover:bg-surface-container-highest transition-all duration-300 relative overflow-hidden ${
                  i === 1 ? 'lg:mt-12' : i === 3 ? 'lg:-mt-12' : ''
                }`}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-container/20 group-hover:bg-primary-container transition-colors" />
                <div className="p-6 md:p-8">
                  <div className="aspect-square w-full mb-6 md:mb-8 overflow-hidden bg-surface-container-lowest relative">
                    <img
                      className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                      alt={partner.name}
                      src={partner.img}
                    />
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-secondary-container text-on-secondary-container px-3 py-1 flex items-center gap-2 text-[10px] font-headline uppercase font-bold">
                        <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_theme(colors.primary)]" />
                        {partner.badge}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-headline font-bold text-primary-container tracking-[0.2em] uppercase">
                      {partner.specialty}
                    </span>
                    <h3 className="text-2xl font-headline font-bold uppercase tracking-tight text-on-surface">
                      {partner.name}
                    </h3>
                    <p className="text-sm font-headline text-primary mt-2">{partner.city}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Future partner slot */}
            <div className="border-2 border-dashed border-outline-variant/30 flex items-center justify-center p-8 group hover:border-primary-container transition-all duration-300 bg-surface-container-low/30 min-h-[400px]">
              <div className="text-center flex flex-col items-center">
                <span className="material-symbols-outlined text-4xl text-outline mb-4 group-hover:text-primary transition-colors">
                  add_circle
                </span>
                <p className="font-headline font-bold text-sm text-on-surface-variant uppercase tracking-widest group-hover:text-on-surface">
                  Vaga para Novo Parceiro
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 px-6 md:px-8 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full flow-monitor-pattern" />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold uppercase leading-tight tracking-tighter">
              Quer ser um parceiro <span className="text-primary-container">Ventiloar?</span>
            </h2>
            <div className="w-24 h-1 bg-primary-container mt-6" />
            <p className="mt-8 text-on-surface-variant text-lg">
              Junte-se à rede Ventiloar. Oferecemos suporte técnico, ferramentas de dimensionamento e acesso antecipado a novas tecnologias.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <a
              href={whatsappLink('Olá! Tenho interesse em me tornar parceiro da Ventiloar.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 md:gap-6 bg-tertiary-container text-on-tertiary px-8 md:px-10 py-5 rounded-sm font-headline font-bold uppercase tracking-widest hover:scale-105 transition-all duration-200 text-sm"
            >
              Fale Conosco no WhatsApp
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform">
                arrow_right_alt
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
