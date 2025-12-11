const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervalId = null

const trafficLight = (event) =>{
    stop()
    turnOn[event.target.id]()
}

const nextIndex = () => {

    //usando ternario ficaria: colorIndex = colorIndex < 2 ? colorIndex++ : 0;

    if (colorIndex < 2){ // 3 cores, array sempre começa a contar da posição 0
       colorIndex++
    } else {
        colorIndex = 0
    }
}

const stop = () =>{
    clearInterval (intervalId)
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[ colorIndex ];
    turnOn[color]()
    nextIndex()
}

const turnOn = {
    'red': () => img.src = 'red.png',
    'yellow': () => img.src = 'yellow.png',
    'green': () => img.src = 'green.png',
    'automatic': () => intervalId = setInterval(changeColor, 1500)
}

buttons.addEventListener('click', trafficLight)