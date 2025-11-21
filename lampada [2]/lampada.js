const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById("lamp")

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