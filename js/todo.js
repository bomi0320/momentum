const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault(); //새로고침 막기
  const newTodo = toDoInput.value; //input에 적힌 text 저장하기
  toDoInput.value = ''; //제출한 후 input 비우기
  paintToDo(newTodo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
