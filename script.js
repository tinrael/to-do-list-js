const form = document.getElementById("form");
const input = document.getElementById("input");

const tasksElement = document.getElementById("tasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let taskIdToEdit = -1;

displayTasks();

form.addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
});

tasksElement.addEventListener("click", function(event) {
    if (event.target.parentNode.className === "task") {
        const taskId = Number(event.target.parentNode.id);
        console.log(taskId);
    }
});

function addTask() {
    if (input.value === "") {
        alert("The input is empty.")
    } else if (tasks.some(task => task.value.toLocaleUpperCase() === input.value.toLocaleUpperCase())) {
        alert("The task already exists.");
    } else {
        if (taskIdToEdit >= 0) {
            tasks = tasks.map((task, index) =>
                index === taskIdToEdit ? { ...task, value: input.value } : task
            );
            taskIdToEdit = -1;
        } else {
            tasks.push({
                value: input.value,
                checked: false,
            });
        }
        input.value = "";
    }
}

function displayTasks() {
    tasksElement.innerHTML = tasks.map((task, index) =>
        `<div id="${index}" class="task">
            <i class="bi bi-${task.checked ? 'check-circle-fill' : 'circle'}"></i>
            <p class="${task.checked ? 'checked' : ''}">${task.value}</p>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash"></i>
        </div>`
    ).join("");
}

function toggleTask(taskId) {
    tasks = tasks.map((task, index) =>
        index === taskId ? { ...task, checked: !task.checked } : task
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function editTask(taskId) {
    input.value = tasks[taskId].value;
    taskIdToEdit = taskId;
}

function deleteTask(taskId) {
    tasks = tasks.filter((task, index) => index !== taskId);
    taskIdToEdit = -1;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}