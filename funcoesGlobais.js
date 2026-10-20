function Saudacao(){
    console.log("Olá");
}


setTimeout(Saudacao, 2000)

let contador=0;
const id =setInterval(()=>{
    contador++;
    console.log("tempo decorrido (em segundos): ",contador);

    if(contador==10){
    clearInterval(id)}
}, 1000)
