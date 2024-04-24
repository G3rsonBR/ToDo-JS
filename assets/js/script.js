const tasks = []

function throwCreateTask() {
  const getTask = document.querySelector('.inputAddTask');
  if (getTask.value === '') return;

  tasks.push(getTask.value);
  getTask.value = '';
}

function createTask() {
  
  document.getElementById("noTasks").remove();
  const getTasks = document.querySelector('.tasksContent');
  const tasksContent = document.createElement('div');
  tasksContent.classList.add('tasksContent');
  getTasks.appendChild(tasksContent);
}


if (tasks.length > 0) {
  console.log(tasks.length)
  createTask()
}
