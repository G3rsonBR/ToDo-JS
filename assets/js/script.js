const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

function throwCreateTask() {
  const getTask = document.querySelector('.inputAddTask');
  if (getTask.value === '') return;

  const id = "id" + Math.random().toString(16).slice(2)

  const newTask = {
    id: id,
    task: getTask.value,
    isDone: false,
  };

  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

tasks.forEach((task) => {
  createTask(task, task.isDone)  
})

function createTask(task, isCompleted) {
  const getTasks = document.querySelector('.tasksContent');
  const tasksContent = document.createElement('div');
  tasksContent.classList.add('task');

  const input = document.createElement("input");
  input.setAttribute('type', 'checkbox');
  input.setAttribute('onclick', `checkTask("${task.id}")`);
  isCompleted ? input.setAttribute('checked', 'checked') : null

  const btn = document.createElement("button");
  btn.setAttribute('class', `deleteTaskBtn`);
  btn.setAttribute('onclick', `deleteTask("${task.id}")`);
  btn.innerText = 'X';

  const taskContent = document.createElement('p');
  taskContent.setAttribute('class', 'taskContent');
  taskContent.innerText = task.task;
  isCompleted ? taskContent.classList.add('checked') : null
  
  tasksContent.appendChild(input);
  tasksContent.appendChild(taskContent);
  tasksContent.appendChild(btn);

  getTasks.appendChild(tasksContent);
}

function checkTask(index) {
  tasks.forEach((task) => {
    if (task.id === index) {
      task.isDone = !task.isDone;
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.reload();
}

function deleteTask(index) {
  const filteredTasks = tasks.filter((task) => task.id !== index);
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
  window.location.reload();
}

if (tasks.length > 0) {
  document.getElementById("noTasks").remove();
}
