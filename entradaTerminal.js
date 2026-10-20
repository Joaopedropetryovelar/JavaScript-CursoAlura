const { NOMEM } = require("dns/promises")
const readline = require("readline")    

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question("qual é o seu nome?",function(nome){
    console.log("seja bem-vindo(a) ao nosso sistema",nome)

    leitor.question("qual é a sua idade?",function(idade){
        if(idade>=18){
            console.log("você é maior de idade")
        }
        
        leitor.question("Qual é o seu time do coração?", function(time){
            if(time.toLowerCase() === "gremio"){
                console.log("Parabéns, você acertou a pergunta")
            }else{
                console.log("Você errou a pergunta, é o Gremio")
            }
            leitor.close()
        })
    })
})
