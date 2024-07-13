
var img = window.document.getElementById('imgdado1')
var img2 = window.document.getElementById('imgdado2')
var img3 = window.document.getElementById('imgdado3')
var img4 = window.document.getElementById('imgdado4')
var img5 = window.document.getElementById('imgdado5')
var img6 = window.document.getElementById('imgdado6')

var reshabilidade = window.document.getElementById('habilidade')
var resenergia = window.document.getElementById('energia')
var ressorte = window.document.getElementById('sorte')
var resmagia = window.document.getElementById('magia')



var valorinicialhab = 6
var valorinicialene = 12
var valorinicialsor = 6
var valorinicialmagia = 6

//usado para soma dos dados de energia
var valordados
var dado1
var dado2

//usado para soma dos dados de magia
var valormagia
var dado1magia
var dado2magia


var habilidadefinal
var energiafinal
var sortefinal



function lancardado(imgElement) {

    var dado = Number(Math.floor(Math.random() * 6) + 1)
    imgElement.src = dado + '.png'

    return dado;
}

function lancardados1() {//habilidade
    let dado = lancardado(img)
    habilidadefinal = dado + valorinicialhab
    reshabilidade.innerHTML += ` ${habilidadefinal}`
    img.onclick = null
    
}


function lancardados2() {//energia
    dado1 = lancardado(img2)
    img2.onclick = null
}

function lancardados3() {//energia
    if(dado1 === null || dado1 === undefined ){
        img3.onclick == null
    }else{
    dado2 = lancardado(img3)
    img3.onclick = null
    energiadados()
}
}

function energiadados() {//soma so dois dados de energia
    valordados = dado1 + dado2
    energiafinal = valordados + valorinicialene
    resenergia.innerHTML += ` ${energiafinal}`
}

function lancardados4() {//sorte
    let dado = lancardado(img4)
    sortefinal = dado + valorinicialsor
    ressorte.innerHTML += ` ${sortefinal}`
    img4.onclick = null
}
    

function lancardados5() {
    dado1magia = lancardado(img5)
    img5.onclick = null
}

function lancardados6(){
    if(dado1magia === null || dado1magia === undefined ){
        img3.onclick == null}
        else{
    dado2magia = lancardado(img6)
    img6.onclick = null
    magiadados()}
}

function magiadados() {//soma so dois dados de energia
    valormagia = dado1magia + dado2magia
    magiafinal = valormagia + valorinicialmagia
    resmagia.innerHTML += ` ${magiafinal}`
}



function salvarAtributos() {
    if (habilidadefinal === undefined || energiafinal === undefined || sortefinal === undefined || magiafinal === undefined) {
        window.alert('Por favor, lance todos os dados antes de salvar os atributos.');
    } else {
        // Salvar os dados no localStorage
        localStorage.setItem('habilidade', habilidadefinal);
        localStorage.setItem('energia', energiafinal);
        localStorage.setItem('sorte', sortefinal);
        localStorage.setItem('magia', magiafinal);

        // Atualizar os elementos HTML com os novos valores


        window.location.href = 'feiticos.html';
    }
}