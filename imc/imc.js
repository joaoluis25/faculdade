
const calcular = document.getElementById('calcular') //variavel global

/*
Acessando um elemento:
nome.value = 'joao'
*/

function imc (){ //se usa a tag value quando vc quer verificar somente o valor que esta dentro de cada variavel. ex: nome(variavel) = Joao(valor). OBS: value é somente para input do tipo texto.
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('result')

    if (nome !== '' && altura !== '' && peso !== ''){ 

        const valorimc = ( peso / (altura * altura)).toFixed(2)

        let classificado = ''

        if (valorimc < 18.5){
            classificado = 'abaixo do peso.'
        } else if (valorimc < 25){
            classificado = 'com peso normal PARABENS!!!'
        } else if (valorimc < 30){
            classificado = 'com sobrepeso.'
        } else if (valorimc < 35){
            classificado = 'em obesidade grau I, procure ajuda!'
        } else if (valorimc < 40){
            classificado = 'em obessidade grau II, procure ajuda rapidamente!'
        } else {
            classificado = 'em obessidade morbida, procure ajuda urgentemente!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorimc} e você está ${classificado}`

    } else {
        resultado.textContent = "Preencha todos os campos!"
    }

}

calcular.addEventListener('click', imc);