//wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // select the form element
  const form = document.getElementById('create-task-form')
  //add a submit event listener to the form
  form.addEventListener('submit', (event) => {
    event.preventDefault() //prevent the default form submission
    
    //select the input element and get its value
    const taskInput = document.getElementById('new-task-description')
    const taskText = taskInput.value

    //call a function to add the task to the list
    addTaskList(taskText)

    //clear the input field after adding the task
    taskInput.value = ''
  })
});
