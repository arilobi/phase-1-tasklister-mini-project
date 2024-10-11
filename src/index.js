// I'm making my button to work when the user clicks on it.
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');

// I'm enabling the user to write inside the input section.
let inputField = document.getElementById('inputField');

// I created a paragraph so that when the user keys in their to do list, it appears below the input
addToDoButton.addEventListener('click', (event) => {
  let paragraph = document.createElement('p');

  // To specify the value of the text being inputed.
  paragraph.innerText = inputField.value;

  // We're adding a new child node which is paragraph to an existing parent node which is the toDoContainer.
  toDoContainer.appendChild(paragraph)

  // I want the browser to delete the previous text in the input section after the user puts in the task.
  inputField.value = "";

  // Here, I want the user to be able to click off their task after completing it.
  paragraph.addEventListener('click', (event) => {
    paragraph.style.textDecoration = "line-through";
  } )
})

// The prevent default will prevent the submit button which is the "+" in my html from submitting...
document.getElementById("container").addEventListener("addToDo", event => {
  event.preventDefault();
})