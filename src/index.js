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
  // Get the task list (ul) where tasks will be appended
  const taskList = document.getElementById('tasks');
  
  // Create a new list item element

  // Create a new list item (li) to hold the task
  const taskItem = document.createElement('li');
  
  // Set the text content of the list item to the task text
  taskItem.textContent = taskText;
  
  // Append the list item to the task list
  taskItem.textContent = taskText; // Set the text content of the list item to the task description

  // Create a delete button for each task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete'; // Set the button text to 'Delete'

  // Add an event listener to the delete button to remove the task item when clicked
  deleteButton.addEventListener('click', () => {
      taskList.removeChild(taskItem); // Remove the task item from the list
  });

  // Append the delete button to the task item
  taskItem.appendChild(deleteButton);

  // Append the task item to the task list (ul)
  taskList.appendChild(taskItem);
}

