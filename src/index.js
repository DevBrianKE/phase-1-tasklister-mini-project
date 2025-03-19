document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks"); // Select the UL element

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description").value;

    if (taskInput.trim() !== "") { // Ensure it's not empty
      const taskItem = document.createElement("li"); // Create an <li> element
      taskItem.textContent = taskInput; // Set text content

      taskList.appendChild(taskItem); // Append the task to the list
      taskForm.reset(); // Clear the input field after submission
    }
  });
});
