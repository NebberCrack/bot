import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, command, usedPrefix }) => {
if (!args || !args[0]) throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://youtu.be/85xI8WFMIUY*`
try {
let { thumbnail, video, title } = await youtubedl(args[0])
.catch(async () => await youtubedlv2(args[0]))
let link = await video['480p'].download()
const isY = /y(es)/gi.test(args[1])
const limitedSize = (isPrems || isOwner ? 350 : 200) * 3074
let isLimit = limitedSize < video['480p'].fileSize
if (!isY) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
╭━━❰  ${wm}  ❱━━⬣
┃ 🔰 𝙏𝙄𝙏𝙐𝙇𝙊
┃ ${title} 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ✨ 𝙋𝙀𝙎𝙊 
┃ ${video['480p'].fileSizeH}
╰━━━━━━❰ *𓃠 ${vs}* ❱━━━━━⬣`.trim(), m)
  
await conn.sendFile(m.chat, link, title + '.mp3', `
╭━━❰  🎥 ️Play - Romina 🥀 🎞️ ❱━━⬣
┃ 🔰 𝙏𝙄𝙏𝙐𝙇𝙊
┃ ${title}
┃ *aqui tienes tu video*
╰━━━━━━❰ *ᴿᵒᵐⁱⁿᵃ 🥀 ⁻ ᴮᵒᵗ* ❱━━━━━⬣`.trim(), m, null, {
  
asDocument: 0
})
}catch(e){
m.reply(`${fg}𝙀𝙎 𝙋𝙊𝙎𝙄𝘽𝙇𝙀 𝙌𝙐𝙀 𝙀𝙇 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 𝙎𝙀𝘼 𝙈𝙐𝙔 𝙋𝙀𝙎𝘼𝘿𝙊. 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘾𝙊𝙉 𝙊𝙏𝙍𝙊`)
console.log(e)  
}
  
let info = `
  `.trim()
  
conn.sendHydrated(m.chat, info, wm, null, ig, 'creador', null, null, [
['', ''],
['', ''],
['', ''] 
], m,) 

}
handler.help = ['mp4', 'v'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.limit = 2
handler.exp = 100
export default handler
