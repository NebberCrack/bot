import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/pensamientos-sexuales.mp3'
conn.sendFile(m.chat, vn, 'pensamientos-sexuales.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Estas hot|Esta hot|Andan cogiendo|andan cogiendo|Estan cogiendo|estan cogiendo|Sueña conmigo|Están cogiendo|están cogiendo|Que ganas de coger|quiero coger/
handler.command = new RegExp
export default handler