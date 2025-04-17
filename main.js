const startBtn = document.querySelector('#start');
const counter = document.querySelector('#counter');
const reset = document.querySelector('#reset');

let time = 85;
let idInterval

function renderTime(seconds) {
    const minutes = Math.floor(seconds / 60); 
    const second = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;  
};

function updateTimerInHTML(seconds) {
    counter.innerHTML = renderTime(seconds); 
}

updateTimerInHTML(time);


startBtn.addEventListener('click', () => {
    idInterval = setInterval(() => {
        if (time < 0) {
            clearInterval(idInterval)
            return
        }
        else {
            updateTimerInHTML(time--);
        }
    }, 1000)
});


reset.addEventListener('click', () => {
    time = 85
    counter.innerHTML = renderTime(time);
    clearInterval(idInterval); 

});