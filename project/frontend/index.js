
import {loadToDo , createToDo , deleteToDo , } from './api.js';
import {render , } from './render.js'

const list = document.querySelector('#list');
const toDOInput = document.querySelector('#todo_input');
const addToDo = document.querySelector('#add_todo');

async function renderToDo() {
  const data = await loadToDo(); 
  render(data); 
}

renderToDo();

addToDo.addEventListener('click' , async () => {
  const valueInput = toDOInput.value.trim();

  if(valueInput === '') {
    return;
  }
    const newTodo = await createToDo(valueInput); 

  if(newTodo){
    const updatedTodos = await loadToDo(); 
    render(updatedTodos); 
  }
  toDOInput.value = ''
});


document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('delete_btn')) {
      const id = event.target.dataset.id; 

      await deleteToDo(id);

      const updatedTodos = await loadToDo(); 
      render(updatedTodos); 
  }
});



