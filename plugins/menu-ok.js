let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
m.reply(`HOLA ${conn.getName(m.sender)} ESTE ES EL MENU\n
╭━━〔 𝗠𝗘𝗡𝗨 𝗗𝗘𝗟 𝗕𝗢𝗧 〕━━⬣

fhgj

	
`)}

handler.command = /^menu$/i
export default handler
