function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

function createItem(id, title, description, isExpanded) {
    const item = document.createElement('div');
    item.className = 'item';

    const titleElement = document.createElement('div');
    titleElement.className = 'title';
    titleElement.textContent = title;

    const descriptionElement = document.createElement('div');
    descriptionElement.className = 'description';
    descriptionElement.textContent = description;

    item.appendChild(titleElement);
    item.appendChild(descriptionElement);

    if (!isExpanded) {
        descriptionElement.style.display = 'none';
    }

    titleElement.addEventListener('click', () => {
        if (descriptionElement.style.display === 'none') {
            descriptionElement.style.display = 'block';
        } else {
            descriptionElement.style.display = 'none';
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Usuń';
    deleteButton.addEventListener('click', () => {
        item.remove();
        saveItemsToLocalStorage();
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edytuj';
    editButton.addEventListener('click', () => {
        const newTitle = prompt('Wprowadź nowy tytuł:', title);
        const newDescription = prompt('Wprowadź nowy opis:', description);

        if (newTitle && newDescription) {
            titleElement.textContent = newTitle;
            descriptionElement.textContent = newDescription;
            saveItemsToLocalStorage();
        }
    });

    item.appendChild(deleteButton);
    item.appendChild(editButton);

    return item;
}

function saveItemsToLocalStorage() {
    const items = Array.from(document.querySelectorAll('.item'));
    const savedItems = items.map(item => ({
        id: item.dataset.id,
        title: item.querySelector('.title').textContent,
        description: item.querySelector('.description').textContent,
        isExpanded: item.querySelector('.description').style.display !== 'none'
    }));
    localStorage.setItem('items', JSON.stringify(savedItems));
}

function loadItemsFromLocalStorage() {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
        const items = JSON.parse(savedItems);
        items.forEach(item => {
            const newItem = createItem(item.id, item.title, item.description, item.isExpanded);
            newItem.dataset.id = item.id;
            document.getElementById('itemsContainer').appendChild(newItem);
        });
    }
}

document.getElementById('addItemForm').addEventListener('submit', event => {
    event.preventDefault();

    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');

    const title = titleInput.value;
    const description = descriptionInput.value;

    if (title && description) {
        const id = generateId();
        const newItem = createItem(id, title, description, true);
        newItem.dataset.id = id;
        document.getElementById('itemsContainer').appendChild(newItem);

        titleInput.value = '';
        descriptionInput.value = '';

        saveItemsToLocalStorage();
    }
});

loadItemsFromLocalStorage();