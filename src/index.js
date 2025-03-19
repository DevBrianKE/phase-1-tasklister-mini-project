document.addEventListener("DOMContentLoaded", () => {
 // Select the form element
 const taskform = document.getElementById("create-task-form")


  // Add a submit event listener
  taskform.addEventListener("submit", function(event) {
    event.preventDefault()// Prevent form from refreshing the page

    // Get the value of the task input field
    const taskInput = document.getElementById("new-task-description").value

    console.log(task)
  })
});
