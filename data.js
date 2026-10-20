const agora= new Date()
console.log(agora)

console.log("ano: ", agora.getFullYear())
console.log("mês: ", agora.getMonth())
console.log("dia: ", agora.getDate())
console.log("Hora: ", agora.getHours())
console.log("minutos: ", agora.getMinutes())

const dataNascimento=new Date('2008-10-17:00:00.000z')

console.log(dataNascimento)

console.log("data formadata(BR): ", dataNascimento.toLocaleDateString('pt-BR'))