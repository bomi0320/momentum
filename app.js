const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault(); //새로고침 막기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //localStorage에 username 추가
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}!`; //텍스트 추가하고
  greeting.classList.remove(HIDDEN_CLASSNAME); //greeting을 보여주기
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //저장된 username이 없으면
  loginForm.classList.remove(HIDDEN_CLASSNAME); // form을 보여주고
  loginForm.addEventListener('submit', onLoginSubmit); //이벤트 실행
} else {
  //저장된 username이 있으면
  paintGreetings(savedUsername);
}
