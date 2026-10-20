//HOF -> Higher-Order function === função que recebe outra função como parametro
 function Calcular(numero1,numero2,operacao){
    return operacao(numero1,numero2);
 }

 function Soma(num1,num2){
    return num1+num2;
 }

 function divisao(num1,num2){
    return num1/num2;
 }

 const resultadoCalculo=Calcular(10,10,divisao);
 console.log("O resultado é :",resultadoCalculo);

 