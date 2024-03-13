
let todos=[];
var data=document.getElementById('table');

function submit(){
    var input =document.getElementById("input");
 todos.push(input.value);
  addtodo(input.value);
  input.value='';
  console.log(todos)

   
}
var data=document.getElementById("table");
function addtodo(todo)
{
    var para =document.createElement('p');
    para.innerText=todo;
    data.appendChild(para);
}















function Update(){
    var btn=document.getElementById("edit");
    btn.style.display="none";
    console.log("inside update");
    document.getElementById("sub").style.display="block";
}


 