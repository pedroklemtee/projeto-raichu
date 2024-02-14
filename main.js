document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    let taskCounter = 0;

    addTaskBtn.addEventListener("click", function () {
        if (taskCounter >= 6) {
            // Display a message or take appropriate action when the limit is reached
            alert("Você pode adicionar no maximo 6 tarefas.");
            return;
        }

        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create a new task item
            const taskItem = document.createElement("div");
            taskItem.classList.add("task-item");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="remove-task-btn"><img src="https://cdn-icons-png.flaticon.com/512/54/54324.png" style="width:15px; margin-left:0px; margin-right:0px; flex-direction: row;"></button>
            `;

            // Add the task item to the list
            taskList.appendChild(taskItem);

            // Clear the input field
            taskInput.value = "";

            // Increment the task counter
            taskCounter++;

            // Add event listener to the remove button
            const removeTaskBtn = taskItem.querySelector(".remove-task-btn");
            removeTaskBtn.addEventListener("click", function () {
                // Apply a smooth fade-out effect
                taskItem.style.opacity = "0";
                setTimeout(() => {
                    taskList.removeChild(taskItem);
                    // Decrement the task counter when a task is removed
                    taskCounter--;
                }, 300); // Adjust the duration as needed
            });
        }
    });
});
