let idade=18

if(idade>=18){
    console.log("pode beber")
}else{
    console.log("ainda não pode beber")
}

let horaAtual=15

if(horaAtual>=6 && horaAtual<=12) {
    console.log("bom dia")
}else if(horaAtual>=12 && horaAtual<=18){
    console.log("boa tarde")
}else{
    console.log("boa noite")
}

let num=-1

if(num>=0){
    console.log("o número é positivo")
}else{
    console.log("o número é negativo")
}

let nota=4.9

if(nota>=9){
    console.log("9-10")
}else if(nota>=8 && nota<10){
    console.log("8-9")
}else if(nota>=6 && nota<8){
    console.log("6-7.9")
}else if(nota>=4 && nota<6){
    console.log("4-5.9")
}

let num1=10000000000123

num1%2==0 ? console.log("número par") : console.log("número ímpar")


let opcao=1

switch(opcao){
    case 1: 
    console.log("cadastrar")
    break
    case 2:
    console.log("listar")
    break
    case 3:
    console.log("sair")
}

let email='Joaopetry@gmail.com'

if(email){
    console.log("Bem vindo, ",email)
}else{
    console.log("informe seu email")
}

let saldo=100
let valorCompra=50

if(saldo>=valorCompra){
    console.log("compra aprovada")
}else{
    console.log("compra não aprovada")
}

let senha = "abc123";
let senhaValida = true; // valor definido previamente

if (senhaValida) {
  console.log("Senha válida");
} else {
  console.log("Senha muito curta");
}

let email2='carlos@gmail.com'
// let senha=12345678
let idade2=null

let formularioValido= email2 && senha && idade2

if(formularioValido){
    console.log("formulário válido")
}else{
    console.log("formulário inválido")
}

