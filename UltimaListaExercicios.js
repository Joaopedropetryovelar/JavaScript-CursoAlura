console.log("EXERCÍCIO 1:")
const pessoas={
    nome: "João",
    idade: 30,
    email:"joao@gmail.com"
};

const {nome, idade, email} = pessoas;
console.log(nome, idade, email ,"\n");

console.log("EXERCÍCIO 2:")
const linguagens= ["JavaScript", "Python", "Java"]
const [ling1, ling2, ling3] = linguagens;
console.log(ling1, ling2, ling3,"\n");

console.log("EXERCÍCIO 3:")
function somarTudo(...numeros){
    let soma=0;
    for(let i=0; i<numeros.length; i++){
        soma += numeros[i];
    }
    return soma;
}
console.log(somarTudo(1,2,3,4,5),"\n");

console.log("EXERCÍCIO 4:")
const frutas= ["maçã", "banana", "laranja"]
const maisFrutas=["uva","abacaxi"]
const todasFrutas=[...frutas, ...maisFrutas]

console.log(todasFrutas,"\n");

console.log("EXERCÍCIO 5:")