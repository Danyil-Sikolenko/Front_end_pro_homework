let birthDay = +prompt('Your year of birth');
let city = prompt('Your city');
let favoriteSport = prompt('Your favorite sport'); 


if (birthDay === 0 || isNaN(birthDay)) {
    console.log('Шкода, що Ви не захотіли ввести свій(ю) дату народження.');
}
else{
    birthDay = birthDay
    let ourYear = 2025;
    let userAge = ourYear - birthDay
    console.log(userAge);
}


if(city === null || city === ''){
    console.log('Шкода, що Ви не захотіли ввести свіє місто');
}
else if(city === 'Kyiv') {
    console.log('You live in the capital of Ukraine');
}
else if(city === 'Washington') {
    console.log('You live in the capital of USA');
}
else if(city === 'London') {
    console.log('You live in the capital of Great Britain');
}
else {
    console.log(`You live in ${city} `);
}



if(favoriteSport === '' || favoriteSport === null) {
    console.log('Шкода, що Ви не захотіли ввести свій вид спорту')
}

else if(favoriteSport === 'Boxing') {
    console.log('Cool! Do you want to become like Oleksandr Usyk ?');
}
else if(favoriteSport === 'Football') {
    console.log('Cool! Do you want to become like Leoneli Messi ?');
} 
else if(favoriteSport === 'Basketball') {
    console.log('Cool! Do you want to become like Michael Jordan?');
} 







