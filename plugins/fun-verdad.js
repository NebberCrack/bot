let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`*┌────「 RETO 」─*\n*“${pickRandom(global.verdad)}”*\n*└────「 Romina 🥀 」─*`, m)
}
handler.help = ['reto']
handler.tags = ['fun']
handler.command = /^(reto)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.verdad = [
"¿¿Te gusta alguien del grupo? ¿Quién?",
  "¿Cual es tu mas grande miedo?",
  "¿Alguna vez te ha gustado un maestro / a de tu clase?",
  "¿Cuál es el nombre del exnovio de tu amiga que una vez te gustó en secreto?",
  "¿Alguna vez has robado el dinero de tu madre o de tu padre? ¿La razón?",
  "Lo que te hace feliz cuando estás triste",
  "¿Alguna vez has sido amor no correspondido? ¿Si has estado con quién? ¿Cómo se siente brou?",
  "¿Alguna vez has tenido una aventura con alguien?",
  "Lo más temido",
  "Quién es la persona más influyente en tu vida",
  "Qué orgullo tienes este año",
  "Quién es la persona que puede alegrarte el día",
  "Quien es la persona que te pone hot 🔥 ",
  "¿Quién es el más cercano a su tipo de pareja ideal aquí",
  "¿Alguna vez has rechazado a alguien? ¿Por qué?",
  "Menciona el incidente que te hizo daño y que aún recuerdas",
  "¿Qué logros has obtenido este año?",
  "¿Cuál es tu peor hábito en la escuela?", 
  "¿Qué programa de televisión odias más? ¡Da la razón!", 
  "¿Cuál es el vestido más feo (en su opinión) que ha usado y cuándo lo usó?", 
  "¿Qué es lo peor (chisme) que has dicho sobre tu amigo?",
  "¿Qué es lo más vergonzoso de ti?",
  " ¿Qué es lo primero que ves cuando miras a otra persona (del sexo opuesto)?", 
"¿Qué es lo primero que te viene a la mente cuando te miras al espejo?",
"¿Que es lo mas tonto que has hecho en tu vida?",
" ¿Cuál es el peor sueño que has tenido?",
" ¿Cuál es el sueño más loco que puedes recordar hasta ahora?",
" ¿Cuál es tu peor rasgo en tu opinión?", 
" ¿Qué rasgo te gustaría cambiar de ti mismo?", 
" ¿Qué rasgo te gustaría cambiar en tu mejor amigo?", 
" ¿Qué harías si tu novio te dijera que tienes mala nariz o dedos?", 
" ¿En qué piensas antes de dormir? ej .: fantasear con una pareja, etc.", 
"¿Qué crees que se destaca más de ti?",
" ¿Qué parte del cuerpo de tu amigo te gusta más y desearías tener?", 
"¿Qué parte de tu cuerpo odias más?",
" De todas las clases de la escuela, ¿a qué clase le gustaría ingresar y qué clase le gustaría evitar?", 
"¡Describe a tu amigo más cercano!",
" ¡Descríbete en una palabra!",
" ¿Qué películas y canciones te han hecho llorar?", 
" ¿Qué es algo que has mantenido en secreto hasta ahora y nadie lo ha descubierto?", 
" ¿Qué es lo más romántico que alguien (del sexo opuesto) te ha hecho o regalado?", 
"¿Qué es lo más desagradable que has experimentado?", 
" Si nacieras de nuevo y tuvieras que ser uno de tus amigos, ¿a quién elegirías ser?", 
" Si tuvieras un superpoder ¿qué quieres hacer?", 
" Si el apocalipsis llega pronto, ¿qué haces?", 
" Si te pidieran que te sometieras a una cirugía plástica con una muestra de rostro de un integrante del grupo ¿a quién eligirias?", 
" Alguna vez has robado algo?", 
" ¿Tiene miedo a morir? ¿Por qué?", 
" ¿Cuándo fue la última vez que lloraste y por qué?", 
" ¿Cuáles son tus habilidades especiales?", 
" ¿Cómo debería ser la persona que te enamore?", 
" ¿Con qué tipo de persona te gustaría casarte algún día?", 
" En tu opinión, ¿cuál es el trabajo más atractivo  ¿Y por qué?", 
" ¿Alguna vez has esperado en secreto que la relación de alguien con su novia se rompiera? ¿Quién?", 
" ¿Prefiere AMIGAS o AMIGOS? ¿Por qué?", 
" ¿Qué cita recuerdas más y te gusta?", 
" ¿Qué cita desagradable recuerdas?", 
" ¿Qué secretos nunca les has contado a tus amigos hasta ahora?", 
" ¿Quiénes son sus verdaderos modelos a seguir?", 
" ¿Cuál de tus amigos crees que es SIMP?", 
" ¿Cuál de tus amigos crees que tiene menos paciencia?", 
" ¿Cuál de tus amigos es el más fotogénico? ", 
" ¿Quién es tu mejor ex? ¡¿Y por qué rompieron ?!", 
" ¿Cómo se llamaba el profesor que te gustaba?", 
" ¿Cuál es el nombre de la exnovia/o de tu amigo que te ha gustado en secreto?", 
" ¿Cuál es el nombre de la persona (del sexo opuesto) que crees que sería divertido ser novia?", 
" ¿Cuál es el nombre de la persona que odias?", 
" ¿Quién es la persona (del sexo opuesto) que más se te pasa por la cabeza?", 
" ¿Quién es la persona más molesta entre tus amigos? ¡la razón!", 
" Padre o madre", 
" La parte de tu cuerpo que no te gusta", 
" ¿Alguna vez has hecho trampa?", 
"¿Alguna vez te han besado?", 
"¿Qué es lo primero que harías si te despertaras como del sexo opuesto?", 
"¿Alguna vez has dejado que alguien más se meta en problemas por algo que hiciste?", 
"¿Qué es lo más embarazoso que has hecho en tu vida?", 
" ¿Cuál es la razón más ridícula por la que has roto con alguien?", 
" ¿Cuál es el peor hábito que tienes?", 
" ¿Cuál crees que es tu mejor característica?",
" ¿Que es lo peor de ti?", 
" ¿Cuál es la cosa más valiente que has hecho?", 
" ¿Cuándo fue la última vez que mojaste la cama?", 
" Si va a ganar dinero ilegalmente, ¿cómo lo hace?", 
" ¿Qué cosas infantiles sigues haciendo?", 
" Si fueras ciego, ¿quién sería tu perro guía?", 
" ¿Qué es lo que más te impresiona en una persona?", 
" Si se le permitiera usar solo 3 palabras durante el resto de la noche a partir de ahora, ¿cuál sería?", 
" Si fueras un dictador, ¿qué ley promulgarías primero?", 
"Si vivieras durante la era nazi, ¿quién serías?", 
"¿Cuál fue la experiencia más vergonzosa en la escuela?", 
"¿Cuál es el mayor error de tu vida?", 
" ¿Qué no harías nunca, incluso si supieras que solo te quedan 12 horas de vida?", 
" ¿Qué delitos ha cometido?", 
" Cuéntame un secreto de tu infancia.", 
" ¿Qué es lo peor que le has hecho a alguien?", 
" ¿Quién te gusta del grupo?", 
" ¿Alguna vez te has enamorado de alguno de los presentes?", 
" Si fueras un vampiro, ¿a cuál de nosotros morderías ahora?", 
" ¿Ha defecado alguna vez en público XD?", 
" ¿Cuál es tu fantasía más oscura?", 
" ¿Qué es lo que más te gusta de tu cuerpo y qué es lo más feo?", 
" ¿A quien te gustaría ver desnuda/o?", 
" Si te vas a tatuar en el área genital, ¿que habrá allí?", 
" ¿Qué es más importante en una relación: el sexo o el amor?", 
" ¿Crees que el sexo es genial, bueno, bueno, divertido a veces, o realmente no te importa?", 
" ¿Cuántas parejas sexuales has tenido: sin mentir?",
" ¿Qué importancia tienen para ti los juegos previos prolongados?", 
" ¿Qué debe hacer un hombre o una mujer para seducirte?", 
" ¿Alguna vez has tenido sexo con un buen amigo?", 
" ¿Qué animal se asemeja a ti y por qué?", 
" ¿Cuál es tu peor cita?", 
" ¿A quién quieres besar ahora?", 
" ¿Cuál es tu oscura fantasía secreta?", 
" ¿Prefieres tatuarte el culo o perforarte la lengua?", 
" ¿Coca cola o pepsi?", 
" ¿Con qué celebridad te gustaría salir?", 
" ¿Cuál fue el momento más embarazoso de tu vida?", 
" ¿Qué boca te gusta más del grupo de aquí?", 
" ¿Qué famoso/a tiene la mano más hermosa?", 
" ¿Dónde fue tu primer beso?", 
" ¿A quién del grupo te gustaría besar?", 
" ¿Cuál es el mayor error de tu vida?", 
" ¿Te pasó algo vergonzoso en una cita?", 
" ¿Ha estado alguna vez en contacto con drogas?", 
" ¿Cuándo fue la última vez que estuvo borracho?", 
" ¿Alguna vez has hecho trampa en un examen escolar?", 
" ¿Has robado algo en el pasado?", 
" ¿Roncas por la noche?", 
" ¿Cuales tu cancion favorita?", 
" Te mudaste a una isla desierta, ¿a quién te llevaste de aquí?", 
" ¿A que temes más?", 
" ¿Dónde te afeitas más?", 
"¿Tienes un apodo?", 
" Cuantas veces te has besado", 
"¿Qué es lo más embarazoso que te ha pasado?", 
"¿Cuántos chicos / chicas has besado?", 
"¿De quien estas enamorado(a) ?", 
" Que actor / actriz te gusta", 
"¿Tendrías relaciones con alguien de este grupo?",
"¿Quién es la persona más sexy aquí?",
"¿Alguna vez has pensado en engañar a una pareja tuya?",
"¿Cuál es tu posición sexual favorita?",
"¿Quién de las personas de este grupo tiene el cuerpo más bonito?",
"¿Has tenido encuentros casuales?",
"¿Has tenido sexo en la calle?",
"¿Alguna vez te han sorprendido teniendo sexo?",
"¿Alguna vez has dudado de tu orientación sexual?",
"¿Has quedado con alguien que has conocido en Internet?",
"De este grupo, ¿a quién besarías?",
"¿Alguna vez te has olvidado del nombre de la persona con la que te has acostado?",
"¿Alguna vez has tenido sexo en la cama de tus padres?",
"¿Cuál es el mejor lugar para hacerlo?",
"¿Cómo te describirías en la cama?",
"¿Has tenido algún sueño erótico con un amigo/a?",
"¿Alguna vez has hecho un trío?",
"¿Con qué dos personas de aquí harías un trío?",
"¿Qué es algo que nunca te has atrevido a pedir en la cama?",
"¿Beso seco, húmedo o mojado?",
"¿Cuál es tu juguete sexual favorito?",
"¿Prefieres hacerlo de pie o tumbado?",
"¿Has tenido relaciones con alguien de tu mismo sexo?",
"¿Cuántas fotos tuyas pasadas de tono dirías que has mandado?",
"¿Alguna vez has bebido tanto que te has olvidado de con quién estuviste la noche anterior?",
"¿Te acostarías con alguien del grupo por 1.000 dolares?",
"¿Alguna vez te han pedido hacer algo en la cama y no te ha gustado?",
"¿Qué es lo más sucio que has soñado?",
"¿Consideras que el sexo es imprescindible en una relación?",
"¿Cuál es la propuesta más indecente que te han hecho?",
"¿Podrías hablarnos de tu fetichismo oculto?",
"¿Qué opinas honestamente sobre la masturbación?",
"¿Cuál es tu palabra grosera favorita?",
"¿Alguna vez has tenido que usar un anticonceptivo de emergencia?",
"¿Has tenido alguna vez sexo tántrico?",
"¿Serías capaz de matar a alguien?",
"¿Con qué famoso tendrías sexo?",
"¿Qué opinión tienes sobre los disfraces eróticos?",
"¿Has tenido sexo telefónico?",
"¿Alguna vez has estado con alguien mucho mayor?",
"¿Cuál es la mayor mentira que me has contado?",
"¿Te gustaría que te hicieran un striptease / stripper?",
"¿Alguna vez has sido infiel?",
"¿Alguna vez has pensado en ser infiel?",
"¿Te gustaría casarte?",
"¿Te gustaría tener hijos?",
"¿De este grupo, a quién te llevarías a una isla desierta?",
"¿Qué es lo más vergonzoso que te ha pasado en la vida?",
"¿Cuál fue el sueño más extraño que has tenido?",
"Si hoy fuera tu último día de vida, ¿qué harías?",
"¿Cuál fue el peor regalo que has recibido?",
"Si el mundo se acabara y pudieras salvar solo a una persona para sobrevivir, ¿a quién salvarías?",
"¿Has nadado desnudo?",
"¿Te han traicionado alguna vez?",
"¿Qué no puede faltar en tu refrigerador?",
"¿Has besado a más de una persona el mismo día? ¿Cuántas?",
"¿De qué estás más orgulloso/a en la vida?",
"¿Crees que eres atractivo/a?",
"Si pudieras traer de vuelta a una persona que ya murió, ¿a quién sería?",
"En una máquina del tiempo, ¿a qué época de la historia o momento de tu vida volverías?",
"¿Has mentido jugando a verdad o desafío?",
"¿Cuál es tu técnica de seducción?",
"¿Cuál es la mayor mentira que has contado?",
"¿Qué parte de tu cuerpo cambiarías?",
"¿Dejarías a tu pareja si te ofrecieran medio millón de euros? ¿Y por 1 millón de euros?",
"¿Qué posición te gusta más a la hora de hacer el amor?",
"Dicen que el tamaño no importa, pero, ¿Tú que piensas de eso?",
"¿Qué te gusta que te digan mientras haces el amor?",
"¿Dónde te gusta más, en la cama, en el sofá o contra la pared?",
"En este preciso momento, ¿Tienes tu aparato reproductor depilado?",
"¿Te has masturbado alguna vez estando a solas en casa?",
"¿Alguna vez has probado algún juguete sexual a la hora de hacer el amor o en tus momentos de soledad?",
"¿En qué parte del cuerpo te gusta más que te besen?",
"¿Cuál ha sido la peor cita que has tenido en tu vida?",
"¿¿Cuál es la parte que más te gusta de tu cuerpo?",
"¿Cuál es la parte que menos te gusta de tu cuerpo?",
"¿Cuál crees que es la canción perfecta para escuchar a solas?",
"¿Cuántas veces te has enamorado?",
"¿Físicamente hablando cuál es tu prototipo de chica/chico?",
"¿Te consideras una persona de mente abierta?",
"¿Has fantaseado alguna vez con alguna de las personas que está presente?",
"¿Cuál es la cosa más loca que has hecho por una persona?",
"¿Cuál es la peor cosa que has hecho por dinero?",
"¿Cuéntanos algún vicio o manía de la que te avergüenzas?",
"¿Cuál es tu hábito más infantil?",
"¿Quién es la persona que más secretos tuyos sabe?",
"¿Consumes algún tipo de droga?",
"¿Te ha detenido la policía alguna vez?",
"¿Qué es lo peor que has hecho en una borrachera?",
"¿Qué es lo que menos te gusta de tu pareja?",
"¿Qué sería lo primero que harías si pudieras ser una persona del sexo opuesto?",
"¿Qué sería lo primero que harías si fueras invisible?",
"¿Cuéntanos un deseo que nunca le hayas confesado a nadie?",
"¿Cuál es la situación más traumática que has tenido en la vida?",
"¿Qué harías si te quedaras sin papel higiénico en un baño publico?",
"¿Qué es lo más vergonzoso que has hecho por amor?",
"¿Cuál fue el motivo de tu última ruptura amorosa?",
"¿Qué es lo más humillante que te han hecho?",
"¿Cuál es el mayor rechazo que te han hecho?",
"¿Qué es lo más raro que hayas hecho estando solo/a?",
"¿Te has sentido atraído por algún familiar?",
"Hablando de relaciones de pareja qué prefieres ¿Conexión física o conexión intelectual?",
"¿Cuál es tu estrategia más exitosa para conquistar a alguien?",
"¿Qué es la cosa más loca que has buscado en internet?",
"¿Si pudieras controlar algo con un control remoto que sería?",
"¿Qué harías si supieras que el mundo se acaba mañana?",
"¿Qué te gustaría estar haciendo dentro de 5 años?",
"¿Cuál es su mayor sueño?",
"¿Cuál es tu pasión en la vida?",
"¿Cuál es el viaje que más deseas hacer?",
"¿Qué es más importante para ti?",
"Si tuvieras que dejar todo atrás y llevar sólo 5 cosas contigo, ¿qué serían?",
"¿Quién es la persona más especial para ti? ¿Por qué?",
"¿Quiénes son tus verdaderos amigos?",
"Si ganaras la lotería, ¿qué es lo primero que harías?",
"¿Cómo te describes?",
"¿Crees en fidelidad para el resto de la vida?",
"¿Crees en amor a primera vista?",
"¿Crees en el destino?",
"¿Qué preferirías: abrazar durante 5 segundos o besar durante 1 segundo?",
"¿Cuál es tu recuerdo más feliz de tu infancia?",
"¿Cuál fue tu mejor decisión en la vida?",
"¿Qué significa el amor para ti?",
"¿Cuál es tu mayor miedo?",
"¿Te arrepientes de algo en esa vida?",
"¿Qué cambiarías de ti?",
"¿Qué prefieres: restaurante o una cena a la luz de las velas?",
"¿Crees en las almas gemelas?",
"¿Con cuántos años fue tu primer beso?",
"¿besar mal o ser mala en la cama?",
"¿amor para siempre o dinero para siempre?",
"¿hablar todas las lenguas del mundo o poder comunicarte con animales?",
"¿poder volar o leer la mente de los demás?",
"¿ser rica y desconocida o pobre y famosa?",
"¿poder volver al pasado o poder ir al futuro?",
"¿perder un dedo o el olfato?",
"¿no salir más de casa durante el día o durante la noche?",
"¿no necesitar dormir o tener días de 30h?",
"¿poder ver el futuro o ver el pasado?",
"¿Ser calva para siempre o tener 2 metros de pelo para siempre?",
"¿Qué es lo que más te gusta hacer en la vida?",
"¿Cuál es tu signo del zodiaco?",
"¿Cómo describirías para ti una vida ideal?",
"Si tuvieras solo un deseo... ¿qué pedirías?",
"¿Cuál es tu olor favorito?",
"¿Un recuerdo bonito de tu infancia?",
"¿Qué cambiarías de ti misma?",
"¿A qué le tienes miedo?",
"Si fueras una canción, ¿cuál serías?",
"¿Qué es lo más bonito que te han dicho?",
"¿Sientes nostalgia en tu vida?",
"Si pudieras dar marcha atrás en el tiempo... ¿a dónde irías?",
"¿Cuál sería tu super poder?",
"Un lugar favorito en el mundo",
"¿Con qué personaje literario o del cine te identificas?"


] 
