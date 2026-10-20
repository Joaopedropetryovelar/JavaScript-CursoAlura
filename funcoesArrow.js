// function Saudacao(nome){
//     console.log("Olá, ",nome);
// }

// const Saudacao= (nome) =>{
//     console.log("Olá ", nome)
// }

const Saudacao= nome=> console.log("Olá, ",nome);


Saudacao("joão");

// const numDobrado= (numero) =>{
//     return numero*2;
// }

const numDobrado= numero=> numero *2;

const numeroDobrado=numDobrado(100);
console.log(numeroDobrado);


function Pessoa(nome) { 

this.nome = nome; 

 

setTimeout(() => { 

console.log(this.nome); // Arrow function captura o this corretamente 

}, 1000); 

} 

 

new Pessoa('Carlos'); // Resultado: Carlos


function Pessoa(nome, trabalho){
    this.nome=nome;
    this.trabalho=trabalho;
}

const p1=new Pessoa("joão");
const t1=new Pessoa("joão", "desenvolvedor de software");
console.log(t1);