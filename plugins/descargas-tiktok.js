import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix, args}) => {
if (!text) throw `${mg}๐ฟ๐๐ฝ๐ ๐๐๐๐๐๐๐ผ๐ ๐๐ ๐๐๐๐ผ๐พ๐ ๐ฟ๐ ๐๐๐๐๐๐ ๐๐ผ๐๐ผ ๐ฟ๐๐๐พ๐ผ๐๐๐ผ๐ ๐๐ ๐๐๐ฟ๐๐\n๐๐๐๐๐๐๐\n*${usedPrefix + command} https://vm.tiktok.com/ZMLEPnruc/?k=1*`
//if (command == 'tiktokaudio') {
//conn.reply(m.chat, `${eg}PRONTO TENDRA EL VIDEO DE TIKTOK ๐ฐ*`, m, {
//contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
//title: 'The Lolibot-MF',
//body: 'Super Bot WhatsApp',         
//previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
//sourceUrl: `https://github.com/GataNina-Li/GataBot-MD`}}})
           
//let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
//let json = await res.json()
//conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'mp3/mp4' })}

conn.reply(m.chat, `${eg}*ESPERE UNOS SEGUNDOS EL QUE MANDO SUS ๐๐๐ฟ๐๐ ๐ฟ๐ ๐๐๐๐๐๐ ๐ฐ*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'แดฟแตแตโฑโฟแต ๐ฅ โป แดฎแตแต',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD`}}})
  
let res = await fetch("https://api.dhamzxploit.my.id/api/tiktod/?url="+args[0])
let json = await res.json()
await conn.sendFile(m.chat, json.result.nowatermark, 'error.mp4', `${wm}`, m)

let info = `๐ *Infรณrmate sobre las Novedades y recuerda tener la รบltima versiรณn.*
  `.trim()
  let vn = './media/descarga.mp3'
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [
['๐๐๐ฃ๐ช ๐ฟ๐๐จ๐๐๐ง๐๐๐จ ๐', '#descargasmenu'],
['๐๐๐ฃ๐ช ๐พ๐ค๐ข๐ฅ๐ก๐๐ฉ๐ค โจ', '.allmenu'],
['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ โ๏ธ', '/menu']
], m,)   
conn.sendFile(m.chat, vn, 'descarga.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
           
}
handler.help = ['tiktok'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = ['tiktok']
handler.limit = 2
handler.exp = 60
export default handler
