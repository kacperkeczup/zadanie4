/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function generateId() {\n    return Math.random().toString(36).substr(2, 9);\n}\n\nfunction createItem(id, title, description, isExpanded) {\n    const item = document.createElement('div');\n    item.className = 'item';\n\n    const titleElement = document.createElement('div');\n    titleElement.className = 'title';\n    titleElement.textContent = title;\n\n    const descriptionElement = document.createElement('div');\n    descriptionElement.className = 'description';\n    descriptionElement.textContent = description;\n\n    item.appendChild(titleElement);\n    item.appendChild(descriptionElement);\n\n    if (!isExpanded) {\n        descriptionElement.style.display = 'none';\n    }\n\n    titleElement.addEventListener('click', () => {\n        if (descriptionElement.style.display === 'none') {\n            descriptionElement.style.display = 'block';\n        } else {\n            descriptionElement.style.display = 'none';\n        }\n    });\n\n    const deleteButton = document.createElement('button');\n    deleteButton.textContent = 'Usuń';\n    deleteButton.addEventListener('click', () => {\n        item.remove();\n        saveItemsToLocalStorage();\n    });\n\n    const editButton = document.createElement('button');\n    editButton.textContent = 'Edytuj';\n    editButton.addEventListener('click', () => {\n        const newTitle = prompt('Wprowadź nowy tytuł:', title);\n        const newDescription = prompt('Wprowadź nowy opis:', description);\n\n        if (newTitle && newDescription) {\n            titleElement.textContent = newTitle;\n            descriptionElement.textContent = newDescription;\n            saveItemsToLocalStorage();\n        }\n    });\n\n    item.appendChild(deleteButton);\n    item.appendChild(editButton);\n\n    return item;\n}\n\nfunction saveItemsToLocalStorage() {\n    const items = Array.from(document.querySelectorAll('.item'));\n    const savedItems = items.map(item => ({\n        id: item.dataset.id,\n        title: item.querySelector('.title').textContent,\n        description: item.querySelector('.description').textContent,\n        isExpanded: item.querySelector('.description').style.display !== 'none'\n    }));\n    localStorage.setItem('items', JSON.stringify(savedItems));\n}\n\nfunction loadItemsFromLocalStorage() {\n    const savedItems = localStorage.getItem('items');\n    if (savedItems) {\n        const items = JSON.parse(savedItems);\n        items.forEach(item => {\n            const newItem = createItem(item.id, item.title, item.description, item.isExpanded);\n            newItem.dataset.id = item.id;\n            document.getElementById('itemsContainer').appendChild(newItem);\n        });\n    }\n}\n\ndocument.getElementById('addItemForm').addEventListener('submit', event => {\n    event.preventDefault();\n\n    const titleInput = document.getElementById('title');\n    const descriptionInput = document.getElementById('description');\n\n    const title = titleInput.value;\n    const description = descriptionInput.value;\n\n    if (title && description) {\n        const id = generateId();\n        const newItem = createItem(id, title, description, true);\n        newItem.dataset.id = id;\n        document.getElementById('itemsContainer').appendChild(newItem);\n\n        titleInput.value = '';\n        descriptionInput.value = '';\n\n        saveItemsToLocalStorage();\n    }\n});\n\nloadItemsFromLocalStorage();\n\n//# sourceURL=webpack://hello-js/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;