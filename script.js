const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let output = document.querySelector("h5");
let DateToday = document.getElementById("Date");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveDate();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveDate();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveDate();
    }
  },
  false
);

function saveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showList();

setInterval(() => {
  let d = new Date();
  output.innerHTML = d.toLocaleTimeString();
}, 1000);

setInterval(() => {
  let t = new Date();
  DateToday.innerHTML = t.toLocaleDateString();
}, 1000);
