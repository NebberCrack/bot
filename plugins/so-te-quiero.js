import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 100 
global.db.data.users[m.sender].exp += 100
  
let vn = './media/te-quiero.mp3'
conn.sendFile(m.chat, vn, 'te-quiero.mp3', null, m, true, {
type: 'audioMessage',
ptt: true 
})
}
handler.customPrefix = /Te quiero|te quiero|tqm|Tqm/i
handler.command = new RegExp
handler.fail = null
export default handler


