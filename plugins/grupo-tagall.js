let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*๐ผ๐ด๐ฝ๐๐ฐ๐น๐ด:* ${pesan}`
let teks = `*โบACTIVE GRUPO ๐ฃ๏ธโบ*\n\nโ ${oi}\n\nโ *๐ด๐๐ธ๐๐๐ด๐๐ฐ๐:*\n`
for (let mem of participants) {
teks += `โฃ๐ธ @${mem.id.split('@')[0]}\n`}
teks += `*โ* แดฟแตแตโฑโฟแต ๐ฅ โป แดฎแตแต\n\n*โโโโโโโโโโโโโโโโ*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciรณn)$/i
handler.admin = true
handler.group = true
export default handler