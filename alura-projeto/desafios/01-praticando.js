//01
let diaDaSemana = prompt("Qual é o dia da semana?: ") 

if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo") {
    alert("Bom fim de semana!")
} else{
    alert("Boa semana!")
}

//02
let numero = prompt("Escreva um numero para saber se ele é positivo ou negativo: ")
if (numero < 0) {
    alert(`O número ${numero} é negativo`)
} else{
    alert(`O número ${numero} é positivo`)
}

//03
let pontuacaoJogo = prompt("Digite sua pontuação no jogo: ")
if (pontuacaoJogo >= 100) {
    alert("Parabéns, você venceu!")
} else{
    alert("Tente novamente para ganhar.")
}

//04
let seuSaldo = prompt("Qual seu saldo? :")
alert(`Seu saldo é de R$${seuSaldo} reais`)


//05
let nome = prompt("Insira seu nome: ")
alert(`Boas-vindas ${nome}`)