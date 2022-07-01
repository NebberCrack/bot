let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`HOLA ${conn.getName(m.sender)} ESTE ES EL MENU\n
╭━━〔 𝗠𝗘𝗡𝗨 𝗗𝗘𝗟 𝗕𝗢𝗧 〕━━⬣

*<𝕁𝕌𝔼𝔾𝕆𝕊/>*

° ඬ⃟🎖️ _${usedPrefix}verdad_
° ඬ⃟🎖️ _${usedPrefix}reto_
° ඬ⃟🎖️ _${usedPrefix}pvp *<@tag>*_
° ඬ⃟🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
° ඬ⃟🎖️ _${usedPrefix}love *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}formarpareja_
° ඬ⃟🎖️ _${usedPrefix}prostituto *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}prostituta *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}gay2 *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}lesbiana *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}pajero *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}pajera *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}puto *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}puta *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}manco *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}manca *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}rata *<nombre / @tag>*_
° ඬ⃟🎖️ _${usedPrefix}topgays_
° ඬ⃟🎖️ _${usedPrefix}topotakus_
° ඬ⃟🎖️ _${usedPrefix}simi *<texto>*_
° ඬ⃟🎖️ _${usedPrefix}doxear *<nombre / @tag>*_


*<𝔸𝕌𝔻𝕀𝕆𝕊/>* 
_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_

° ඬ⃟🔊 _Quien es tu sempai botsito 7w7_
° ඬ⃟🔊 _Te diagnostico con gay_
° ඬ⃟🔊 _A nadie le importa_
° ඬ⃟🔊 _Fiesta del admin_
° ඬ⃟🔊 _Fiesta del administrador_ 
° ඬ⃟🔊 _Vivan los novios_
° ඬ⃟🔊 _Feliz cumpleaños_
° ඬ⃟🔊 _Noche de paz_
° ඬ⃟🔊 _Buenos dias_
° ඬ⃟🔊 _Buenos tardes_
° ඬ⃟🔊 _Buenos noches_
° ඬ⃟🔊 _Audio hentai_
° ඬ⃟🔊 _Chica lgante_
° ඬ⃟🔊 _Feliz navidad_
° ඬ⃟🔊 _Vete a la vrg_
° ඬ⃟🔊 _Pasa pack Bot_
° ඬ⃟🔊 _Atencion grupo_
° ඬ⃟🔊 _Marica quien_
° ඬ⃟🔊 _Murio el grupo_
° ඬ⃟🔊 _Oh me vengo_
° ඬ⃟🔊 _tio que rico_
° ඬ⃟🔊 _Viernes_
° ඬ⃟🔊 _Baneado_
° ඬ⃟🔊 _Sexo_
° ඬ⃟🔊 _Hola_
° ඬ⃟🔊 _Un pato_
° ඬ⃟🔊 _Nyanpasu_
° ඬ⃟🔊 _Te amo_
° ඬ⃟🔊 _Yamete_
° ඬ⃟🔊 _Bañate_
° ඬ⃟🔊 _Es puto_
° ඬ⃟🔊 _La biblia_
° ඬ⃟🔊 _Onichan_
° ඬ⃟🔊 _Mierda de Bot_
° ඬ⃟🔊 _Siuuu_
° ඬ⃟🔊 _Rawr_
° ඬ⃟🔊 _UwU_
° ඬ⃟🔊 _:c_
° ඬ⃟🔊 _a_
° ඬ⃟🔊 _Andan cogiendo_
° ඬ⃟🔊 _Te quiero_
° ඬ⃟🔊 _No me carga_
° ඬ⃟🔊 _Mucho texto_
° ඬ⃟🔊 _No chupala_
° ඬ⃟🔊 _Manda Pack_
° ඬ⃟🔊 _Guapa_
° ඬ⃟🔊 _Jaja_
° ඬ⃟🔊 _Bienvenido_
° ඬ⃟🔊 _Contexto_
° ඬ⃟🔊 _Bot puto_

*<𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊/>*

° ඬ⃟📥 _${usedPrefix}play *<nombre del audio / video>*_
° ඬ⃟📥 _${usedPrefix}imagen *<nombre de imagen>*_
° ඬ⃟📥 _${usedPrefix}pinteret *<nombre de imagen>*_
° ඬ⃟📥 _${usedPrefix}wallpaper *<nombre de imagen>*_


*<𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ/>*

° ඬ⃟☑️ _${usedPrefix}enable *welcome*_
° ඬ⃟☑️ _${usedPrefix}disable *welcome*_
° ඬ⃟☑️ _${usedPrefix}enable *modohorny*_
° ඬ⃟☑️ _${usedPrefix}disable *modohorny*_
° ඬ⃟☑️ _${usedPrefix}enable *antilink*_
° ඬ⃟☑️ _${usedPrefix}disable *antilink*_
° ඬ⃟☑️ _${usedPrefix}enable *antilink2*_
° ඬ⃟☑️ _${usedPrefix}disable *antilink2*_
° ඬ⃟☑️ _${usedPrefix}enable *detect*_
° ඬ⃟☑️ _${usedPrefix}disable *detect*_
° ඬ⃟☑️ _${usedPrefix}enable *audios*_
° ඬ⃟☑️ _${usedPrefix}disable *audios*_
° ඬ⃟☑️ _${usedPrefix}enable *autosticker*_
° ඬ⃟☑️ _${usedPrefix}disable *autosticker*_


*<𝔾ℝ𝕌ℙ𝕆𝕊/>* 

° ඬ⃟💎 _${usedPrefix}add *<numero>*_
° ඬ⃟💎 _${usedPrefix}kick *<@tag>*_
° ඬ⃟💎 _${usedPrefix}grupo *<abrir / cerrar>*_
° ඬ⃟💎 _${usedPrefix}promote *<@tag>*_
° ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
° ඬ⃟💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
° ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
° ඬ⃟💎 _${usedPrefix}infogroup_
° ඬ⃟💎 _${usedPrefix}link_
° ඬ⃟💎 _${usedPrefix}setname *<texto>*_
° ඬ⃟💎 _${usedPrefix}setdesc *<texto>*_
° ඬ⃟💎 _${usedPrefix}invocar *<texto>*_
° ඬ⃟💎 _${usedPrefix}setwelcome *<texto>*_
° ඬ⃟💎 _${usedPrefix}setbye *<texto>*_
° ඬ⃟💎 _${usedPrefix}hidetag *<texto>*_


*<ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊/>*

° ඬ⃟🛠️ _${usedPrefix}afk *<motivo>*_


*<𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊/>*

° ඬ⃟👽 _${usedPrefix}sticker *<responder a imagen o video>*_
° ඬ⃟👽 _${usedPrefix}s *<responder a imagen o video>*_
° ඬ⃟👽 _${usedPrefix}s *<enlace / link / url>*_
° ඬ⃟👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
° ඬ⃟👽 _${usedPrefix}semoji *<tipo> <emoji>*_
° ඬ⃟👽 _${usedPrefix}attp *<texto>*_
° ඬ⃟👽 _${usedPrefix}ttp *<texto>*_
° ඬ⃟👽 _${usedPrefix}pat *<@tag>*_
° ඬ⃟👽 _${usedPrefix}slap *<@tag>_
° ඬ⃟👽 _${usedPrefix}kiss *<@tag>*_

*<𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊/>*

° ඬ⃟👑 _${usedPrefix}cajafuerte_
° ඬ⃟👑 _${usedPrefix}enable *restrict*_
° ඬ⃟👑 _${usedPrefix}disable *restrict*_
° ඬ⃟👑 _${usedPrefix}enable *autoread*_
° ඬ⃟👑 _${usedPrefix}disable *autoread*_
° ඬ⃟👑 _${usedPrefix}enable *public*_
° ඬ⃟👑 _${usedPrefix}disable *public*_
° ඬ⃟👑 _${usedPrefix}enable *pconly*_
° ඬ⃟👑 _${usedPrefix}disable *pconly*_
° ඬ⃟👑 _${usedPrefix}enable *gconly*_
° ඬ⃟👑 _${usedPrefix}disable *gconly*_
° ඬ⃟👑 _${usedPrefix}banchat_
° ඬ⃟👑 _${usedPrefix}unbanchat_
° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}unbanuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}bc *<texto>*_
° ඬ⃟👑 _${usedPrefix}bcchats *<texto>*_
° ඬ⃟👑 _${usedPrefix}bcgc *<texto>*_
° ඬ⃟👑 _${usedPrefix}cleartpm_
° ඬ⃟👑 _${usedPrefix}restart_
° ඬ⃟👑 _${usedPrefix}update_
° ඬ⃟👑 _${usedPrefix}addprem *<@tag>*_
° ඬ⃟👑 _${usedPrefix}delprem *<@tag>*_
° ඬ⃟👑 _${usedPrefix}listprem_


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
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^menu$/i
export default handler
