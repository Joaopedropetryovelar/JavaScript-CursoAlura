// for(let i=1; i<=10; i++){
//     console.log("o valor de i é: ", i)
// }

let total=0

for(let i=1; i<=100; i++){
    total+=i
}
console.log("o total da soma é: ", total)


// const num=10

// for(let i=1; i<=10;i++){
//     console.log(num, "X", i, "=", num*i)
// }


// let num=10

// while(num>=0){
//     num--

// }
// console.log("contagem finalizada")

let numeroDigitado;
let quantidade = 0;
let repeticoes = 0;

do {
  // simulação manual de entrada
  if (repeticoes === 0) {
    numeroDigitado = 5;
  } else if (repeticoes === 1) {
    numeroDigitado = 10;
  } else {
    numeroDigitado = 0;
  }

  if (numeroDigitado !== 0) {
    quantidade++;
  }

  repeticoes++;
} while (numeroDigitado !== 0)

console.log("Total de números digitados: " + quantidade)

let certo=2

for(let tentativas=1; tentativas<=3; tentativas++){
let numeroDigitado;
 if(tentativas===1){
    numeroDigitado=1;
 }else if(tentativas===2){
    numeroDigitado=2;
 }else if(tentativas===3){
    numeroDigitado=3;
 }

 if(numeroDigitado===certo){
    console.log("parabéns vc acertou o número correto!!")
 }else{
    console.log("tente novamente")
 }
}
 


let anoNascimento=2008
let anoAtual=2026

for(let ano=anoNascimento; ano<=anoAtual; ano++){
    console.log("no ano de ", ano, " eu tinha", (ano-anoNascimento), " anos")
}

// let numtotal=0;
// for(let i=1; i<=100;i++){
//     if(i%3==0){
//         numtotal+=1
//     }
// }
// console.log("o número total de número divisíveis por 3 é: ", numtotal)


// for(let i=1;i<=50;i++){
//     if(i%2==0){
//         console.log("os números pares são: ", i)
//     }
// }

let opcao;
let passo = 1;

do {
  // simulação da escolha do usuário
  if (passo === 0) {
    opcao = 1;
  } else if (passo === 1) {
    opcao = 2;
  } else {
    opcao = 3;
  }

  if (opcao === 1) {
    console.log("Ver saldo");
  } else if (opcao === 2) {
    console.log("Fazer depósito");
  } else if (opcao === 3) {
    console.log("Sair");
  }

  passo++;
} while (opcao !== 3);