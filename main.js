let numbers = +prompt('Write your number :');
let i = 2;

    for( i ; i * i <= numbers; i++) {
        if(numbers % i === 0) {
            console.log(`Не просте число ${numbers}`)
            break
        }
    }

    if(i * i > numbers && numbers > 1) {
        console.log(`Просте число ${numbers}`);
    }
    