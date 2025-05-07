import { URL_TODO ,  } from './config.js';

export async function loadToDo () {
    try{
        const response = await fetch(URL_TODO);

        if (!response.ok) {
            throw new Error('Failed to load posts!');
        }

        const data = await response.json();
        return data
    }
    catch(err){
        console.log(err)
    }
  }

  
  export async function createToDo(title) {
    try {
        const response = await fetch(URL_TODO, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, completed: false })
        });

        if (!response.ok) {
            throw new Error(`Помилка ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (err) {
        console.error('Помилка додавання TODO:', err.message);
    }
}


export async function deleteToDo (id) {
    const URL_FOUND_ID = `http://localhost:3000/todos/${id}` 
   
    try{
        const response = await fetch(URL_FOUND_ID , {
            method : 'DELETE'
        })
        if(!response.ok) {
            throw new Error (`Помилка ${response.status}: ${response.statusText}`)
        }
    }
    catch(err){
        console.error(err)
    }
}











