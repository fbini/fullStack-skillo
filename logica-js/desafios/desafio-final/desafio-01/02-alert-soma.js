    /*Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.*/

    var nomeLinguagem = (window.prompt("Qual a linguagem de programação que você mais gosta?"));
    console.log(`Sua linguagemde programação favorita é ${nomeLinguagem}`);

    /*Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.*/

    var valor1 = 5
    var valor2 = 10
    var resultado = valor1 + valor2
    console.log(`A soma entre ${valor1} e ${valor2} é igual a ${resultado}`);

    /*Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.*/

    var n1 = 10
    var n2 = 20
    var resultado = n1 - n2
    console.log(`A diferença entre ${n1} e ${n2} é igual a ${resultado}`);

    /*Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.*/

    var idade = (window.prompt("Insira sua idade"));
    if (idade < 18) {
        console.log("Menor de idade")
    }
    console.log("Maior de idade")