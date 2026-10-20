const frutas=["maça","banana","uva","abacaxi"]

// frutas.push('laranja')
// frutas.push('maça')

frutas.splice(1,1)
console.log(frutas)
// console.log(frutas.length)

//última da lista
// console.log(frutas[frutas.length-1])

// for(let i=0; i<frutas.length;i++){
//     console.log(frutas[i])
//     console.log("posição do array: ",i)
// }

frutas.forEach((valor,indice)=>{
    console.log("indice:",indice,"valor:",valor)
})

for(const fruta of frutas){
    console.log("A fruta da vez é: ",fruta)
}