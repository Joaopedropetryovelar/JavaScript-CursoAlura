const frutas=["banana", "maçã", "laranja", "uva", "abacaxi"]

const maisFrutas=["manga", "pera", "kiwi"]

const clone=[... frutas]

const todasAsFrutas=[...frutas, ...maisFrutas]

const [primeira,segunda, ...restante] = todasAsFrutas

frutas.push("melancia")

console.log(frutas)
console.log(maisFrutas)
console.log(todasAsFrutas)
console.log(clone)
console.log(primeira)
console.log(segunda)
console.log(restante)