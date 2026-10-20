console.log("Bem-vindo ao quiz do João Petry");

const readline = require("readline");

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalAcertos = 0;

function verificarResposta(resposta, respostaCorreta) {
    return Number(resposta) === respostaCorreta;
}

leitor.question("Quanto é 22 + 22? ", function(resposta1) {

    if (verificarResposta(resposta1, 44)) {
        console.log("Parabéns, você acertou a primeira pergunta");
        totalAcertos++;
    } else {
        console.log("Você errou a primeira pergunta");
    }

    leitor.question("Quanto é 10 + 10? ", function(resposta2) {

        if (verificarResposta(resposta2, 20)) {
            console.log("Parabéns, você acertou a segunda pergunta");
            totalAcertos++;
        } else {
            console.log("Você errou a segunda pergunta");
        }

        console.log("Você acertou", totalAcertos, "perguntas");

        leitor.close();
    });
});