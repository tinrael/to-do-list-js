const form = document.getElementById("form");
const input = document.getElementById("input");

const tasksElement = document.getElementById("tasks");

let tasks = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    saveTask();
    displayTasks();
});

function saveTask() {
    if (input.value === "") {
        alert("The input is empty.")
    } else if (tasks.some(task => task.value.toUpperCase() === input.value.toUpperCase())) {
        alert("The task already exists.");
    } else {
        tasks.push({
            value: input.value,
            checked: false,
        });
        input.value = "";
    }
}

function displayTasks() {
    tasksElement.innerHTML = "";
    tasks.forEach((task, index) => {
        tasksElement.innerHTML += `
        <div id="${index}" class="task">
            <i class="bi bi-"></i>
            <i class="bi bi-${task.checked ? 'check-circle-fill' : 'circle'}"></i>
            <p>${task.value}</p>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash"></i>
        </div>
        `
    });
}