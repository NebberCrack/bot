let handler  = async (m, { conn, usedPrefix, command }) => {
//conn.reply(m.chat,`*┌────「 RETO 」─*\n*“${pickRandom(global.bucin)}”*\n*└────「 Mystic 」─*`, m)
conn.sendHydrated(m.chat, `╭━━━━━[ VERDAD😏 ]━━━━⬣\n*“${pickRandom(global.bucin)}”*\n╰━━━━[ ᴿᵒᵐⁱⁿᵃ 🥀 ⁻ ᴮᵒᵗ ]━⬣`, null, null, md, 'ᴿᵒᵐⁱⁿᵃ 🥀 ⁻ ᴮᵒᵗ', null, null, [
['𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 🧐', `${usedPrefix}verdad`],
['', ``],
['', ``]
], m,)}

handler.help = ['verdad']
handler.tags = ['fun']
handler.command = /^verdad/i
handler.fail = null
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
"Esto es una verdad"
] 
