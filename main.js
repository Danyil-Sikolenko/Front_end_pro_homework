const mainList = document.querySelector('#main_list');
const todoForm = document.querySelector('#todo_form');
const inputToD0 = document.querySelector('#value_todo_text');
const btnAdd = document.querySelector('#btn_add');


todoForm.addEventListener('submit', () => {
    let taskText = inputToD0.value; 
    let newText = document.createElement('li');
    newText.innerText = taskText
     mainList.append(newText)

    let btnDelete = document.createElement('button')
     btnDelete.innerText = 'Delete'
     btnDelete.classList.add('btn_delete')
     newText.append(btnDelete)

     btnDelete.addEventListener('click', function ()  {
        this.closest('li').remove();
    })

    inputToD0.value = '';

});





