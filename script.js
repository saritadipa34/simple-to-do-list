const inputBox=document.getElementById('input');
const save=document.getElementById('save');
const taskContainer=document.getElementById('taskContainer');

window.addEventListener('load',loadTaskToLocalStorage);

save.addEventListener('click',()=>{
    const inputBox=document.getElementById('input');
const inputValue=inputBox.value;

if(inputValue){
 const task={
    name:inputValue,
    id:Date.now()
}
 
    const taskDiv=document.createElement('div');
    taskDiv.classList.add('taskDiv');
    const paragraph=document.createElement('p');
    paragraph.classList.add('paragraph');
    taskDiv.appendChild(paragraph);
  paragraph.innerText=task.name;

  addTaskToLocalStorage(task)
     
    taskContainer.appendChild(taskDiv);
    inputBox.value = "";
}}
)



function addTaskToLocalStorage(task){
    let tasks=JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function loadTaskToLocalStorage(){
let tasks=JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach((task)=>{
    if(task && task.name){
   const taskDiv=document.createElement('div');
    taskDiv.classList.add('taskDiv');
    const paragraph=document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.innerText=task.name;
    paragraph.appendChild(taskDiv);
    }
})
}