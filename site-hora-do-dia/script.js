var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var cb = window.document.getElementById('corbloco')
var data = new Date()
var hora = 13
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
 //BOM DIA!
 cb.innerHTML = `BOM DIAAA!`
} else if (hora >= 12 && hora < 18) {
 // BOA TARDE!
  cb.innerHTML = `BOA TARDEEE`
  cb.style.background = '#cc6c2c' // laranja
} else {
 // BOA NOITE!
  cb.innerHTML = `BOA NOITEEE`
}