/*Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.*/
        var numberPromp = (window.prompt("Escreva um numero para descobrir se ele é positivo, negativo ou zero"))
        var number = Number(numberPromp)

        if (number > 0) {
           res.innerHTML = `O numero ${number} é positivo`
        } else if (number < 0) {
            res.innerHTML = `O número ${number} é negativo`
        } else{
             res.innerHTML = `O número ${number} é zero`
        }