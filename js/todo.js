const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

function deleteToDo(event) {
  const li = event.target.parentElement; //부모인 li 찾기
  li.remove(); //li 삭제!
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo); //버튼 누르면 todo 삭제
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault(); //새로고침 막기
  const newTodo = toDoInput.value; //input에 적힌 text 저장하기
  toDoInput.value = ''; //제출한 후 input 비우기
  paintToDo(newTodo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
