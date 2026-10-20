const pessoas={
    nome:"ana",
    idade:18,
    temCnh:true
}

//na direita é a chave e na esquerta é o valor

pessoas.sobrenome= 'Petry'

console.log("Nome: ", pessoas.nome)
console.log("Sobrenome: ", pessoas.sobrenome)

const livros={
    titulo:"As armas da persuasão",
    numPaginas:245, 
}

livros.publicado=true

livros.idiomas=[
    "Português","inglês", "espanhol"
]
livros.idiomas.push("mandarim")

console.log("titulo: ", livros.titulo)
console.log("Número de páginas: ", livros.numPaginas)
console.log("O livro foi publicado: ", livros.publicado)
console.log("idiomas disponiveis: ", livros.idiomas)

// delete livros.numPaginas

// console.log(livros)
console.log("titulo: ", livros['titulo'])

const autor={
    nome:"João",
    idade:17,
    nacionalidade:"Brasileiro",
    livros:[livros]
}

livros.autor=autor

console.log(autor["nacionalidade"])
