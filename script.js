var taskInput = document.getElementById("input-task");
var addButton = document.getElementById("add-btn");
var taskList = document.getElementById("task-list");

function addTask() {
  var task = taskInput.value;
  if (task.trim() == "") {
    alert("Please enter a task!");
    return false;
  }
  var li = document.createElement("li");
  li.innerHTML = task + " <button class='delete-btn' onclick='deleteTask(this)'>Delete</button>";
  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(taskItem) {
  var li = taskItem.parentNode;
  taskList.removeChild(li);
}

addButton.onclick = addTask;
