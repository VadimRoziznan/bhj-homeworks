function speed() {
    const el = document.querySelector('.rotator__case_active');
    if (el) {
        return Number(el.getAttribute('data-speed'));
    }
    return Number(1000);
}

function rotator() {
    const rotatorCase = document.querySelectorAll('.rotator__case');

    for (let index = 0; index < rotatorCase.length; index++) {
        const element = rotatorCase[index];
        element.style.color = element.getAttribute('data-color');
    }
    
    for (let index = 0; index < rotatorCase.length; index++) {
        const element = rotatorCase[index];
        
        if (element.classList.contains('rotator__case_active')) {
            element.classList.remove('rotator__case_active');
            if (rotatorCase[index+1]) {
                rotatorCase[index+1].classList.add('rotator__case_active');
            } else {
                rotatorCase[0].classList.add('rotator__case_active');
            }
            
            break;
        }
    }
    setTimeout(rotator, speed());
}

rotator();



