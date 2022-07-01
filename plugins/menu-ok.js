let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
m.reply(`HOLA ${conn.getName(m.sender)} ESTE ES EL MENU\n
╭━━〔 𝗠𝗘𝗡𝗨 𝗗𝗘𝗟 𝗕𝗢𝗧 〕

╭━〔 𝙅𝙐𝙀𝙂𝙊𝙎 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊𝙎 〕⬣
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎡➺ _.mates | matemáticas | math_

╰━━━━━━━━━━━━━━━━━━━⬣

	
`)}

handler.command = /^menu$/i
export default handler
