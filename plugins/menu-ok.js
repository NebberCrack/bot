let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
m.reply(`HOLA ${conn.getName(m.sender)} ESTE ES EL MENU\n
╭━━〔 𝗠𝗘𝗡𝗨 𝗗𝗘𝗟 𝗕𝗢𝗧 〕

╭━〔 𝙅𝙐𝙀𝙂𝙊𝙎 𝘿𝙄𝙉𝘼𝙈𝙄𝘾𝙊𝙎 〕⬣
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🎡➺ _${usedPrefix}mates | matemáticas | math_
┃🎡➺ _${usedPrefix}ppt *piedra : papel : tijera*_
┃🎡➺ _${usedPrefix}topgays_
┃🎡➺ _${usedPrefix}topotakus_
┃🎡➺ _${usedPrefix}gay | gay *@tag*_
┃🎡➺ _${usedPrefix}gay2 *nombre : @tag*_
┃🎡➺ _${usedPrefix}lesbiana *nombre : @tag*_
┃🎡➺ _${usedPrefix}manca *nombre : @tag*_
┃🎡➺ _${usedPrefix}manco *nombre : @tag*_
┃🎡➺ _${usedPrefix}pajero *nombre : @tag*_
┃🎡➺ _${usedPrefix}pajera *nombre : @tag*_
┃🎡➺ _${usedPrefix}puto *nombre : @tag*_
┃🎡➺ _${usedPrefix}puta *nombre : @tag*_
┃🎡➺ _${usedPrefix}rata *nombre : @tag*_
┃🎡➺ _${usedPrefix}love *nombre : @tag*_
┃🎡➺ _${usedPrefix}doxear *nombre : @tag*_
┃🎡➺ _${usedPrefix}doxxeame_
┃🎡➺ _${usedPrefix}pregunta *texto*_
┃🎡➺ _${usedPrefix}slot *apuesta*_
┃🎡➺ _${usedPrefix}formarpareja_
┃🎡➺ _${usedPrefix}dado_
┃🎡➺ _${usedPrefix}verdad_
┃🎡➺ _${usedPrefix}reto_
┃🎡➺ _${usedPrefix}simi | okgoogle *texto*_
┃🎡➺ _${usedPrefix}alexa | siri | cortana *texto*_
┃🎡➺ _${usedPrefix}simsimi | bixby *texto*_
┃🎡➺ _${usedPrefix}multijuegos_
┃🎡➺ _${usedPrefix}juegos_
╰━━━━━━━━━━━━━━━━━━━⬣

	
`)}

handler.command = /^menu$/i
export default handler
