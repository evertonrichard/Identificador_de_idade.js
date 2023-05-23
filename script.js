alert('Deseja Continuar? Clique em "OK"')
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById ('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] verfique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotogarotocriança.png')
                //criança
            } else if  (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotohomemjovem.png')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'fotohomemadulto.png')
            } else {
                //idosa
                img.setAttribute('src', 'fotohomemidoso.png')
            } 
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotogarotacriança.png')
            } else if  (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotomulherjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotomulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotomulheridosa.png')
            }
        }
        img.style.width = '-400px'
        img.style.height = '50vh'
        img.style.padding = '20px'
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}