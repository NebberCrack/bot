let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `${mg}๐ฟ๐๐ฝ๐ ๐ฟ๐ ๐๐๐ผ๐ ๐ฟ๐ ๐๐ผ ๐๐๐๐๐๐๐๐๐ ๐๐ผ๐๐๐๐ผ:\n๐๐๐๐๐๐๐\n*${usedPrefix}darpoder @tag*\n*${usedPrefix}daradmin responder a un mensaje*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `${fg}๐๐ ๐๐๐๐๐๐ ๐๐ ๐๐๐พ๐๐๐๐๐พ๐๐, ๐๐๐๐๐๐๐ ๐ฟ๐ ๐๐๐๐๐`, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
//conn.reply(m.chat, `${eg}๐ผ๐๐๐๐ผ ๐๐๐๐๐ ๐๐ ๐๐๐ฟ๐๐ ๐ฟ๐๐ ๐ผ๐ฟ๐๐๐ ๐ผ\n\n๐๐๐๐ ๐๐ ๐๐๐ ๐ผ๐ฟ๐๐๐ ๐ค `, m)
	
conn.sendHydrated(m.chat, `${eg}๐ผ๐๐๐๐ผ ๐๐๐๐๐ ๐๐ ๐๐๐ฟ๐๐ ๐ฟ๐๐ ๐ผ๐ฟ๐๐๐ ๐ผ`, wm, null, md, 'แดฟแตแตโฑโฟแต ๐ฅ โป แดฎแตแต', null, null, [
['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ โ๏ธ', '/menu'] 
], m)
}}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'promote ' + v)
handler.tags = ['group']
handler.command = /^(promote|daradmin|darpoder)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
