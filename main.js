let number1 = +prompt('Enter the first number from 0-9 ');
let number2 = +prompt('Enter the second number from 0-9 ');
let number3 = +prompt('Enter the third number from 0-9 ');

console.log(number1,number2,number3);

if(number1 === number2 && number2 === number3){
    console.log('Your nambers are the same')
}
else if (number1 === number2 ) {
    console.log('There are similar numbers1 and number2');
}
else if(number2 === number3) {
    console.log('There are similar numbers2 and number3');
}
else if(number1 === number3) {
    console.log('There are similar numbers1 and number3')
}
else{
    console.log('Your nambers are not the same');
}