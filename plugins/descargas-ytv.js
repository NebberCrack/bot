import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, command, usedPrefix }) => {
if (!args || !args[0]) throw `${mg}๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐ผ๐พ๐ ๐ฟ๐ ๐๐๐๐๐๐ฝ๐ ๐๐ผ๐๐ผ ๐ฟ๐๐๐พ๐ผ๐๐๐ผ๐ ๐๐ ๐๐๐ฟ๐๐\n๐๐๐๐๐๐๐\n*${usedPrefix + command} https://youtu.be/85xI8WFMIUY*`
try {
let { thumbnail, video, title } = await youtubedl(args[0])
.catch(async () => await youtubedlv2(args[0]))
let link = await video['480p'].download()
const isY = /y(es)/gi.test(args[1])
const limitedSize = (isPrems || isOwner ? 350 : 200) * 3074
let isLimit = limitedSize < video['480p'].fileSize
if (!isY) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
โญโโโฐ  ${wm}  โฑโโโฌฃ
โ ๐ฐ ๐๐๐๐๐๐
โ ${title} 
โโโโโโโโโโโโโโโโโโ
โ โจ ๐๐๐๐ 
โ ${video['480p'].fileSizeH}
โฐโโโโโโโฐ *๐  ${vs}* โฑโโโโโโฌฃ`.trim(), m)
  
await conn.sendFile(m.chat, link, title + '.mp3', `
โญโโโฐ ๐๏ธ Play - Romina ๐ฅโฑโโฌฃ
โ ๐ฐ ๐๐๐๐๐๐
โ ${title}
โ *Disfruta el video*
โฐโโโโโฐ *แดฟแตแตโฑโฟแต ๐ฅ โป แดฎแตแต* โฑโโโฌฃ`.trim(), m, null, {
  
asDocument: 0
})
}catch(e){
m.reply(`${fg}๐๐ ๐๐๐๐๐ฝ๐๐ ๐๐๐ ๐๐ ๐ผ๐๐พ๐๐๐๐ ๐๐๐ผ ๐๐๐ ๐๐๐๐ผ๐ฟ๐. ๐๐๐๐๐๐๐ ๐พ๐๐ ๐๐๐๐`)
console.log(e)  
}
  
let info = `
  `.trim()


}
handler.help = ['mp4', 'v'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.limit = 2
handler.exp = 100
export default handler
