const msg = [
    "Believe in yourself.",
    "Success is coming your way.",
    "Today is your lucky day.",
    "Hard work pays off.",
    "Stay positive and strong.",
    "Opportunities will find you.",
    "Good news is coming.",
    "Be patient, great things take time.",
    "You will achieve your goals.",
    "Happiness is around the corner."
];

window.onload = function () {
    const i = Math.floor(Math.random() * msg.length);
    document.getElementById("fortuneBox").innerText = msg[i];
    loadTasks();
};

const styles = [
    {fontSize: "19px", fontFamily: "Arial", color: "red", bg: "lightgreen", border: "green"},
    {fontSize: "22px", fontFamily: "Courier New", color: "black", bg: "lightyellow", border: "yellow"},
    {fontSize: "21px", fontFamily: "Noto Sans", color: "green", bg: "lightblue", border: "blue"},
    {fontSize: "20px", fontFamily: "Comic Sans MS", color: "blue", bg: "lightpink", border: "red"}
    
    
];

function changeStyle(index) {
    const box = document.getElementById("fortuneBox");
    
    box.style.fontSize = styles[index].fontSize;
    box.style.fontFamily = styles[index].fontFamily;
    box.style.color = styles[index].color;
    box.style.backgroundColor = styles[index].bg;
    box.style.borderColor = styles[index].border;
}

function showAlert() {
    show=""
    for (let i = 1; i <= msg.length; i++) {
        show += i+"."+msg[i-1] + "\n";
}
    alert(show);
    
    //alert("Fortunes:\n" + msg.join("\n"))

}
//**  Stop watch code */


let time = 0;
let timer = null;

function startTimer() {
    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {
        time += 3;
        document.getElementById("displayTime").innerText = time;
        if (time >= 30) {
            clearInterval(timer);
            
        }       
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    time = 0;
    document.getElementById("displayTime").innerText = time;
}


//** To-do list code */
//**document.addEventListener("DOMContentLoaded", loadTasks); */

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") return;
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({text: taskText, done: false});
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    loadTasks();
}

function loadTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        checkbox.onchange = () => toggleTask(index);

        let text = document.createElement("span");
        text.innerText = task.text;
        
        
        let delButton = document.createElement("button");
        delButton.innerText = "Delete";
        delButton.onclick = () => deleteTask(index);
        if (task.done==false) {
          li.appendChild(checkbox);
          li.appendChild(text);
          li.appendChild(delButton);
        
          taskList.appendChild(li);
        }
    });
}

function toggleTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks[index].done = !tasks[index].done;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}



