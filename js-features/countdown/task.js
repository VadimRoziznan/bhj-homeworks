const timer = document.getElementById("timer")
let timer_value = Number(timer.textContent)

setInterval(() => {
    if (timer_value > 0) {
    timer.textContent = getTimer(timer_value--)
    } else {
    alert("Вы победили в конкурсе!")
    }
}, 1000) 

function addZero(number) {
    return String(number).padStart(2, "0");
}

function getTimer(seconds) {
    let hh = addZero(Math.floor(seconds / 3600));
    let mm = addZero(Math.floor((seconds % 3600) / 60));
    let ss = addZero(seconds % 60);
    return `${hh}:${mm}:${ss}`;
}








