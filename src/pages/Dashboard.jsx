import { useState } from 'react'

// ==========================================
// DADOS DA PLANILHA Analise_Projetacao.xlsx
// ==========================================
const PERIODO = '07/07/2025 a 04/04/2026'
const EMPRESA = 'Projetação Empreendimentos Ltda'
const CNPJ = '047.950.352/0001-71'
const CONTA = 'Bradesco Ag 687 CC 0037844-5'

const ENTRADAS = [
  { origem: 'FUNCAP (TED)', data: '26/09/2025', valor: 169005.93, obs: '1ª TED — convênio/projeto' },
  { origem: 'FUNCAP (TED)', data: '26/09/2025', valor: 84502.97, obs: '2ª TED — convênio/projeto' },
  { origem: 'Francisco V Alves (PIX)', data: '08/08/2025', valor: 13.40, obs: 'Reposição de tarifa bancária' },
  { origem: 'Francisco V Alves (PIX)', data: '19/08/2025', valor: 7550.00, obs: 'Entrada de recurso externo' },
]
const TOTAL_ENTRADAS = 261072.30

const RENDIMENTOS = [
  { tipo: 'Rendimento do CDB', valor: 6128.65, obs: 'Juros sobre o dinheiro aplicado em CDB' },
  { tipo: 'Rendimento Invest Fácil (CC)', valor: 12.44, obs: 'Juros creditados na CC diariamente' },
]
const TOTAL_RENDIMENTOS = 6141.09

const SAIDAS = [
  { tipo: 'Fornecedores e Prestadores', valor: 228571.97, pct: 96.4, obs: 'Pagamentos via PIX a fornecedores' },
  { tipo: 'Boletos / Cobranças', valor: 693.02, pct: 0.3, obs: 'Passagens, fretes, etc.' },
  { tipo: 'Impostos — Receita Federal', valor: 4199.75, pct: 1.8, obs: 'DARF / tributos federais' },
  { tipo: 'Impostos — SEFAZ', valor: 2088.20, pct: 0.9, obs: 'Secretaria da Fazenda estadual' },
  { tipo: 'Tarifas Bancárias', valor: 1550.51, pct: 0.7, obs: 'Custo de manutenção da conta' },
  { tipo: 'Encargos / IOF', valor: 0.12, pct: 0.0, obs: 'Juros e IOF sobre limite' },
]
const TOTAL_SAIDAS = 237103.57

const ANULACOES = [
  { desc: 'PIX para Andre Luiz De Araujo', data: '09/02/2026', valor: -13000.00, motivo: 'Enviado e devolvido' },
  { desc: 'Devolução PIX de Andre Luiz De Araujo', data: '09/02/2026', valor: 13000.00, motivo: 'Devolvido — anula o envio' },
]

const CONCILIACAO = [
  { item: 'Entradas externas (FUNCAP + Francisco)', valor: 261072.30, tipo: 'entrada' },
  { item: 'Rendimento Invest Fácil (CC)', valor: 12.44, tipo: 'entrada' },
  { item: 'Rendimento do CDB (juros acumulados)', valor: 6128.65, tipo: 'entrada' },
  { item: 'Pagamentos a fornecedores/prestadores', valor: -228571.97, tipo: 'saida' },
  { item: 'Boletos e cobranças', valor: -693.02, tipo: 'saida' },
  { item: 'Impostos e tributos', valor: -6287.95, tipo: 'saida' },
  { item: 'Tarifas bancárias', valor: -1550.51, tipo: 'saida' },
  { item: 'Encargos / IOF', valor: -0.12, tipo: 'saida' },
]

const SALDO_CALCULADO = 23981.17
const SALDO_REAL = 30109.82

// ==========================================
// HELPERS
// ==========================================
const fmtBRL = (v) => Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
const fmtPct = (v) => `${Number(v).toFixed(1)}%`

function BarSegment({ label, value, pct, color, maxPct }) {
  const width = maxPct > 0 ? (pct / maxPct) * 100 : 0
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-baseline">
        <span className="text-xs font-headline uppercase tracking-widest text-on-surface-variant truncate mr-4">{label}</span>
        <span className="text-xs font-mono text-on-surface whitespace-nowrap">{fmtBRL(value)}</span>
      </div>
      <div className="w-full h-2 bg-surface-container-lowest overflow-hidden">
        <div
          className={`h-full transition-all duration-700 ${color}`}
          style={{ width: `${Math.max(width, 0.5)}%` }}
        />
      </div>
      <div className="text-right">
        <span className="text-[10px] font-mono text-on-surface-variant">{fmtPct(pct)}</span>
      </div>
    </div>
  )
}

// ==========================================
// TABS
// ==========================================
const TABS = [
  { id: 'visao-geral', label: 'Visão Geral', icon: 'dashboard' },
  { id: 'entradas', label: 'Entradas', icon: 'arrow_downward' },
  { id: 'saidas', label: 'Saídas', icon: 'arrow_upward' },
  { id: 'conciliacao', label: 'Conciliação', icon: 'balance' },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('visao-geral')

  const totalRecursos = TOTAL_ENTRADAS + TOTAL_RENDIMENTOS
  const pctExecutado = ((TOTAL_SAIDAS / totalRecursos) * 100).toFixed(1)
  const pctDisponivel = ((SALDO_REAL / totalRecursos) * 100).toFixed(1)

  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 relative z-10">
        {/* Header */}
        <header className="mb-12 md:mb-16">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="text-primary-container font-headline font-bold text-sm tracking-[0.2em] uppercase">
              Prestação de Contas
            </span>
            <div className="h-[1px] flex-grow bg-outline-variant opacity-20" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold uppercase tracking-tighter leading-none mb-4">
            Dashboard<br />Financeiro
          </h1>
          <div className="w-24 h-1 bg-primary-container mt-4 mb-6" />

          {/* Meta info */}
          <div className="flex flex-wrap gap-6 text-sm text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-base">business</span>
              <span>{EMPRESA}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-base">badge</span>
              <span>CNPJ: {CNPJ}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-base">calendar_month</span>
              <span>{PERIODO}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container text-base">account_balance</span>
              <span>{CONTA}</span>
            </div>
          </div>
        </header>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-surface-container-high p-6 border-t-2 border-primary-container">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary-container text-xl">arrow_downward</span>
              <span className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Total Entradas</span>
            </div>
            <div className="text-2xl md:text-3xl font-mono font-bold text-primary">{fmtBRL(TOTAL_ENTRADAS)}</div>
            <div className="text-xs text-on-surface-variant mt-2">FUNCAP + Recursos Externos</div>
          </div>

          <div className="bg-surface-container-high p-6 border-t-2 border-tertiary-container">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-tertiary-container text-xl">savings</span>
              <span className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Rendimentos</span>
            </div>
            <div className="text-2xl md:text-3xl font-mono font-bold text-tertiary-container">{fmtBRL(TOTAL_RENDIMENTOS)}</div>
            <div className="text-xs text-on-surface-variant mt-2">CDB + Invest Fácil</div>
          </div>

          <div className="bg-surface-container-high p-6 border-t-2 border-error">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-error text-xl">arrow_upward</span>
              <span className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Total Saídas</span>
            </div>
            <div className="text-2xl md:text-3xl font-mono font-bold text-error">{fmtBRL(TOTAL_SAIDAS)}</div>
            <div className="text-xs text-on-surface-variant mt-2">{pctExecutado}% dos recursos executados</div>
          </div>

          <div className="bg-surface-container-high p-6 border-t-2 border-primary">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-xl">account_balance_wallet</span>
              <span className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Saldo Disponível</span>
            </div>
            <div className="text-2xl md:text-3xl font-mono font-bold text-on-surface">{fmtBRL(SALDO_REAL)}</div>
            <div className="text-xs text-on-surface-variant mt-2">{pctDisponivel}% disponível (CC + CDB)</div>
          </div>
        </div>

        {/* Execution Progress Bar */}
        <div className="bg-surface-container-low p-6 md:p-8 mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-headline font-bold uppercase text-sm tracking-widest">Execução dos Recursos</h3>
            <span className="text-xs font-mono text-on-surface-variant">{fmtBRL(TOTAL_SAIDAS)} de {fmtBRL(totalRecursos)}</span>
          </div>
          <div className="w-full h-4 bg-surface-container-lowest overflow-hidden flex">
            <div
              className="h-full bg-primary-container transition-all duration-1000"
              style={{ width: `${pctExecutado}%` }}
              title={`Executado: ${pctExecutado}%`}
            />
            <div
              className="h-full bg-tertiary-container/40 transition-all duration-1000"
              style={{ width: `${(TOTAL_RENDIMENTOS / totalRecursos * 100).toFixed(1)}%` }}
              title="Rendimentos"
            />
          </div>
          <div className="flex justify-between mt-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-container" />
              <span className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Executado ({pctExecutado}%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-tertiary-container/40" />
              <span className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Rendimentos ({(TOTAL_RENDIMENTOS / totalRecursos * 100).toFixed(1)}%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-surface-container-lowest border border-outline-variant/30" />
              <span className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Disponível ({pctDisponivel}%)</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 overflow-x-auto pb-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 font-headline font-bold uppercase text-xs tracking-widest transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-primary-container text-on-primary-container'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              <span className="material-symbols-outlined text-sm">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* ======== VISÃO GERAL ======== */}
          {activeTab === 'visao-geral' && (
            <>
              {/* Fluxo Visual: Entradas → Saídas */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Composição das Entradas */}
                <div className="bg-surface-container-low p-6 md:p-8">
                  <h3 className="font-headline font-bold uppercase text-xs tracking-[0.3em] text-primary-container mb-6">
                    Composição das Entradas
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-surface-container-lowest border-l-4 border-primary-container">
                      <div>
                        <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant mb-1">FUNCAP (TEDs)</div>
                        <div className="text-xl font-mono font-bold text-primary">{fmtBRL(253508.90)}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-mono font-bold text-on-surface">97.1%</div>
                        <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">das entradas</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-surface-container-lowest border-l-4 border-tertiary-container">
                      <div>
                        <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant mb-1">Francisco V Alves</div>
                        <div className="text-xl font-mono font-bold text-tertiary-container">{fmtBRL(7563.40)}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-mono font-bold text-on-surface">2.9%</div>
                        <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">das entradas</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-surface-container-lowest border-l-4 border-primary/40">
                      <div>
                        <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant mb-1">Rendimentos (CDB + CC)</div>
                        <div className="text-xl font-mono font-bold text-primary/70">{fmtBRL(TOTAL_RENDIMENTOS)}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-mono text-on-surface-variant">receita financeira</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Distribuição das Saídas */}
                <div className="bg-surface-container-low p-6 md:p-8">
                  <h3 className="font-headline font-bold uppercase text-xs tracking-[0.3em] text-error mb-6">
                    Distribuição das Saídas
                  </h3>
                  <div className="space-y-4">
                    {SAIDAS.map((s) => (
                      <BarSegment
                        key={s.tipo}
                        label={s.tipo}
                        value={s.valor}
                        pct={s.pct}
                        color={s.pct > 50 ? 'bg-error' : s.pct > 1 ? 'bg-tertiary-container' : 'bg-outline-variant'}
                        maxPct={96.4}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Resumo Final */}
              <div className="bg-surface-container-low p-6 md:p-8 border-l-4 border-primary">
                <h3 className="font-headline font-bold uppercase text-xs tracking-[0.3em] text-primary mb-6">
                  Resumo Final
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    { label: 'Entrou de fora', value: TOTAL_ENTRADAS, detail: 'FUNCAP + Francisco', color: 'text-primary' },
                    { label: 'Rendeu de juros', value: TOTAL_RENDIMENTOS, detail: 'CDB + Invest Fácil', color: 'text-tertiary-container' },
                    { label: 'Total gasto', value: TOTAL_SAIDAS, detail: 'Fornecedores + impostos + tarifas', color: 'text-error' },
                    { label: 'Anulações', value: 13000.00, detail: 'PIX ida e volta = efeito zero', color: 'text-on-surface-variant' },
                    { label: 'Saldo disponível', value: SALDO_REAL, detail: 'CC + CDB investido', color: 'text-on-surface' },
                  ].map((item) => (
                    <div key={item.label} className="bg-surface-container-lowest p-4">
                      <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant mb-2">{item.label}</div>
                      <div className={`text-lg font-mono font-bold ${item.color}`}>{fmtBRL(item.value)}</div>
                      <div className="text-[10px] text-on-surface-variant/60 mt-1">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ======== ENTRADAS ======== */}
          {activeTab === 'entradas' && (
            <>
              <div className="bg-surface-container-low p-6 md:p-8">
                <h3 className="font-headline font-bold uppercase text-xs tracking-[0.3em] text-primary-container mb-6">
                  Entradas de Recursos Externos
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-outline-variant/20">
                        <th className="text-left py-3 px-4 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Origem</th>
                        <th className="text-left py-3 px-4 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Data</th>
                        <th className="text-right py-3 px-4 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Valor</th>
                        <th className="text-left py-3 px-4 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant hidden md:table-cell">Observação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ENTRADAS.map((e, i) => (
                        <tr key={i} className="border-b border-outline-variant/10 hover:bg-surface-container-high/50 transition-colors">
                          <td className="py-3 px-4 font-headline font-bold text-on-surface">{e.origem}</td>
                          <td className="py-3 px-4 font-mono text-on-surface-variant">{e.data}</td>
                          <td className="py-3 px-4 text-right font-mono font-bold text-primary">{fmtBRL(e.valor)}</td>
                          <td className="py-3 px-4 text-on-surface-variant hidden md:table-cell">{e.obs}</td>
                        </tr>
                      ))}
                      <tr className="bg-primary-container/10">
                        <td className="py-3 px-4 font-headline font-bold uppercase text-xs tracking-widest" colSpan="2">Total Entradas Externas</td>
                        <td className="py-3 px-4 text-right font-mono font-bold text-primary text-lg">{fmtBRL(TOTAL_ENTRADAS)}</td>
                        <td className="hidden md:table-cell" />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-surface-container-low p-6 md:p-8">
                <h3 className="font-headline font-bold uppercase text-xs tracking-[0.3em] text-tertiary-container mb-6">
                  Rendimentos da Conta
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-outline-variant/20">
                        <th className="text-left py-3 px-4 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Tipo</th>
                        <th className="text-right py-3 px-4 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Valor</th>
                        <th className="text-left py-3 px-4 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant hidden md:table-cell">Observação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RENDIMENTOS.map((r, i) => (
                        <tr key={i} className="border-b border-outline-variant/10 hover:bg-surface-container-high/50 transition-colors">
                          <td className="py-3 px-4 font-headline font-bold text-on-surface">{r.tipo}</td>
                          <td className="py-3 px-4 text-right font-mono font-bold text-tertiary-container">{fmtBRL(r.valor)}</td>
                          <td className="py-3 px-4 text-on-surface-variant hidden md:table-cell">{r.obs}</td>
                        </tr>
                      ))}
                      <tr className="bg-tertiary-container/10">
                        <td className="py-3 px-4 font-headline font-bold uppercase text-xs tracking-widest">Total Rendimentos</td>
                        <td className="py-3 px-4 text-right font-mono font-bold text-tertiary-container text-lg">{fmtBRL(TOTAL_RENDIMENTOS)}</td>
                        <td className="hidden md:table-cell" />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* ======== SAÍDAS ======== */}
          {activeTab === 'saidas' && (
            <>
              <div className="bg-surface-container-low p-6 md:p-8">
                <h3 className="font-headline font-bold uppercase text-xs tracking-[0.3em] text-error mb-6">
                  Saídas de Recursos (Gastos Reais)
                </h3>

                {/* Visual Donut-like breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    {SAIDAS.map((s) => (
                      <BarSegment
                        key={s.tipo}
                        label={s.tipo}
                        value={s.valor}
                        pct={s.pct}
                        color={s.pct > 50 ? 'bg-error' : s.pct > 1 ? 'bg-tertiary-container' : 'bg-outline-variant'}
                        maxPct={96.4}
                      />
                    ))}
                  </div>

                  <div className="flex flex-col justify-center space-y-4">
                    {SAIDAS.map((s) => (
                      <div key={s.tipo} className="flex items-center justify-between p-3 bg-surface-container-lowest">
                        <span className="text-xs text-on-surface-variant">{s.obs}</span>
                        <span className="text-xs font-mono font-bold text-on-surface ml-4 whitespace-nowrap">{fmtPct(s.pct)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-outline-variant/20">
                        <th className="text-left py-3 px-4 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Tipo de Gasto</th>
                        <th className="text-right py-3 px-4 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Valor</th>
                        <th className="text-right py-3 px-4 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">%</th>
                        <th className="text-left py-3 px-4 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant hidden md:table-cell">Detalhes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SAIDAS.map((s, i) => (
                        <tr key={i} className="border-b border-outline-variant/10 hover:bg-surface-container-high/50 transition-colors">
                          <td className="py-3 px-4 font-headline font-bold text-on-surface">{s.tipo}</td>
                          <td className="py-3 px-4 text-right font-mono font-bold text-error">{fmtBRL(s.valor)}</td>
                          <td className="py-3 px-4 text-right font-mono text-on-surface-variant">{fmtPct(s.pct)}</td>
                          <td className="py-3 px-4 text-on-surface-variant hidden md:table-cell">{s.obs}</td>
                        </tr>
                      ))}
                      <tr className="bg-error/10">
                        <td className="py-3 px-4 font-headline font-bold uppercase text-xs tracking-widest">Total Saídas</td>
                        <td className="py-3 px-4 text-right font-mono font-bold text-error text-lg">{fmtBRL(TOTAL_SAIDAS)}</td>
                        <td className="py-3 px-4 text-right font-mono font-bold">100%</td>
                        <td className="hidden md:table-cell" />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Anulações */}
              <div className="bg-surface-container-low p-6 md:p-8 border-l-4 border-outline-variant/30">
                <h3 className="font-headline font-bold uppercase text-xs tracking-[0.3em] text-on-surface-variant mb-4">
                  Transações Anuladas (efeito zero)
                </h3>
                <p className="text-sm text-on-surface-variant/60 mb-6 italic">
                  Estas transações se anulam mutuamente e não entram no cálculo financeiro.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-outline-variant/20">
                        <th className="text-left py-3 px-4 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Descrição</th>
                        <th className="text-left py-3 px-4 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Data</th>
                        <th className="text-right py-3 px-4 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Valor</th>
                        <th className="text-left py-3 px-4 text-[10px] font-headline uppercase tracking-widest text-on-surface-variant hidden md:table-cell">Motivo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ANULACOES.map((a, i) => (
                        <tr key={i} className="border-b border-outline-variant/10 opacity-60">
                          <td className="py-3 px-4 text-on-surface">{a.desc}</td>
                          <td className="py-3 px-4 font-mono text-on-surface-variant">{a.data}</td>
                          <td className={`py-3 px-4 text-right font-mono font-bold ${a.valor < 0 ? 'text-error' : 'text-primary'}`}>{fmtBRL(a.valor)}</td>
                          <td className="py-3 px-4 text-on-surface-variant hidden md:table-cell">{a.motivo}</td>
                        </tr>
                      ))}
                      <tr className="bg-surface-container-highest/50">
                        <td className="py-3 px-4 font-headline font-bold uppercase text-xs tracking-widest" colSpan="2">Saldo Líquido</td>
                        <td className="py-3 px-4 text-right font-mono font-bold text-on-surface">R$ 0,00</td>
                        <td className="py-3 px-4 text-on-surface-variant text-xs hidden md:table-cell">Efeito zero — não conta</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* ======== CONCILIAÇÃO ======== */}
          {activeTab === 'conciliacao' && (
            <div className="bg-surface-container-low p-6 md:p-8">
              <h3 className="font-headline font-bold uppercase text-xs tracking-[0.3em] text-primary-container mb-6">
                Conciliação — De Onde Veio → Pra Onde Foi
              </h3>

              <div className="space-y-3 mb-8">
                {CONCILIACAO.map((c, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-4 ${
                      c.tipo === 'entrada'
                        ? 'bg-primary-container/5 border-l-4 border-primary-container'
                        : 'bg-error/5 border-l-4 border-error'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined text-lg ${
                        c.tipo === 'entrada' ? 'text-primary-container' : 'text-error'
                      }`}>
                        {c.tipo === 'entrada' ? 'add_circle' : 'remove_circle'}
                      </span>
                      <span className="text-sm text-on-surface">{c.item}</span>
                    </div>
                    <span className={`font-mono font-bold whitespace-nowrap ml-4 ${
                      c.tipo === 'entrada' ? 'text-primary' : 'text-error'
                    }`}>
                      {c.valor > 0 ? '+' : ''}{fmtBRL(c.valor)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Saldos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-6 border-l-4 border-outline-variant/30">
                  <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant mb-2">Saldo Calculado</div>
                  <div className="text-2xl font-mono font-bold text-on-surface-variant">{fmtBRL(SALDO_CALCULADO)}</div>
                  <div className="text-[10px] text-on-surface-variant/60 mt-1">Entradas − Saídas (aritmético)</div>
                </div>
                <div className="bg-primary-container/10 p-6 border-l-4 border-primary-container">
                  <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant mb-2">Saldo Real na Conta</div>
                  <div className="text-2xl font-mono font-bold text-primary">{fmtBRL(SALDO_REAL)}</div>
                  <div className="text-[10px] text-on-surface-variant/60 mt-1">CC + CDB investido (verificado)</div>
                </div>
              </div>

              <div className="mt-6 p-4 border border-outline-variant/20">
                <p className="text-xs text-on-surface-variant italic">
                  <strong>Nota:</strong> A diferença entre saldo calculado (R$ 23.981,17) e saldo real (R$ 30.109,82) se deve a rendimentos acumulados do CDB resgatados que entram como saldo, mas não como "entrada externa". Resgates/aplicações de CDB são movimentação interna (não são entradas nem saídas reais).
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs font-headline font-medium text-on-secondary-container">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            Dados extraídos do extrato bancário — Bradesco Ag 687 CC 0037844-5
          </div>
          <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant/60">
            Última atualização: 04/04/2026
          </div>
        </div>
      </div>
    </main>
  )
}
