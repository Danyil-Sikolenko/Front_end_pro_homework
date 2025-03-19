const imagesRandomID = document.querySelector('#images_random');
const buttonRandom = document.querySelector('#button_random');

const images = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg',
    '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'
];


buttonRandom.addEventListener('click', () => {
let randomIndexNumber = Math.floor(Math.random() * images.length)

imagesRandomID.src = `img/${images[randomIndexNumber]}`

});