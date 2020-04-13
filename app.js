//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(event){
  //prevent form from submitting

  event.preventDefault();
 
  //Todo DIV
  const todoDiv =document.createElement("div");
  todoDiv.classList.add("todo");
 
  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText =todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Clear todo Input value
  todoInput.value = "";
 
  //Check mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML= "<i class ='fas fa-check'></i>";
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Trash mark Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML= "<i class ='fas fa-trash'></i>";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to List
  todoList.appendChild(todoDiv);

}
//Delete Item
function deleteCheck(event){
  const item = event.target;
  //Delete todo
  if(item.classList[0]=== 'trash-btn'){
      
      const todo = item.parentElement;
      //Add animation
      todo.classList.add("fall");
      //Remove the item
        todo.addEventListener('transitionend', function(){
        todo.remove();
      });
      
  }
  //Check Mark
if(item.classList[0]==='complete-btn'){
  const todo = item.parentElement;
  todo.classList.toggle("completed");

}
}

function filterTodo(event){
  const todos = todoList.childNodes;
    console.log(todos);
   todos.forEach(function(todo){  
      switch(event.target.value){
        case "all":
          todo.style.display = "flex";
          break;
        
        case "completed":
          if(todo.classList.contains('completed')){
            console.log(todo);
            todo.style.display = "flex";
          } else {
           todo.style.display = "none";
          }
          break;

        case "uncompleted":
          if(!todo.classList.contains('completed')){
            todo.style.display="flex";
          }else{
            todo.style.display = "none";
          }
          break;
      }
  });
}

