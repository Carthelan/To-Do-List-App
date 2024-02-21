const form = document.getElementById('todo-form');
const completedOL = document.getElementById('completed-list');
const btn = document.getElementById("submitBtn");
const todoOl = document.getElementById('to-do-list');
const todoOLListen = document.querySelectorAll("to-do-list li");


/*"read" the text in the to-do list input
    Location of the form
    script on button 
        take text and add to innerHTML of to-do-list 
Make To-Do tasks cross out and move to "Completed Tasks" on click
    if click is on to-do-list <li> item, apply <s></s> to innerHTML of <li>. 
    Delete from to-do-list. 
    move to innerHTML of completed task

    */ 

// Function to add item to to-do list
function addTodoItem() {
    let input = document.getElementById('todo-input');
    let inputValue = input.value
    let newListItem = document.createElement('li');
    let newText = document.createTextNode(`${inputValue}`)
    newListItem.appendChild(newText)
    todoOl.appendChild(newListItem)
    input.value = "";
}

// Function to move item to completed list
function completeTodoItem(event) {
    let clickedListIem = event.target;
    todoOl.removeChild(clickedListIem);
    completedOL.appendChild(clickedListIem);
}

//Delete finished Tasks
function deleteItem(event) {
    let clickedListIem = event.target;
    completedOL.removeChild(clickedListIem);
}

// Event listener for submit button
btn.addEventListener("click", addTodoItem);

// Event listener for strike out
todoOl.addEventListener('click', completeTodoItem);

// Event listener for strike out
completedOL.addEventListener('click', deleteItem);
