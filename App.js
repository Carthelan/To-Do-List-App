//const form = document.getElementsByClassName('todo-form');
const form = document.getElementById('todo-form');
const completedOL = document.getElementById('completed-list');
const btn = document.getElementById("submitBtn");
//const input = document.getElementById('todo-input');
const todoOl = document.getElementById('to-do-list');
//let input = document.getElementById('alwayshere');

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
    //let input = document.getElementById('alwayshere');
    //let todoOL = document.getElementById('to-do-list');
    //let inputValue = input.value
    let inputValue = input.value
    //todoOl.innerHTML = `<li>${inputValue}<li>`
    let newListItem = document.createElement('li');
    let newText = document.createTextNode(`${inputValue}`)
    newListItem.appendChild(newText)
    document.body.insertBefore(newListItem, todoOl)
    console.log(`Input Value: ${inputValue}`);
}

// Function to move item to completed list
function completeTodoItem(todolistItem) {

}

// Event listener for 
btn.addEventListener("click", addTodoItem);
//form.addEventListener("submit", addTodoItem(input.value));
