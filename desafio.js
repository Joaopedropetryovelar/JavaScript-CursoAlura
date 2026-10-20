console.log("Boas vinda a calculadora de troco")

let valorCompra=17.80
let valorPago=20.00

if(valorPago>=valorCompra && valorCompra>0){
let troco=valorPago-valorCompra
console.log("o troco é de R$: ", troco.toFixed(2))
}else{
    console.log("algo deu errado, verifique os valores digitados")
}