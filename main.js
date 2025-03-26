const form = document.querySelector('#formRegister');
const errorName = document.querySelector('#error_name');
const errorMessage = document.querySelector('#error_message');
const errorNumber = document.querySelector('#error_number');
const errorEmail = document.querySelector('#error_email');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formValues = new FormData (form);

    const userName = formValues.get('userName');
    const message = formValues.get('message');
    const phoneNumber = formValues.get('phoneNumber');
    const userEmail = formValues.get('userEmail');
    console.log(userName , message , phoneNumber , userEmail );


    if (!/^[A-Za-zА-Яа-яЇїЄєІіЁё\s]+$/.test(userName.trim())) { //Перевірка на некоректне імя якщо імя не вписано або має некоректні символи 
        console.warn('Error');
        errorName.textContent = '!';
        errorName.classList.add('errore')
    } 
    else{
        errorName.textContent = '';
    }

    if(message.length < 5 ) { //Перевірка на кількість символів у тексті 
        console.warn('Error')
        errorMessage.textContent = '!';
        errorMessage.classList.add('errore')
    }

    if (!/^\+380\d{9}$/.test(phoneNumber.replace(/\s+/g, ""))) { //Перевірка на те що номер повинен починатися на +380 та кількість до 9 символів а також якщо користувач впише пробіл це не зарахуеться як помилка 
        console.warn('Error');
        errorNumber.textContent = '!';
        errorNumber.classList.add('errore')
    }


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail.trim())) { //Перевірка на те щоб email. мав @ та крапку на кінці та не мав пробілів у середені
        console.warn('Error');
        errorEmail.textContent = '!';
        errorEmail.classList.add('errore')
    }
    
} );