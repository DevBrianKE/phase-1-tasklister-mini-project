// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select the form element
  const form = document.getElementById('create-task-form');

  // Add a submit event listener to the form
  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission

      // Select the input element and get its value
      const taskInput = document.getElementById('new-task-description');
      const taskText = taskInput.value;

      // Call a function to add the task to the list
      addTaskToList(taskText);

      // Clear the input field after adding the task
      taskInput.value = '';
  });
});

// Function to add task to the list
function addTaskToList(taskText) {
  // Select the task list element
  const taskList = document.getElementById('tasks');
  
  // Create a new list item element
  const taskItem = document.createElement('li');
  
  // Set the text content of the list item to the task text
  taskItem.textContent = taskText;
  
  // Append the list item to the task list
  taskList.appendChild(taskItem);
}
