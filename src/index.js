document.addEventListener("DOMContentLoaded", () => {
  // const tasks = document.getElementById("tasks");
  // tasks.textContent = "Create New Task";
});
document.getElementById("create-task-form").addEventListener("submit", event => {
    event.preventDefault();
  });


document.getElementById("create-task-form").addEventListener("click", event => {
  if (event.target.tagName === "li") {
    event.target.remove();
  }
});

const createTaskForm = document.getElementById("create-task-form");
const priority = document.getElementById("priority");
const description = document.getElementById("description");


function createNewTask() {
  if(description.value === ""){
    alert("Please, write something!")
  }

  else{
    let li = document.createElement("li");
    li.innerHTML = description.value;
    tasks.appendChild(li);
  }

}