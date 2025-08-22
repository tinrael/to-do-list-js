const form = document.getElementById("form");
const input = document.getElementById("input");

let tasks = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();
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
    }
}