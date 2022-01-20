"use strict";

let time_display = document.getElementById("time_display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let startTime;
let timeId;
let elapsedTime = 0;

function countUp() {
  let date = new Date(Date.now() - startTime + elapsedTime);
  let minutes = String(date.getMinutes()).padStart(2, '0');
  let seconds = String(date.getSeconds()).padStart(2, '0');
  let m_seconds = String(date.getMilliseconds()).padStart(3, '0');
  time_display.textContent = `${minutes}:${seconds}:${m_seconds}`;
  timeId = setTimeout(() => {
    countUp();
  }, 10);
  }
  
  start.addEventListener('click', () => {
    if (start.classList.contains('inactive') === true) {
      return;
    }
  buttonRunning();
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click', () => {
    if (stop.classList.contains('inactive') === true) {
      return;
  }
  buttonStopped();
    clearTimeout(timeId);
    elapsedTime += Date.now() - startTime;
  });
  
  reset.addEventListener('click', () => {
    if (reset.classList.contains('inactive') === true) {
      return;
   }
  time_display.textContent = '00:00:000';
    elapsedTime = 0;
  });
  
  function buttonDefault() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }
  
  function buttonRunning() {
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }
  
  function buttonStopped() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }
  
  buttonDefault();