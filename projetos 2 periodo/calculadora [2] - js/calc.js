'use strict'

function insertToDisplay(data) {
    document.querySelector('#display').value += data
}

function clean(){
    document.querySelector('#display').value = ''
}

function back() {
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1)
}

function resultado(){
    const display = document.querySelector('#display')
    try{
        display.value = eval(display.value) /* O eval, le o texto em formato de string, calcula a conta e retorna o resultado */
    } catch {
        display.value = 'Error'
    }
}
