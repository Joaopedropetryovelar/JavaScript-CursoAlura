let idade=17

const maiorIdade= idade>=18
console.log("é maior de idade?", maiorIdade)


const n1=10
const n2=7

let media= (n1+n2)/2

if(media>=7){
    console.log("sua media é maior ou igual a 7, você foi aprovado")
}else{
    console.log("sua media foi menor que 7")
}

let valorCompra=35.90
let valorPago=50

if(valorPago>=valorCompra && valorCompra>0){
    let troco=valorPago-valorCompra
    console.log("o troco é de R$: ", troco.toFixed(2))
}else{
    console.log("algo deu errado")
}

let senha1=1234567
let senha2="1234567"

const senhaIguais= senha1===senha2
console.log("as duas senhas são iguais?", senhaIguais)


let totalAulas=25
let faltas=20

let percentualDe25= totalAulas*0.25

let atingiuOPercentual= faltas>percentualDe25

console.log("o aluno atingiu o percentual de 25% de faltas?", atingiuOPercentual)

let temLogin=false
let temSenha=true

const logar= temLogin===true && temSenha===true
console.log("o usuário pode logar?",logar)

let disponivel=false
console.log("o produto está disponível?", !disponivel)

let num1=10
let num2=14

if(num1%2==0 && num2%2==0 && num1===num2){
    console.log("os dois números são pares e iguais")
}else{
    console.log("os dois números não são pares ou não são iguais")
}

let valor=120

let porcentagem15= valor*0.15

console.log("15% de 120 é igual a: ",porcentagem15)

let calculo= 2+3*5
console.log("a multiplicação vem primeiro da ordem de preferência, e o resultado é de :", calculo)
