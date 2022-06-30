let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = 
`╭[ *${groupMetadata.subject}* ]

✨ 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉
${groupMetadata.desc?.toString() || '𝙉𝙊 𝙃𝘼𝙔 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉'}

✨ 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎
${participants.length} Participantes


✨ 𝘼𝘿𝙈𝙄𝙉𝙎 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊
${listAdmin}


╰━━━━━━❰ *𓃠 ${vs}* ❱━━━━━⬣
`.trim()
//conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
conn.sendHydrated(m.chat, text, wm, pp, md, 'Romina 🥀 - Bot', null, null, [

], m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(reglas|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
