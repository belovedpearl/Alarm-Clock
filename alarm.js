let time = document.getElementById('time-display');
let message = document.getElementById('message-display');
let alarm = document.getElementById('alarmtime-set');
let set = document.getElementById('set');
set.addEventListener('click', alarmSet);
let stop = document.getElementById('stopAlarm');
stop.addEventListener('click', stopAlarm)
let currentTime = null;
let alarmTime = null;
const audio = new Audio('alarmsound.wav');

function timeDisplay(){
setInterval(() => {
currentTime= new Date().toLocaleTimeString();
//console.log(currentTime);
time.textContent = currentTime;
alarmChecker()
}, 1000)
}
timeDisplay()

function alarmSet(){
 event.preventDefault();
 let wakeHour = document.getElementById('hour').value;
 let wakeMin = document.getElementById('min').value;  

 if (wakeHour / 10 < 1 || wakeHour === 0){ wakeHour = '0' + wakeHour};
 if (wakeMin / 10 < 1 || wakeMin === 0){ wakeMin = '0' + wakeMin};
 alarmTime = `${wakeHour}:${wakeMin}:00`;
 alarm.textContent = alarmTime
 document.forms[0].reset();
}


function alarmChecker(){
  if (currentTime == alarmTime){
    ringTheAlarm()
   }
}

function ringTheAlarm(){
 audio.play();
 message.textContent = 'GET UP!!!'
}

function stopAlarm(){
    audio.pause()
    message.textContent = ''
    
}