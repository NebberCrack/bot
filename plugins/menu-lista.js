import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)
const sections = [
{
title: `π ππ‘π¨ πππ ππ’π§ `,
rows: [
        {title: "π‘ COMANDOS DEL BOT π‘", description: null, rowId: `${usedPrefix}juegosmenu`},
    
      

]}, ]
 
let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)
const listMessage = {
text:` β­βββββββββββββββββ\nβ${ucapan()}\nβΒΈ.β’ *${name}* β’.ΒΈ\nβ°βββββββββββββββββ
 γ π ππ‘π¨ πππ ππ’π§ γ

*<πππΌπΎππ/>*

Β° ΰΆ¬βποΈ _${usedPrefix}verdad_
Β° ΰΆ¬βποΈ _${usedPrefix}reto_
Β° ΰΆ¬βποΈ _${usedPrefix}pvp *<@tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}ppt *<papel / tijera /piedra>*_
Β° ΰΆ¬βποΈ _${usedPrefix}love *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}formarpareja_
Β° ΰΆ¬βποΈ _${usedPrefix}prostituto *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}prostituta *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}gay2 *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}lesbiana *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}pajero *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}pajera *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}puto *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}puta *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}manco *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}manca *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}rata *<nombre / @tag>*_
Β° ΰΆ¬βποΈ _${usedPrefix}topgays_
Β° ΰΆ¬βποΈ _${usedPrefix}topotakus_
Β° ΰΆ¬βποΈ _${usedPrefix}simi *<texto>*_
Β° ΰΆ¬βποΈ _${usedPrefix}doxear *<nombre / @tag>*_


*<πΈππ»πππ/>* 
_(π’π π π ππ πππππππ)_

Β° ΰΆ¬βπ _Quien es tu sempai botsito 7w7_
Β° ΰΆ¬βπ _Te diagnostico con gay_
Β° ΰΆ¬βπ _A nadie le importa_
Β° ΰΆ¬βπ _Fiesta del admin_
Β° ΰΆ¬βπ _Fiesta del administrador_ 
Β° ΰΆ¬βπ _Vivan los novios_
Β° ΰΆ¬βπ _Feliz cumpleaΓ±os_
Β° ΰΆ¬βπ _Noche de paz_
Β° ΰΆ¬βπ _Buenos dias_
Β° ΰΆ¬βπ _Buenos tardes_
Β° ΰΆ¬βπ _Buenos noches_
Β° ΰΆ¬βπ _Audio hentai_
Β° ΰΆ¬βπ _Chica lgante_
Β° ΰΆ¬βπ _Feliz navidad_
Β° ΰΆ¬βπ _Vete a la vrg_
Β° ΰΆ¬βπ _Pasa pack Bot_
Β° ΰΆ¬βπ _Atencion grupo_
Β° ΰΆ¬βπ _Marica quien_
Β° ΰΆ¬βπ _Murio el grupo_
Β° ΰΆ¬βπ _Oh me vengo_
Β° ΰΆ¬βπ _tio que rico_
Β° ΰΆ¬βπ _Viernes_
Β° ΰΆ¬βπ _Baneado_
Β° ΰΆ¬βπ _Sexo_
Β° ΰΆ¬βπ _Hola_
Β° ΰΆ¬βπ _Un pato_
Β° ΰΆ¬βπ _Nyanpasu_
Β° ΰΆ¬βπ _Te amo_
Β° ΰΆ¬βπ _Yamete_
Β° ΰΆ¬βπ _BaΓ±ate_
Β° ΰΆ¬βπ _Es puto_
Β° ΰΆ¬βπ _La biblia_
Β° ΰΆ¬βπ _Onichan_
Β° ΰΆ¬βπ _Mierda de Bot_
Β° ΰΆ¬βπ _Siuuu_
Β° ΰΆ¬βπ _Rawr_
Β° ΰΆ¬βπ _UwU_
Β° ΰΆ¬βπ _:c_
Β° ΰΆ¬βπ _a_
Β° ΰΆ¬βπ _Andan cogiendo_
Β° ΰΆ¬βπ _Te quiero_
Β° ΰΆ¬βπ _No me carga_
Β° ΰΆ¬βπ _Mucho texto_
Β° ΰΆ¬βπ _No chupala_
Β° ΰΆ¬βπ _Manda Pack_
Β° ΰΆ¬βπ _Guapa_
Β° ΰΆ¬βπ _Jaja_
Β° ΰΆ¬βπ _Bienvenido_
Β° ΰΆ¬βπ _Contexto_
Β° ΰΆ¬βπ _Bot puto_

*<π»πΌπβπΈβπΎπΈπ/>*

Β° ΰΆ¬βπ₯ _${usedPrefix}play *<nombre del audio / video>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}imagen *<nombre de imagen>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}pinteret *<nombre de imagen>*_
Β° ΰΆ¬βπ₯ _${usedPrefix}wallpaper *<nombre de imagen>*_


*<πΈβππππΈβ π π»πΌππΈβππππΈβ/>*

Β° ΰΆ¬ββοΈ _${usedPrefix}enable *welcome*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *welcome*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *modohorny*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *modohorny*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antilink*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antilink*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *antilink2*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *antilink2*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *detect*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *detect*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *audios*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *audios*_
Β° ΰΆ¬ββοΈ _${usedPrefix}enable *autosticker*_
Β° ΰΆ¬ββοΈ _${usedPrefix}disable *autosticker*_


*<πΎβπβππ/>* 

Β° ΰΆ¬βπ _${usedPrefix}add *<numero>*_
Β° ΰΆ¬βπ _${usedPrefix}kick *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}grupo *<abrir / cerrar>*_
Β° ΰΆ¬βπ _${usedPrefix}promote *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}demote *<@tag>*_
Β° ΰΆ¬βπ _admins *<texto>*_ (π’π π π ππ πππππππ)
Β° ΰΆ¬βπ _${usedPrefix}demote *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}infogroup_
Β° ΰΆ¬βπ _${usedPrefix}link_
Β° ΰΆ¬βπ _${usedPrefix}setname *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}setdesc *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}invocar *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}setwelcome *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}setbye *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}hidetag *<texto>*_


*<βπΌββπΈπππΌβππΈπ/>*

Β° ΰΆ¬βπ οΈ _${usedPrefix}afk *<motivo>*_


*<πππβππΌβπ/>*

Β° ΰΆ¬βπ½ _${usedPrefix}sticker *<responder a imagen o video>*_
Β° ΰΆ¬βπ½ _${usedPrefix}s *<responder a imagen o video>*_
Β° ΰΆ¬βπ½ _${usedPrefix}s *<enlace / link / url>*_
Β° ΰΆ¬βπ½ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
Β° ΰΆ¬βπ½ _${usedPrefix}semoji *<tipo> <emoji>*_
Β° ΰΆ¬βπ½ _${usedPrefix}attp *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}ttp *<texto>*_
Β° ΰΆ¬βπ½ _${usedPrefix}pat *<@tag>*_
Β° ΰΆ¬βπ½ _${usedPrefix}slap *<@tag>_
Β° ΰΆ¬βπ½ _${usedPrefix}kiss *<@tag>*_

*<ππβπΌβ π πππ»πΌβπΈπ»πβπΌπ/>*

Β° ΰΆ¬βπ _${usedPrefix}cajafuerte_
Β° ΰΆ¬βπ _${usedPrefix}enable *restrict*_
Β° ΰΆ¬βπ _${usedPrefix}disable *restrict*_
Β° ΰΆ¬βπ _${usedPrefix}enable *autoread*_
Β° ΰΆ¬βπ _${usedPrefix}disable *autoread*_
Β° ΰΆ¬βπ _${usedPrefix}enable *public*_
Β° ΰΆ¬βπ _${usedPrefix}disable *public*_
Β° ΰΆ¬βπ _${usedPrefix}enable *pconly*_
Β° ΰΆ¬βπ _${usedPrefix}disable *pconly*_
Β° ΰΆ¬βπ _${usedPrefix}enable *gconly*_
Β° ΰΆ¬βπ _${usedPrefix}disable *gconly*_
Β° ΰΆ¬βπ _${usedPrefix}banchat_
Β° ΰΆ¬βπ _${usedPrefix}unbanchat_
Β° ΰΆ¬βπ _${usedPrefix}banuser *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}unbanuser *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}banuser *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}bc *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}bcchats *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}bcgc *<texto>*_
Β° ΰΆ¬βπ _${usedPrefix}cleartpm_
Β° ΰΆ¬βπ _${usedPrefix}restart_
Β° ΰΆ¬βπ _${usedPrefix}update_
Β° ΰΆ¬βπ _${usedPrefix}addprem *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}delprem *<@tag>*_
Β° ΰΆ¬βπ _${usedPrefix}listprem_
β°βββββββββββββββββ¬£`, footer: `${wm}`, //${name} ${ucapan()}
title: null,
buttonText: "π ππ‘π¨ πππ ππ’π§", 
sections }

await conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu8)$/i
//handler.register = true
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "π *BIENVENIDO(A) | WELCOME* π"
  if (time >= 4) {
    res = "π *Buenos DΓ­as* β"
  }
  if (time >= 11) {
    res = "ποΈ *Buenas Tardes* π€οΈ"
  }
  if (time >= 15) {
    res = "π *Buenas tardes* π₯οΈ"
  }
  if (time >= 17) {
    res = "π *Buenas noches* π«"
  }
  return res
}
