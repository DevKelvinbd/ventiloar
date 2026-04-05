// Tarifas estimadas por estado (R$/kWh)
export const TARIFAS_POR_ESTADO = {
  'Acre': 0.95, 'Alagoas': 0.83, 'Amapá': 0.93, 'Amazonas': 0.80,
  'Bahia': 0.90, 'Ceará': 0.77, 'Distrito Federal': 0.70,
  'Espírito Santo': 0.85, 'Goiás': 0.82, 'Maranhão': 0.89,
  'Mato Grosso': 0.78, 'Mato Grosso do Sul': 0.80, 'Minas Gerais': 0.87,
  'Pará': 0.88, 'Paraíba': 0.86, 'Paraná': 0.79, 'Pernambuco': 0.84,
  'Piauí': 0.81, 'Rio de Janeiro': 0.91, 'Rio Grande do Norte': 0.92,
  'Rio Grande do Sul': 0.86, 'Rondônia': 0.83, 'Roraima': 0.82,
  'Santa Catarina': 0.87, 'São Paulo': 0.90, 'Sergipe': 0.78,
  'Tocantins': 0.80,
}

const MOTORES = [
  { modelo: '90YT120', potencia: 120 },
  { modelo: '100YT200', potencia: 200 },
  { modelo: '100YT250', potencia: 250 },
]

const ESPACO_POR_HELICE = { 50: 15, 60: 20, 70: 25, 100: 50, 120: 60 }
const POTENCIA_TRADICIONAL = { 50: 150, 60: 180, 70: 200, 100: 400, 120: 540 }
const PRECOS_MOTORES = { 120: 1400, 200: 1600, 250: 2000 }
const PRECOS_HELICES = { 50: 500, 60: 600, 70: 700, 100: 1200, 120: 1500 }

export const HELICE_OPTIONS = [50, 60, 70, 100, 120]

function getMotor(tamanhoHelice) {
  if (tamanhoHelice <= 70) return MOTORES[0]
  return MOTORES[2]
}

export function sugerirHelice(tamanhoEspaco) {
  if (tamanhoEspaco <= 60) return 50
  if (tamanhoEspaco <= 200) return 60
  if (tamanhoEspaco <= 300) return 70
  if (tamanhoEspaco <= 1000) return 100
  return 120
}

export function calcularSimulacao(tamanhoEspaco, tamanhoHelice, horasUso, valorKw) {
  const motor = getMotor(tamanhoHelice)
  const espacoPorHelice = ESPACO_POR_HELICE[tamanhoHelice] || 20
  const potenciaTradicional = POTENCIA_TRADICIONAL[tamanhoHelice] || 180

  const quantidadeHelices = Math.ceil(tamanhoEspaco / espacoPorHelice)

  // 100cm e 120cm: 5 hélices por motor / demais: 10 hélices por motor
  const quantidadeMotoresSerie = (tamanhoHelice === 100 || tamanhoHelice === 120)
    ? Math.ceil(quantidadeHelices / 5)
    : Math.ceil(quantidadeHelices / 10)

  const consumoMensalSerie = (quantidadeMotoresSerie * motor.potencia * horasUso * 30) / 1000
  const consumoMensalTradicional = (quantidadeHelices * potenciaTradicional * horasUso * 30) / 1000

  const custoMensalSerie = consumoMensalSerie * valorKw
  const custoMensalTradicional = consumoMensalTradicional * valorKw
  const economia = Math.max(0, custoMensalTradicional - custoMensalSerie)

  return {
    tamanhoEspaco,
    tamanhoHelice,
    quantidadeHelices,
    quantidadeMotoresSerie,
    quantidadeMotoresTradicionais: quantidadeHelices,
    motor,
    consumoMensalSerie,
    consumoMensalTradicional,
    custoMensalSerie,
    custoMensalTradicional,
    economia,
    horasUso,
    valorKw,
  }
}

export function calcularOrcamento(simulacao) {
  const valorHelice = PRECOS_HELICES[simulacao.tamanhoHelice] || 0
  const valorMotor = PRECOS_MOTORES[simulacao.motor.potencia] || 0

  const totalHelices = simulacao.quantidadeHelices * valorHelice
  const totalMotores = simulacao.quantidadeMotoresSerie * valorMotor
  const totalInvestimento = totalHelices + totalMotores

  const mesesParaRetorno = simulacao.economia > 0
    ? Math.ceil(totalInvestimento / simulacao.economia)
    : null

  return {
    totalHelices,
    totalMotores,
    totalInvestimento,
    mesesParaRetorno,
  }
}
