const hasTooltip = document.querySelectorAll('.has-tooltip');

Array.from(hasTooltip).forEach(function(el) {
    const divElement = document.createElement('div');

    divElement.classList.add('tooltip');
    el.appendChild(divElement);
})

hasTooltip.forEach(element => {
    element.addEventListener('mouseenter', function(event) {

        event.preventDefault();
        
        const child = element.querySelector('.tooltip');
        let  state = false;

        if (element.title) {

            child.textContent = element.title;
        }

        element.onclick = () => {
            const child = element.querySelector('.tooltip');

            if (state) {
                child.classList.remove('tooltip_active')
                state = false;
                
            } else {
                child.classList.add('tooltip_active')
                child.style = `left: ${element.offsetLeft}px;`
                element.title = child.textContent
                state = true;
            }
        }
        element.addEventListener('click', function(event) {
            event.preventDefault();
        })
    })
});


