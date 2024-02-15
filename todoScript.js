const todoForm = document.getElementById('todoForm');
        const todoItems = document.getElementById('todoItems');

        todoForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const nameInput = document.getElementById('nameInput');
            const descriptionInput = document.getElementById('descriptionInput');

            const name = nameInput.value();
            const description = descriptionInput.value();

            if (!name || !description) {
                alert('Please enter both name and description.');
                return;
            }

            const todoItem = document.createElement('li');
            todoItem.classList.add('todo-item');
            todoItem.innerHTML = `
                <input type="checkbox" id="${name}" name="todo" value="${name}">
                <label for="${name}"><strong>${name}</strong>: ${description}</label>
            `;
            todoItems.appendChild(todoItem);

            nameInput.value = '';
            descriptionInput.value = '';
        });