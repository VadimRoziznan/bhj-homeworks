const cookie = document.getElementById("cookie")
const clicker_counter = document.getElementById("clicker__counter")
const clicker_speed = document.getElementById("clicker__speed")
let start = new Date().getTime();;
let end;
let duration;

cookie.onclick = () => {
    clicker_counter.textContent = Number(clicker_counter.textContent) + 1;
    if (Number(clicker_counter.textContent) % 2 !== 0) {
        cookie.width += 30;
        end = new Date().getTime();
        duration = Math.abs((start - end) / 1000);
        clicker_speed.textContent = duration.toFixed(2);
        
    } else {
        cookie.width -= 30;
        start = new Date().getTime();
        duration = Math.abs((start - end) / 1000);
        clicker_speed.textContent = duration.toFixed(2); 
    }
}