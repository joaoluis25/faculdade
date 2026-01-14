'use strict';

const openModal = () => document.getElementById('modal')
      .classList.add('active')
    
const closeModal = () => document.getElementById('modal')
      .classList.add('active')

const tempClient = {
    nome: 'Joao',
    email: 'joao@gmail.com',
    celular: '36613425',
    cidade: 'mineiros'
}

//CRUD - create read update delete

const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client')) //sequencia de comandos dessa linha: 1- le oque os valores do localstorage; 2- transforma em JSON; 3- manda para a variavel db_client.
    console.log(db_client)
    db_client.push(client)
    localStorage.setItem('db_client', JSON.stringify(db_client)) //set recebe os dados, get manda os dados 
} 

//Eventos

document.getElementById('cadastrarCliente')
        .addEventListener('click', openModal)

document.getElementById('modalClose')
        .addEventListener('click', closeModal)
