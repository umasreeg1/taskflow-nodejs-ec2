async function loadTasks(){

const response = await fetch("/tasks");

const tasks = await response.json();


const list=document.getElementById("taskList");

const count=document.getElementById("count");


count.innerText=tasks.length;


list.innerHTML="";


if(tasks.length===0){

list.innerHTML="<p style='text-align:center'>No tasks yet ✨</p>";

return;

}



tasks.forEach(task=>{


const li=document.createElement("li");


li.innerHTML=`

<span>✅ ${task.title}</span>

<button class="delete"
onclick="deleteTask(${task.id})">
Delete
</button>

`;


list.appendChild(li);


});


}




async function addTask(){


const input=document.getElementById("taskInput");


if(!input.value.trim())
return;



await fetch("/tasks",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

title:input.value

})

});


input.value="";


loadTasks();

}




async function deleteTask(id){


await fetch("/tasks/"+id,{

method:"DELETE"

});


loadTasks();

}



loadTasks();