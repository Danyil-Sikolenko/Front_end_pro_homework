const container = document.querySelector('#table_container');
const table = document.createElement('table');

function createMultiplicationTable(size) {
    for (let i = 0; i <= size; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j <= size; j++) {
            const cell = document.createElement('td');
            if (i === 0 && j === 0) {
                cell.textContent = '0'; // Початок з нуля
            } 
            else if (i === 0) {
                cell.textContent = j; // Верхній ряд 
                cell.classList.add('background_cell')
            } 
            else if (j === 0) {
                cell.textContent = i; // Ліва колонка
                cell.classList.add('background_cell') 
            } 
            else {
                cell.textContent = i * j; // Вміст клітинки з множенням 
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
}

createMultiplicationTable(10); 