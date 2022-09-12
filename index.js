const currentTImeDisplay = document.getElementById("current-time")
const alarmTimeDisplay = document.getElementById("alarm-time")
const displayMessage = document.getElementById("pop-up-msg")
document.getElementById("set-alarm").addEventListener("click", setAlarm)
let currentTime = null
let alarmTime = null

let audio = new Audio("bells.mp3")


function renderCurrentTime(){
    setInterval(() => {
        currentTime = new Date().toLocaleTimeString()
       
        currentTImeDisplay.textContent = currentTime
        // console.log(currentTime)
    }, 1000);

}

renderCurrentTime()



function setAlarm(){
    event.preventDefault() 
    let wakingHour = document.getElementById("hour-input").value
    let wakingMinute = document.getElementById("minute-input").value
    alarmTime = `${wakingHour}:${wakingMinute}:00`
    alarmTimeDisplay.textContent = alarmTime
    console.log(alarmTime)
    alarmChecker()
}

console.log(alarmTime)

function alarmChecker(){
  setInterval(() => {
    if(alarmTime == currentTime){
       ringBell()
      }
  }, 1000);   
}


setAlarm()

// alarmChecker()

function ringBell(){
    audio.play()
    // console.log("hello")
    displayMessage.textContent = "Get Up 🔔"
}





