const interruptor = document.getElementById('interruptor')
const lamp = document.getElementById("lamp")

function lampOn (){
    if (!broken()){
        lamp.src = './ligada.png'
    }
}

function lampOff (){
    if (!broken()){
        lamp.src = './desligada.png'
    }
}

function lampOnOff (){
    if (interruptor.textContent == 'Ligar'){
        lampOn()
        interruptor.textContent = 'Desligar'
    } else {
        lampOff()
        interruptor.textContent = 'Ligar'
    }
}

function broken (){
    lamp.src = './quebrada.png'
}

interruptor.addEventListener('click', lampOnOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave' , lampOff)
lamp.addEventListener('dblclick' , broken)

/*
CODIGO COM DOIS BOTOES DIFERENTES DE LIGAR E DESLIGAR LAMPADA 

function isLampBroken (){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn (){
    if (!isLampBroken ()){
       lamp.src = './ligada.png'
    }
}

function lampOff (){
    if (!isLampBroken ()){
       lamp.src = './desligada.png'
    }
}

function lampBroken (){
    lamp.src = './quebrada.png'
}

turnOff.addEventListener('click', lampOff)
turnOn.addEventListener('click', lampOn)//quando clicar no botão ligar o programa vai 'ouvir' e ativar a função lampOn.
lamp.addEventListener('mouseover' , lampOn)
lamp.addEventListener('mouseleave' , lampOff)
lamp.addEventListener('dblclick' , lampBroken)
*/