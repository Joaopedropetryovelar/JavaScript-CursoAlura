const pessoa={
    nome:"joão",
    idade:17,
    pets:["pingo"],
    nacionalidade:"Brasileiro"
}

// for(const chave in pessoa){
//     console.log("chave: ", chave)
//     console.log(pessoa[chave])
// }

const chaves=Object.keys(pessoa)
const valores=Object.values(pessoa)
const entradas=Object.entries(pessoa)

console.log(chaves)
console.log(valores)
console.log(entradas)
