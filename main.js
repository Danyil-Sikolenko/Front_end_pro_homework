let numberN = +prompt('Write your number N:');

for(let i = 1; i <= 100; i++) {
   if(i * i <= numberN){
    console.log(i)
   }
}