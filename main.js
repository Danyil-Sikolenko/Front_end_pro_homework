const mainBlock = document.querySelector('#main-block');

mainBlock.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    alert(`Клікнуто на кнопці: ${event.target.textContent}`);
  }
});
