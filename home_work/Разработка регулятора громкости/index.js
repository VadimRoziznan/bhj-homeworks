document.addEventListener("DOMContentLoaded", function() {
    const volumeUp = document.querySelector('.volume-up');
    const volumeDown = document.querySelector('.volume-down');
    const indicator = document.querySelector('.indicator');
    const volumeRect = document.querySelectorAll('.volume-rect')
    let index = 0;

    volumeUp.onclick = () => {
        if (index < 10) {
            volumeRect[index].classList.add('volume-rect__active')
            index ++;
            indicator.textContent = index;   
        }
    }

    volumeDown.onclick = () => {
        if (index !== 0) {
            index --;
            indicator.textContent = index;  
            volumeRect[index].classList.remove('volume-rect__active')
        }  
    }
});
