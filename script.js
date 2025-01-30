function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") return;

    let li = document.createElement("li");
    li.className = "task";
    li.innerHTML = `<span>${taskText}</span>
                    <input type='text' value='${taskText}' />
                    <button class="edit-btn" onclick="editTask(this)">Edit</button>
                    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function editTask(button) {
    let li = button.parentElement;
    let span = li.querySelector("span");
    let input = li.querySelector("input");
    
    if (input.style.display === "none") {
        input.style.display = "inline";
        span.style.display = "none";
        button.textContent = "Save";
    } else {
        span.textContent = input.value;
        input.style.display = "none";
        span.style.display = "inline";
        button.textContent = "Edit";
    }
}

function deleteTask(button) {
    button.parentElement.remove();
}