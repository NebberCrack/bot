import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 100 
global.db.data.users[m.sender].exp += 100
  
let vn = './media/hola.mp3'
conn.sendFile(m.chat, vn, 'hola.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(Romina)$/i
handler.fail = null
export default handler
