// function f(x){
//     return x +2
// }

// console.log(f(2));

// f()

// function saudacao(nome){//nome é um parametro da função saudação
//     console.log("Olá, seja bem vindo, " ,nome);
// }

// saudacao("joão")//argumento


function melhorTime(time){
    console.log("O melhor time é: ", time);
}
melhorTime("Grêmio")


function minhaMedia(n1,n2,n3){
    return (n1+n2+n3)/3;
}

const media= minhaMedia(8,10,8);// tem que criar uma variavel para a função que apresenta o return
console.log("Minha nota com o bônus é: "+ media.toFixed(2))


function meuCachorro(nomeCachorro){
    console.log("o nome do meu cachorro é : ", nomeCachorro)
}
meuCachorro("pingo")