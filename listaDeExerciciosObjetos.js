const informacoesMinha={
    nome:"João Petry",
    idade:17,
    profissao:"estudante"
}

// console.log("meu nome é: ", informacoesMinha['nome'])

// informacoesMinha.idade=18

// console.log("minha nova idade é: ", informacoesMinha['idade'])

// informacoesMinha.cidade= "balneario rincão"

// console.log(informacoesMinha)

function apresentar(p){
    return "Olá, sou o "+ p.nome+ ", tenho "+ p.idade+ " anos e sou "+ p.profissao;
}
console.log(apresentar(informacoesMinha))

const pessoas=[
    {nome: "ana", idade: 17},
    {nome:"carlos", idade:18},
    {nome:"felipe", idade:20}
]

for(let p of pessoas){
    if(p.idade>=18){
        console.log(p.nome, ' é maior de idade')
    }
}

const usuario={
    nome:"joão",
    saudacao: function(){
        console.log("meu nome é: ", usuario.nome)
    }
};
usuario.saudacao();

for(const entradas in informacoesMinha){
    console.log(entradas, ": ", informacoesMinha[entradas])
}

const itens={
    nome: "bola",
    preco:100,
    quantidade:6
}

const valorTotal= itens.preco*itens.quantidade;

console.log(valorTotal)