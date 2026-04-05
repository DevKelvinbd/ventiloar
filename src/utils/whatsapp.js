export const WHATSAPP_NUMBER = '5588981581328'

export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export function whatsappLink(message = '') {
  const encoded = encodeURIComponent(message)
  return message ? `${WHATSAPP_BASE_URL}?text=${encoded}` : WHATSAPP_BASE_URL
}

export function whatsappShareLink(message = '') {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/?text=${encoded}`
}
