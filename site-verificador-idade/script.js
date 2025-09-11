function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fullano = window.document.getElementById('textcr')
    var resp = window.document.getElementById('resp')
    if (fullano.value.length == 0 || Number(fullano.value) > ano) {
        window.alert('ERRO-FERIFICAR')
    } else {
        var fsex = document.getElementsByName('radiosx')
        var idade = ano - Number(fullano.value)
        var genero = ''
        var bloco = document.createElement('div')
        bloco.setAttribute('id', 'corgenero')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10) {
                document.body.style.background = '#8abdffff';
            } else if (idade < 21) {
                document.body.style.background = '#5b65f7ff';
            } else if (idade < 50) {
                document.body.style.background = '#5816d3ff';
            } else {
                document.body.style.background = '#200355ff';
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                document.body.style.background = '#f58affff';
            } else if (idade < 21) {
                document.body.style.background = '#f75befff';
            } else if (idade < 50) {
                document.body.style.background = '#cd16d3ff';
            } else {
                document.body.style.background = '#55034aff';
            }
        }
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resp.appendChild(bloco)
    }

}