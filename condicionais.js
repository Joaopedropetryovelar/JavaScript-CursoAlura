let idade=12

if(idade>=18){
  console.log("você já é maior de idade")
}

let media=6

// if(media>=9){
//   console.log("você está entre 10 a 9")
// }else if(media>=7 && media<9){
//   console.log("você está entre 7 e 8")
// }else if(media>=5 && media<7){
//   console.log("você está entre 5 e 6")
// }else{
//     console.log("você está abaixo de 5")
// }

//operador ternário 

idade>=18 ? console.log("maior de idade") : console.log("menor de idade")
media>=9 ? console.log("média entre 10 a 9"):
media>=7 ? console.log("média entre 7 a 8"):
media>=5 ? console.log("média entre 5 a 6"): console.log("média menor que 5")

