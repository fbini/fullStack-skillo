alert ("Boas vindas ao jogo do número secreto");

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let  chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas ++;
    }
}
// Operador ternário
//         tentativas é maior q 1?   sim "tentativas" não: "tentativa"
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/*
if (tentativas > 1){
    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
*/