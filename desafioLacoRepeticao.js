let numpares=0
let numimpares=0

for(let i=0; i<100; i++){
    if(i%2==0){
        numpares++
       
    }else if(i%2!=0){
        numimpares++
        
    }
   
}
console.log("quantidade de números pares é: ", numpares)
console.log("quantidade de números ímpares é: ", numimpares)