const form = document.getElementById("form");
const input = document.getElementById("input");

const tasksElement = document.getElementById("tasks");

let tasks = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    saveTask();
    displayTasks();
});

tasksElement.addEventListener("click", function(event) {
    if (event.target.parentNode.className === "task") {
        const taskId = Number(event.target.parentNode.id);
        console.log(taskId);
    }
});

function saveTask() {
    if (input.value === "") {
        alert("The input is empty.")
    } else if (tasks.some(task => task.value.toLocaleUpperCase() === input.value.toLocaleUpperCase())) {
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
    tasksElement.innerHTML = tasks.map((task, index) =>
        `<div id="${index}" class="task">
            <i class="bi bi-"></i>
            <i class="bi bi-${task.checked ? 'check-circle-fill' : 'circle'}"></i>
            <p>${task.value}</p>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash"></i>
        </div>`
    ).join("");
}

function toggleTask(taskId) {
    tasks = tasks.map((task, index) =>
        index === taskId ? { ...task, checked: !task.checked } : task
    );
    displayTasks();
}