let handler = async (m, { conn, text, command, usedPrefix }) => {
    if (!text) throw `${mg}𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝘼 𝘼𝙇𝙂𝙐𝙄𝙀𝙉 𝙋𝘼𝙍𝘼 𝘽𝘼𝙉𝙀𝘼𝙍\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} @tag*`
let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*_ETIQUETE A ALGUN USUARIO_*'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `*_EL USUARIO FUE BANEADO CON EXITO_*\n\n*_EL USUARIO NO TENDRA PERMISO PARA USAR EL BOT_*`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
module.exports = handler