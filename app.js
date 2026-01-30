const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterSelect = document.getElementById("filterSelect");
addBtn.addEventListener("click", function () {
  const taskText = taskInput.value;
  if (taskText === "") {
    return;
  }
});
