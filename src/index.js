const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//refs

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

changeColor = function () {
  body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
};

//click on start
const startBtnAction = function (e) {
  const intervalID = setInterval(changeColor, 1000);
  //console.log('click on start');
  btnStart.removeEventListener('click', startBtnAction);

  const stopBtnAction = function (e) {
    clearInterval(intervalID);
    btnStart.addEventListener('click', startBtnAction);
  };

  btnStop.addEventListener('click', stopBtnAction);
};

btnStart.addEventListener('click', startBtnAction);

//click on stop
