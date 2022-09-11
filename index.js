const currentTImeDisplay = document.getElementById("current-time")
const alarmTimeDisplay = document.getElementById("alarm-time")
const displayMessage = document.getElementById("pop-up-msg")
document.getElementById("set-alarm").addEventListener("click", setAlarm)
let currentTime = null
let wakingTime = null

let audio = new Audio("bells.mp3")


function renderCurrentTime(){
    setInterval(() => {
        currentTime = new Date().toLocaleTimeString()
       
        currentTImeDisplay.textContent = currentTime
    }, 1000);

}

// console.log(renderCurrentTime())


function setAlarm(){
    let wakingHour = document.getElementById("hour-input").value
    let wakingMinute = document.getElementById("minute-input").value
    wakingTime = `${wakingHour}:${wakingMinute}: 00`
    alarmTimeDisplay.textContent = wakingTime
    


}
console.log(wakingTime)

function alarmChecker(){
    setInterval(() => {
        if (wakingTime == currentTime) {
            ringBell()
            }
    }, interval);
    
}

function ringBell(){
    audio.play()
    console.log("hello")
    displayMessage.textContent = "Get Up 🔔"
}

