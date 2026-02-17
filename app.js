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
  const li = document.createElement("li");
  li.dataset.status = "active";
  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;
  const prioritySpan = document.createElement("span");
  prioritySpan.textContent = ` (${prioritySelect.value})`;
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔";
  doneBtn.addEventListener("click", function () {
    li.classList.toggle("done");
    if (li.classList.contains("done")) {
      li.dataset.status.toggle("done");
    } else {
      li.dataset.status = "active";
    }
    applyFilter();
  });
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
  li.appendChild(textSpan);
  li.appendChild(prioritySpan);
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});
filterSelect.addEventListener("change", applyFilter);
function applyFilter() {
  const filterValue = filterSelect.value;
  const tasks = taskList.children;
  for (let task of tasks) {
    if (filterValue === "all") {
      task.style.display = "block";
    } else if (task.dataset.status === filterValue) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  }
}
