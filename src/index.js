document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById("new-task-description").value;
    
    if (taskInput.trim() !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskInput;

      // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.addEventListener("click", function() {
        taskItem.remove(); // Remove the task when delete button is clicked
      });

      taskItem.appendChild(deleteBtn); // Attach button to task
      taskList.appendChild(taskItem);
      
      taskForm.reset();
    }
  });
});
