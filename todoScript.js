const todoForm = document.querySelector('#todoForm');
const todoItems = document.querySelector('#todoItems');
let idk = 0;


todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const nameInput = document.querySelector('#nameInput');
    const descriptionInput = document.querySelector('#descriptionInput');

    const name = nameInput.value;
    const description = descriptionInput.value;

    if (!name || !description) {
        alert('Please enter both name and description.');
        return;
    }

    const todoItem = document.createElement('div');
    let a=`${idk}`;
    todoItem.innerHTML = `
                <div class="alert alert-secondary" id="${idk}" onclick="deleteit('${idk++}')"><strong>${name} : ${description} 🗑️</strong> </div>
            `;
    todoItems.appendChild(todoItem);

    nameInput.value = '';
    descriptionInput.value = '';
});
function deleteit(id) {
    let ele = document.getElementById(id);
    ele.remove();
}