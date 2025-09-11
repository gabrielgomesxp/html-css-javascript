var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var cb = window.document.getElementById('corbloco')
var data = new Date()
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
 //BOM DIA!
  cb.innerHTML = `BOM DIAAA!`
  cb.style.background = '#2c8cccff'
  document.body.style.background = '#2c8cccff'
} else if (hora >= 12 && hora < 18) {
 // BOA TARDE!
  cb.innerHTML = `BOA TARDEEE`
  cb.style.background = '#cc6c2c'
  document.body.style.background = '#cc6c2c'
} else {
 // BOA NOITE!
  cb.innerHTML = `BOA NOITEEE`
  cb.style.background = '#4e4e4eff'
  document.body.style.background = '#333'
}