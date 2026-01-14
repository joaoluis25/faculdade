"use strict";

//como o intuito da atividade é pagar as atividades e mandar para um banco de dados não se pode mandar direto pro html a informação, então c é necessario a criação de um banco de dados.

let bancoDados = []//aqui esta se criando um metodo que le o banco de dados e cria um item para cada elemnto desse array


const getBanco = () => JSON.parse(localStorage.getItem ('todoList')) ?? [] // as 2 interrogações descrevem que caso a primeira afirmação n exista ou seja igual a nulo, passa o valor da segunda afirmação. ou seja se ja estiver algo no meu localStorage pega isso senão vazio.
//quando os elementos vierem do localStorage precisa transforma-los em json

const setBanco = (bancoDados) => localStorage.setItem('todoList', JSON.stringify(bancoDados))

const criarItem = (tarefa, status,indice) => { //ensinando o javascript a criar um item 
    const item = document.createElement('label')

    item.classList.add('todo_item') //estrutura do item criado que ira aparecer no html
    item.innerHTML =  `<input type = "checkbox" ${status} data-indice=${indice}> 
    <div>${tarefa}</div>
    <input type= "button" value= "x" data-indice=${indice}>`

    document.getElementById('todoList').appendChild(item)
}

const limparTarefas = () => {
    const todoList = document.getElementById('todoList')
    while (todoList.firstChild){
        todoList.removeChild(todoList.lastChild) //ele sempre ira remover o ultimo filho
    }
}

//para identificar cada um dos elementos do array podemos mandar o indices desse array como identificador de cada elemento presente no array

const atualizarTela = () => { //toda as vezes que mudarmos algo na banco de dados ele manda atualizar a tela

    limparTarefas() //antes de atualizar a tela ele deve limpar a tela de resposta se não causa um duplicação de elementos ja escritos

    const bancoDados = getBanco()

    bancoDados.forEach((item, indice) => criarItem(item.tarefa, item.status, indice)) //forEach le todo o array
}

const inseririItem = (evento) => { //le a tecla que esta sendo digitada no evento
    const tecla = evento.key
    const texto = evento.target.value //texto vai ser igual ao valor de evento

    if (tecla === 'Enter'){ //inserir um item nada mais é que adicionar um novo comando dentro do array
        const bancoDados = getBanco()
        bancoDados.push ({'tarefa': texto, 'status':''})
        setBanco(bancoDados)
        atualizarTela()
        evento.target.value = '' //primeira forma de limpar a caixa de escrita do evento

        /*segunda forma de se limpar a caixa de escrita do evento:
             limparTarefa() = '' [função]
        */

    }
}

const removerItem = (indice) =>{ //ele n remove do html mais s do banco de dados
    const bancoDados = getBanco()
    bancoDados.splice(indice, 1) //splice recorta o remove um array
    setBanco(bancoDados)
    atualizarTela()
}

const atualizarItem = (indice) =>{
    const bancoDados = getBanco()
    bancoDados[indice].status = bancoDados[indice].status === '' ? 'checked' : '' //utilizando ternario se o status for igual a vazio então 'checked', senao vazio
    setBanco(bancoDados)
    atualizarTela()
}

const clickItem = (evento) =>{
    const elemento = evento.target
    if (elemento.type === 'button'){
        const indice = elemento.dataset.indice
        removerItem(indice)
    } else if(elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice
        atualizarItem(indice)
    }
}

document.getElementById('newItem').addEventListener('keypress', inseririItem) //quando uma pessoa clicar enter ele ja manda o comando e adiciona no array
document.getElementById('todoList').addEventListener('click', clickItem)

atualizarTela()

