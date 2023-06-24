const loginForm = document.querySelector('#login-form');
const loginButton = document.querySelector('#login-form button');

function onLoginSubmit() {
  const username = loginInput.value;
  console.log(username);
}

loginForm.addEventListener('submit', onLoginSubmit);
