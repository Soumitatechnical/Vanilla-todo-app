//selectors

const todoInput=document.querySelector('.inputText');
const todoBtn=document.querySelector('.todo-btn');
const todoContainer=document.querySelector('.todo-container');
const myTodo=document.querySelector('.my-todo');




//Event handlers

todoBtn.addEventListener("click", addTodo);
myTodo.addEventListener("click", delTodo);



//functions

function addTodo(event){

    event.preventDefault();

    // console.log("is ok?");
   

    //Crate a Todo div

    var todoDiv=document.createElement("div");

    //add a class

    todoDiv.classList.add("todo");

    // create list elements

    var todoItem=document.createElement("li");
    todoItem.innerText=(todoInput.value);
    todoItem.classList.add("todo-item");
   

    //Append the list itme to the todo div

    todoDiv.appendChild(todoItem);

    // Crate a delete button

    var trashBtn=document.createElement("button");
    trashBtn.classList.add("trashBtn");
    trashBtn.innerHTML='<i class="fa fa-trash"></i>';

    // Append the trash button to the todo div

    todoDiv.appendChild(trashBtn);

    // add the todo div to the ul div

    myTodo.appendChild(todoDiv);

    //clear the Input field
    todoInput.value="";

   }

  function delTodo(e){
     if (e.target.classList[0]=== 'trashBtn'){
         e.target.parentElement.remove();
     }
  }



