import "./style.css";

const taskContents = document.createElement("div");
taskContents.setAttribute("id", "taskContents");

function createTaskElements() {
  const taskHeader = document.createElement("div");
  taskHeader.classList.add("task-header");
  taskHeader.innerHTML = "All Tasks";

  const tasks = document.createElement("section");
  tasks.classList.add("tasks");

  const noTasks = document.createElement("div");
  noTasks.classList.add("no-tasks");
  noTasks.innerHTML = "Yay! No Tasks!";

  taskContents.append(taskHeader, noTasks);
}

export { taskContents, createTaskElements };
