const numeros=[1,2,3,4,5,6,7,8,9,10]

// for(const numero of numeros){
//     console.log("O número da vez é: ",numero)
// }

// numeros.forEach((valor,indice)=>{
//     console.log("indice:",indice,"valor:",valor)
// })

// const numerosPares=numeros.filter((numero)=>{
//     return numero%2===0
// })

// const numerosImpares=numeros.filter((numero)=>{
//     return numero%2!==0
// })
// console.log(numerosPares)
// console.log(numerosImpares)

const numerosDobrados=numeros.map((numero)=>{
    return numero*2
})
console.log(numerosDobrados)