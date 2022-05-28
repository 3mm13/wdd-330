var tasks = [];
const str = localStorage.getItem("tasks");
var showActive = true;
var showCompleted = true;

if (str) {
    tasks = JSON.parse(str);
    drawList();
}


document.querySelector("#submitTodo").addEventListener("click", () => {
    addTask();
});

function addTask() {
    const elem = document.getElementById("addToDo");
    let inputValue = elem.value;
    tasks.push({
        id: new Date().getTime(),
        content: inputValue,
        isComplete: false
    });
    elem.value = "";
    drawList();
}

function drawList() {
    const ul = document.getElementById("todoList");
    ul.innerHTML = "";

    tasks.forEach((task) => {
        let li = document.createElement("li");
        if ((task.isComplete && showCompleted) || (!task.isComplete && showActive)) {
            if (task.isComplete) {
                li.innerHTML = `<input type='checkbox' onchange="completeTask('${task.id}')" checked>
                            <span for="todo">${task.content}</span>
                            <button id="deleteButton" onclick="deleteItem('${task.id}')">&times;</button>`
            }
            else {
                li.innerHTML = `<input type='checkbox' onchange="completeTask('${task.id}')">
                        <span for="todo">${task.content}</span>
                        <button id="deleteButton" onclick="deleteItem('${task.id}')">&times;</button>`
            }
        }


        ul.appendChild(li);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteItem(id) {
    tasks = tasks.filter(task => task.id != id);
    drawList();
}

function completeTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks[i].isComplete = !tasks[i].isComplete;
            drawList();
            return;
        }
    }
}

function filterAll() {
    showActive = true;
    showCompleted = true;
    drawList();
}

function filterActive() {
    showActive = true;
    showCompleted = false;
    drawList();
}

function filterCompleted() {
    showActive = false;
    showCompleted = true;
    drawList();
}