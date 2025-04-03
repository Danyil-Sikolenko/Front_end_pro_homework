const inputToDo = document.querySelector('.js--form__input')
const btnAdd = document.querySelector('.form__btn');
const form = document.querySelector('.js--form');
const mainList = document.querySelector('.js--todos-wrapper');

const saveValue = JSON.parse(localStorage.getItem('tasks')) || [];

function displayTasks() {
    mainList.innerHTML = ''; 

    saveValue.forEach(task => {
        const listItem = document.createElement('li');
        listItem.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.checked;

        const newText = document.createElement('span');
        newText.classList.add('todo-item__description');
        newText.textContent = task.text;

        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Видалити';
        btnDelete.classList.add('todo-item__delete');

        listItem.append(checkbox, newText, btnDelete);
        mainList.append(listItem);

        if (task.checked) {
            newText.classList.add('todo-item--checked'); 
            btnDelete.classList.add('todo-item--checked'); 
        }
        
        btnDelete.addEventListener('click', () => {
            listItem.remove();

            const index = saveValue.findIndex(item => item.text === task.text);
            if (index !== -1) {
                saveValue.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(saveValue));
            }
        });

        checkbox.addEventListener('click', () => {
            newText.classList.toggle('todo-item--checked');
            btnDelete.classList.toggle('todo-item--checked');
            updateTaskInLocalStorage(task.text, checkbox.checked);
        });

    });
}

document.addEventListener('DOMContentLoaded', displayTasks);

btnAdd.addEventListener('click', () => {
    let taskText = inputToDo.value.trim();

    if (taskText === '') {
        return;
    }

    const task = {
        text: taskText,
        checked: false
    };

    saveValue.push(task);
    localStorage.setItem('tasks', JSON.stringify(saveValue));

    displayTasks();

    inputToDo.value = ''; 
});


function updateTaskInLocalStorage(taskText, isChecked) {
    const index = saveValue.findIndex(task => task.text === taskText);
    if (index !== -1) {
        saveValue[index].checked = isChecked; 
        localStorage.setItem('tasks', JSON.stringify(saveValue)); 
    }
}














