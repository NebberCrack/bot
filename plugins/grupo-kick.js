import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `${ag} ๐๐๐๐ผ ๐๐๐๐๐๐๐๐๐๐ฟ๐ ๐๐ ๐พ๐๐๐ผ๐๐ฟ๐\n#on restrict | #off restrict\n๐๐/๐๐ผ ๐๐๐๐๐๐๐๐ผ๐๐๐(๐ผ) ๐ฟ๐๐ฝ๐ ๐ผ๐พ๐๐๐๐ผ๐ ๐๐ ๐พ๐๐๐ผ๐๐ฟ๐`
let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedUser = []
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedUser.concat(res) 
await delay(1 * 1000)
if (command == 'kick') { 
conn.sendHydrated(m.chat, `๐ผ๐ ๐๐๐ฟ๐ ๐๐๐๐ผ๐ฟ๐๐พ๐ผ๐ฟ๐(๐ผ) ๐ฟ๐๐ ๐๐๐๐๐ ๐`, wm, null, md, 'แดฟแตแตโฑโฟแต ๐ฅ โป แดฎแตแต', null, null, [
['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ โ๏ธ', '/menu']
], m,)
}

if (command == 'sacar') { 
conn.sendHydrated(m.chat, `๐ผ๐ ๐๐๐ฟ๐ ๐๐๐๐ผ๐ฟ๐๐พ๐ผ๐ฟ๐(๐ผ) ๐ฟ๐๐ ๐๐๐๐๐ ๐`, wm, null, md, 'แดฟแตแตโฑโฟแต ๐ฅ โป แดฎแตแต', null, null, [
['', '']
], m,)
}
  
if (command == 'ban') { 
conn.sendHydrated(m.chat, `๐ผ๐ ๐๐๐ฟ๐ ๐๐๐๐ผ๐ฟ๐๐พ๐ผ๐ฟ๐(๐ผ) ๐ฟ๐๐ ๐๐๐๐๐ ๐`, wm, null, md, 'แดฟแตแตโฑโฟแต ๐ฅ โป แดฎแตแต', null, null, [
['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ โ๏ธ', '/menu']
], m,)
}
}}
handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['kick', 'sacar', 'ban'] ///^(kick|sacar|\-)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


