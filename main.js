const btnStart = document.querySelector('#start');
const btnEnter = document.querySelector('#enter');
let valuesPrompt

btnStart.addEventListener('click', () =>{
 valuesPrompt = prompt('Write link');
});

btnEnter.addEventListener('click', () => {
    window.location.href = valuesPrompt
    // window.open(valuesPrompt, '_blank')
});

