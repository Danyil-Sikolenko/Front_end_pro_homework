let number1 = prompt('Write the first number');

let number2 = prompt('Write the second number');

let number3 = prompt('Write the third number');


console.log(number1);
console.log(number2);
console.log(number3);

let allNumbers = `${number3} ${number2} ${number1}` ;

console.log(allNumbers);


////////////////////////////////////////////////////////////////////////
let number = 10369;
let numberString = number.toString();
let compiler = numberString.split('').join(' ');

console.log(compiler);