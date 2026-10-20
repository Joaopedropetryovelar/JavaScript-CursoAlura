const pessoa={
    nome:"João",
    idade:18,
    profissao:"estudante"
}

// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa.profissao)

const {nome,idade} = pessoa

console.log(pessoa.nome)
console.log(pessoa.idade)

function saudacao({nome,idade,profissao}){
    if(idade>=18) {
        console.log(`Olá ${nome}, você tem ${idade} anos e é ${profissao}`)
    }  else{
        console.log("vc ainda é de menor!")
    }
}

saudacao(pessoa)