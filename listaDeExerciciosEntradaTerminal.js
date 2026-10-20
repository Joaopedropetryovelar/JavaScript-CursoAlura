//1
// function saudacao(){
//     console.log("Seja bem vinda")
// }
// saudacao()


//2
// function saudacao(nome, idade){
//     console.log("Seja bem vinda, ", nome, " você tem ", idade, " anos")
// }
// saudacao("ana", 18)


//3
// function calculaImc(peso, altura){
//     return peso/(altura*altura)
// }
// console.log(calculaImc(67,1.76).toFixed(2))


// 4
// function resultado(nota){
//     if(nota>=7){
//         console.log("aprovado")
//     }else{
//         console.log("reprovado")
//     }
// }
// resultado(10)


// //7
// function calcularTroco(valorCompra, valorPago){
//     return valorPago-valorCompra
// }
// let resultado = calcularTroco(10, 20)
// console.log("seu troco é de: ", resultado.toFixed(2))


//10
const readline = require("readline")

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let respostarCorreta="Grêmio"

leitor.question("Qual é o time do coração do João Petry? ", function(resposta){
    if(resposta.toLowerCase()==respostarCorreta.toLowerCase()){
        console.log("Parabéns, você acertou a pergunta")
    }else{
        console.log("Você errou a pergunta, é o Gremio")
    }
    leitor.close()
})