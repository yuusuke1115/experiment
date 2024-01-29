const textBox = document.getElementById("text-box");
const submitBtn = document.getElementById("submit-button");
let tasks = document.getElementById("tasks");

submitBtn.addEventListener("click", () => {
  const task = document.createElement("li");
  task.innerHTML = `${textBox.value}`;
  tasks.appendChild(task);
});