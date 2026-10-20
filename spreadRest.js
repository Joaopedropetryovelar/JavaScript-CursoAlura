const camila1={
    nome:'camila',
    idade:19,
    profissao:'engenheira'
}

const camila2={...camila1}

camila1.profissao="desenvolvedora Sênior"
camila1.possuiCnh=true

camila2.idade=20

console.log(camila1)
console.log(camila2)

const {nome, ...Restante} = camila1

console.log(nome)
console.log(Restante)