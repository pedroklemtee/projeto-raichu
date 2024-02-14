document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    let taskCounter = 0;

    addTaskBtn.addEventListener("click", function () {
        if (taskCounter >= 6) {
            alert("Você pode adicionar no maximo 6 tarefas.");
            return;
        }

        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const taskItem = document.createElement("div");
            taskItem.classList.add("task-item");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="remove-task-btn"><img src="https://cdn-icons-png.flaticon.com/512/54/54324.png" style="width:15px; margin-left:0px; margin-right:0px; flex-direction: row;"></button>
            `;

            taskList.appendChild(taskItem);

            taskInput.value = "";

            taskCounter++;


            const removeTaskBtn = taskItem.querySelector(".remove-task-btn");
            removeTaskBtn.addEventListener("click", function () {
                // Efeitos
                taskItem.style.opacity = "0";
                setTimeout(() => {
                    taskList.removeChild(taskItem);
                    taskCounter--;
                }, 300); 
            });
        }
    });
});
