import { performance } from 'perf_hooks'
let handler = async (m, { text, usedPrefix, command }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg' 
if (command == 'ppt') {
let salah = `๐๐๐๐ฟ๐๐ผ, ๐๐ผ๐๐๐, ๐ ๐๐๐๐๐๐ผ\n\n๐๐ช๐๐๐๐จ ๐ช๐จ๐๐ง ๐ก๐ค๐จ ๐ฝ๐๐๐๐๐๐ ๐ฅ๐๐ง๐ ๐๐ช๐๐๐ง ๐ค ๐ฉ๐๐ข๐๐๐๐ฃ ๐ฅ๐ช๐๐๐๐จ ๐ช๐จ๐๐ง ๐๐จ๐ฉ๐ค๐จ ๐๐ค๐ข๐๐ฃ๐๐ค๐จ:\n${usedPrefix + command} ๐ฅ๐๐๐๐ง๐\n${usedPrefix + command} ๐ฅ๐๐ฅ๐๐ก\n${usedPrefix + command} ๐ฉ๐๐๐๐ง๐\n\n๐๐จ๐ ๐๐ฃ ๐ข๐๐ฃ๐ช๐จ๐๐ช๐ก๐๐จ\n`
 
conn.sendHydrated(m.chat, wm, salah, pp, md, 'แดฟแตแตโฑโฟแต ๐ฅ โป แดฎแตแต', null, null, [
['๐๐๐๐๐ง๐ ๐ฅ', `${usedPrefix + command} piedra`],
['๐๐๐ฅ๐๐ก ๐', `${usedPrefix + command} papel`],
['๐๐๐๐๐ง๐ โ๏ธ', `${usedPrefix + command} tijera`]
], m,)}
  
//  conn.sendHydrated(m.chat, salah, wm, null, md, '๐๐๐ฉ๐๐ฝ๐ค๐ฉ-๐๐ฟ', null, null, [
//['๐๐๐ฃ๐ช ๐๐ช๐๐๐ค๐จ ๐ก', '#juegosmenu'],
//['๐๐ฉ๐ง๐ ๐ซ๐๐ฏ ๐คญ', `ds`],
//['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ  โ๏ธ', '/menu']
//], m,)
                  
//if (!text) throw salah
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
} 
if (text == astro) {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 2
 
//m.reply(`*_๐ฐ Empate!_*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `โญโโโโ[ ๐๐๐๐ผ๐๐! ๐ค ]โโโโโฌฃ\nโ${name} ๐๐จ๐ฉ๐๐: ${text}\nโ๐ฑ Loli๐ฝ๐ค๐ฉ: ${astro}\nโ๐ธ ๐ฝ๐ค๐ฃ๐ค: $${[money0].getRandom()} loli๐พ๐ค๐๐ฃ๐จ\nโ๐ต ๐๐ช ๐ฟ๐๐ฃ๐๐ง๐ค: $${money} loli๐พ๐ค๐๐ฃ๐จ\nโฐโโโโโโ[ ${vs} ]โโโโโโฌฃ`, wm, null, yt, '๐๐ค๐ช๐๐ช๐๐', null, null, [
['', ''],
['', '']
], m,)
  
} else if (text == 'papel') {
if (astro == 'piedra') {
//global.db.data.users[m.sender].uang += 1000
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 100
  
//m.reply(`*๐ฅณ Tรบ ganas! ๐*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `โญโโโโ[ ๐๐ผ ๐๐ผ๐๐ผ๐ฟ๐! ๐ ]โโโโฌฃ\nโ${name} ๐๐จ๐ฉ๐๐: ${text}\nโ๐ธ Loli๐ฝ๐ค๐ฉ: ${astro}\nโ๐ฐ ๐๐ง๐๐ข๐๐ค: $${[money0].getRandom()} loli๐พ๐ค๐๐ฃ๐จ\nโ๐ต ๐๐ช ๐ฟ๐๐ฃ๐๐ง๐ค: $${money} loli๐พ๐ค๐๐ฃ๐จ\nโฐโโโโโโ[ ${vs} ]โโโโโโฌฃ`, wm, null, yt, '๐๐ค๐ช๐๐ช๐๐', null, null, [
['', ''],
['', '']
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 25
  
//m.reply(`*โ?๏ธ Tรบ pierdes! โ*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `โญโโโโ[ ๐๐ผ ๐๐๐๐ฟ๐๐ฟ๐! ๐คก ]โโโฌฃ\nโ${name} ๐๐จ๐ฉ๐๐: ${text}\nโ๐ฑ loli๐ฝ๐ค๐ฉ: ${astro}\nโ๐ ๐๐๐ง๐๐๐๐: $${[money0].getRandom()} loli๐พ๐ค๐๐ฃ๐จ\nโ๐ต ๐๐ช ๐ฟ๐๐ฃ๐๐ง๐ค: $${money} loli๐พ๐ค๐๐ฃ๐จ\nโฐโโโโโโ[ ${vs} ]โโโโโโฌฃ`, wm, null, yt, '๐๐ค๐ช๐๐ช๐๐', null, null, [
['', ''],
['', '']
], m,)
  
}
} else if (text == 'tijera') {
if (astro == 'papel') {
//global.db.data.users[m.sender].uang += 125
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 125
  
//m.reply(`*๐ฅณ Tรบ ganas! ๐*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `โญโโโโ[ ๐๐ผ ๐๐ผ๐๐ผ๐ฟ๐! ๐ ]โโโโฌฃ\nโ${name} ๐๐จ๐ฉ๐๐: ${text}\nโ๐ฑ loli๐ฝ๐ค๐ฉ: ${astro}\nโ๐ฐ ๐๐ง๐๐ข๐๐ค: $${[money0].getRandom()} loli๐พ๐ค๐๐ฃ๐จ\nโ๐ต ๐๐ช ๐ฟ๐๐ฃ๐๐ง๐ค: $${money} loli๐พ๐ค๐๐ฃ๐จ\nโฐโโโโโโ[ ${vs} ]โโโโโโฌฃ`, wm, null, yt, '๐๐ค๐ช๐๐ช๐๐', null, null, [
['', '#juegosmenu'],
['', '']
], m,)
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 75
  
//m.reply(`*โ?๏ธ Tรบ pierdes! โ*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `โญโโโโ[ ๐๐ผ ๐๐๐๐ฟ๐๐ฟ๐! ๐คก ]โโโฌฃ\nโ${name} ๐๐จ๐ฉ๐๐: ${text}\nโ๐ฑ loli๐ฝ๐ค๐ฉ: ${astro}\nโ๐ ๐๐๐ง๐๐๐๐: $${[money0].getRandom()} loli๐พ๐ค๐๐ฃ๐จ\nโ๐ต ๐๐ช ๐ฟ๐๐ฃ๐๐ง๐ค: $${money} loli๐พ๐ค๐๐ฃ๐จ\nโฐโโโโโโ[ ${vs} ]โโโโโโฌฃ`, wm, null, yt, '๐๐ค๐ช๐๐ช๐๐', null, null, [
['', ''],
['', '']
], m,)  
  
}
} else if (text == 'tijera') {
if (astro == 'papel') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 125
//global.db.data.users[m.sender].uang += 1000
  
//m.reply(`*๐ฅณ Tรบ ganas! ๐*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `โญโโโโ[ ๐๐ผ ๐๐ผ๐๐ผ๐ฟ๐! ๐ ]โโโโฌฃ\nโ${name} ๐๐จ๐ฉ๐๐: ${text}\nโ๐ฑ loli๐ฝ๐ค๐ฉ: ${astro}\nโ๐ฐ ๐๐ง๐๐ข๐๐ค: $${[money0].getRandom()} loli๐พ๐ค๐๐ฃ๐จ\nโ๐ต ๐๐ช ๐ฟ๐๐ฃ๐๐ง๐ค: $${money} loli๐พ๐ค๐๐ฃ๐จ\nโฐโโโโโโ[ ${vs} ]โโโโโโฌฃ`, wm, null, yt, '๐๐ค๐ช๐๐ช๐๐', null, null, [
['', ''],
['', '']
], m,)  
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 90
  
//m.reply(`*โ?๏ธ Tรบ pierdes! โ*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `โญโโโโ[ ๐๐ผ ๐๐๐๐ฟ๐๐ฟ๐! ๐คก ]โโโฌฃ\nโ${name} ๐๐จ๐ฉ๐๐: ${text}\nโ๐ฑ loli๐ฝ๐ค๐ฉ: ${astro}\nโ๐ ๐๐๐ง๐๐๐๐: $${[money0].getRandom()} loli๐พ๐ค๐๐ฃ๐จ\nโ๐ต ๐๐ช ๐ฟ๐๐ฃ๐๐ง๐ค: $${money} loli๐พ๐ค๐๐ฃ๐จ\nโฐโโโโโโ[ ${vs} ]โโโโโโฌฃ`, wm, null, yt, '๐๐ค๐ช๐๐ช๐๐', null, null, [
['', ''],
['', '']
], m,)    
  
}
} else if (text == 'papel') {
if (astro == 'piedra') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 75
//global.db.data.users[m.sender].uang += 1000
  
//m.reply(`*๐ฅณ Tรบ ganas! ๐*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `โญโโโโ[ ๐๐ผ ๐๐ผ๐๐ผ๐ฟ๐! ๐ ]โโโโฌฃ\nโ${name} ๐๐จ๐ฉ๐๐: ${text}\nโ๐ฑ loli๐ฝ๐ค๐ฉ: ${astro}\nโ๐ฐ ๐๐ง๐๐ข๐๐ค: $${[money0].getRandom()} loli๐พ๐ค๐๐ฃ๐จ\nโ๐ต ๐๐ช ๐ฟ๐๐ฃ๐๐ง๐ค: $${money} loli๐พ๐ค๐๐ฃ๐จ\nโฐโโโโโโ[ ${vs} ]โโโโโโฌฃ`, wm, null, yt, '๐๐ค๐ช๐๐ช๐๐', null, null, [
['', ''],
['', '']
], m,)   
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 240
  
//m.reply(`*โ?๏ธ Tรบ pierdes! โ*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `โญโโโโ[ ๐๐ผ ๐๐๐๐ฟ๐๐ฟ๐! ๐คก ]โโโฌฃ\nโ${name} ๐๐จ๐ฉ๐๐: ${text}\nโ๐ฑ loli๐ฝ๐ค๐ฉ: ${astro}\nโ๐ ๐๐๐ง๐๐๐๐: $${[money0].getRandom()} loli๐พ๐ค๐๐ฃ๐จ\nโ๐ต ๐๐ช ๐ฟ๐๐ฃ๐๐ง๐ค: $${money} loli๐พ๐ค๐๐ฃ๐จ\nโฐโโโโโโ[ ${vs} ]โโโโโโฌฃ`, wm, null, yt, '๐๐ค๐ช๐๐ช๐๐', null, null, [
['', ''],
['', '']
], m,)    
  
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money += 300
//global.db.data.users[m.sender].uang += 1000
  
//m.reply(`*๐ฅณ Tรบ ganas! ๐*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `โญโโโโ[ ๐๐ผ ๐๐ผ๐๐ผ๐ฟ๐! ๐ ]โโโโฌฃ\nโ${name} ๐๐จ๐ฉ๐๐: ${text}\nโ๐ฑ loli๐ฝ๐ค๐ฉ: ${astro}\nโ๐ฐ ๐๐ง๐๐ข๐๐ค: $${[money0].getRandom()} loli๐พ๐ค๐๐ฃ๐จ\nโ๐ต ๐๐ช ๐ฟ๐๐ฃ๐๐ง๐ค: $${money} loli๐พ๐ค๐๐ฃ๐จ\nโฐโโโโโโ[ ${vs} ]โโโโโโฌฃ`, wm, null, yt, '๐๐ค๐ช๐๐ช๐๐', null, null, [
['', ''],
['', '']
], m,)     
  
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 
let money = global.db.data.users[who].money
let money0 = global.db.data.users[m.sender].money -= 210
  
//m.reply(`*โ?๏ธ Tรบ pierdes! โ*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*`)
conn.sendHydrated(m.chat, `โญโโโโ[ ๐๐ผ ๐๐๐๐ฟ๐๐ฟ๐! ๐คก ]โโโฌฃ\nโ${name} ๐๐จ๐ฉ๐๐: ${text}\nโ๐ฑ loli๐ฝ๐ค๐ฉ: ${astro}\nโ๐ ๐๐๐ง๐๐๐๐: $${[money0].getRandom()} loli๐พ๐ค๐๐ฃ๐จ\nโ๐ต ๐๐ช ๐ฟ๐๐ฃ๐๐ง๐ค: $${money} loli๐พ๐ค๐๐ฃ๐จ\nโฐโโโโโโ[ ${vs} ]โโโโโโฌฃ`, wm, null, yt, '๐๐ค๐ช๐๐ช๐๐', null, null, [
['', ''],
['', '']
], m,)   
  
}
} //else {
//throw salah
} //}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
handler.register = false
handler.limit = false
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

/*
let handler = async (m, { command, text }) => { 
if (!text) throw `error, vuelva a intentar.` 
//let id = text.join(' ')

if (command == 'e1') {
 if (text == 'a') {
 m.reply(`Resultado 1`) }
}
  
  if (command == 'e2') {
 if (text == 'b') {
 m.reply(`Resultado 2`) }
}  
    
    if (command == 'e3') {
 if (text == 'c') {
 m.reply(`Resultado 3`) }
}
}
 
//handler.help = handler.command = ['e1', 'e2', 'e3']
//handler.tags = ['Prueba']

//export default handler  
handler.help = ['e1', 'e2', 'e3']
handler.tags = ['ejemplo']
handler.command = ['e1', 'e2', 'e3'] //'a', 'b', 'c'

export default  handler */ 
  
