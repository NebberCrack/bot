let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let pp = './src/apoyo.jpg'
//await conn.sendButton(m.chat, wm, `https://paypal.me/OficialGD`, pp, m)
await conn.sendButton(m.chat, `${wm}`, `https://paypal.me/OficialGD`, pp, [['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ âïļ', `/menu`]], m) //[['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ âïļ', `/menu`]]
  
let str = `
ð ððĪðĄð!!  *si quiere apoya al bot. con cosa mucha gracias*

*agradecimiento al gatabot-MD*
esto es alguno dato si quiere  ðžðĨðĪðŪððĻ ðŋðĪðĢððĢððĪð gatabot-MD
*agracimiento al themystic-bot-MD . ðð§ðððððĻ!
âââââââââââââââââ
`.trim()
  
await conn.sendHydrated(m.chat, str, wm, media, 'https://paypal.me/OficialGD', 'ð ðŋðĪðĢðð§', null, null, [
['ðð§ðŠðĨðĪðĻ ðððððððĄððĻ ð°', '.grupos'],
['ðūð§ððððĪð§ ð', '#owner'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ âïļ', '/menu']
], m,)}



handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
