'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2) /*formata o digito de segundos para em numeros com casa unica apareça o 0(zero) a frente do numero. */

const atualizar = (tempo) =>{ 

    const segundos = document.getElementById('segundos') /*contagem dos segundos */

    const minutos = document.getElementById('minutos')/*contagem dds minutos */

    const horas = document.getElementById('horas') //contagem das horas 

    const dias = document.getElementById('dias') //contagem dos minutos

    const qtdSegundos = tempo % 60 // Pega o resto da divisão por 60, que representa os segundos que sobraram 

   const qtdMinutos =  Math.floor((tempo % 3600) / 60) 
   // Primeiro remove as horas (resto de 3600[igual a 60 * 60] segundos)
   // Depois divide por 60 para obter os minutos inteiros
   //92 < 3600[quantidade de segundos em 1 hora]
   //92 / 60 = 1.53[1 minuto inteiro]
   // 92 - 60 = 32 segundos

   const qtdHoras = Math.floor((tempo % (3600 * 24)) / 3600)
   // Y = Primeiro multiplica a quantidade de segundos em 1 hora pela quantidade de horas em um dia 24h
   // X = Depois o resto de tempo dividido por Y
   // Z = X / 3600 = resultado final de horas

   const qtdDias = Math.floor (tempo / (60*60*24))
   // Y = 60[segundos] vezes 60[minutos] vezes 24[horas em um dia] == [igual] a 1 dia completo
   // Resultado Final == X = tempo / Y

    segundos.textContent = formatarDigito(qtdSegundos) /*formatação da mostragem dos segundos na tela;
    responsavel por mostrar os segundos na tela [parenteses = valor dos segundos]. */

    minutos.textContent = formatarDigito(qtdMinutos) /*formatação da mostragem dos minutos na tela;
    responsavel por mostrar os minutos na tela [parenteses = valor dos minutos]. */

    horas.textContent = formatarDigito(qtdHoras)

    dias.textContent = formatarDigito(qtdDias)



}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id)

    const contar = () =>{
        if (tempo == 0){
            pararContagem()
        }
        atualizar (tempo)
        tempo--
    }
    const id = setInterval(contar, 1000) /*Aqui esta em milisegundo[1000 milesegundos = 1 segundo], ou seja a cada mil milesegundos se passa 1 segundo entao a contagem se da de segundo em segundo.*/ 
}

const tempoRestante = () =>{
    const dataEvento = new Date ('2026-01-09 20:00:00')
    const hoje = Date.now() 
    return Math.floor((dataEvento - hoje) / 1000)
    
    // JavaScript trabalha com datas e toda data é igual a milisegundos
    // A contagem de milisegundos no JS começou em 1 de janeiro de 1970
    // Então nesse caso ele vai contar quantos milisegundos se passaram de 01-01-1970 ate a data de hoje 08-01-2026
}

contagemRegressiva(tempoRestante())


