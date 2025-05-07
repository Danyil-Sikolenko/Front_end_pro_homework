
export function render(data) {
    let todos = []
    if (Array.isArray(data)) {
        todos = data; 
    } else {
        todos = [data]; 
    }
    console.log(todos)
    
     list.innerHTML = "";

  todos.forEach(el => {
    const li = document.createElement('li');
    li.className = 'items'
    li.innerHTML = `<span>${el.title}</span>
    ${createCheckbox(el.completed)}
    <br>
    <button class ='delete_btn' data-id='${el.id}'>Delete</button>`; 
    list.appendChild(li);
  });
}


export function createCheckbox(isCompleted) {
    return `<input type='checkbox' ${isCompleted ? "checked" : ""} />`;
}

export function createToDoInput(valueInput, list) {
    const li = document.createElement('li');
    li.className = 'items';
    li.innerHTML = `<span>${valueInput}</span>
    <input type='checkbox' class ='todo_checkbox'><br>
    <button class='delete_btn'>Delete</button>`;
    list.prepend(li);
}



