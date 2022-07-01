let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`HOLA ${conn.getName(m.sender)} ESTE ES EL MENU*\n
MENU DE OPCIONES
	
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^menu3$/i
export default handler
