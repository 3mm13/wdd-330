import todo from './task.js';


let taskArray = [];

document.querySelector("#submitTodo").addEventListener("click", () => {
    let li = document.createElement("li");
    let inputValue = document.getElementById("addToDo").value;
    const myTask = new Tasks(li, inputValue);
});

