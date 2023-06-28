const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); //바로 현재 시각이 표시되게 함.
setInterval(getClock, 1000); //1초마다 호출
