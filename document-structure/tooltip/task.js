const hasTooltip = document.querySelectorAll('.has-tooltip');


hasTooltip.forEach(element => {
    element.addEventListener('mouseenter', function(event) {
        event.preventDefault();
        const tooltip = document.querySelector('.tooltip');

        if (element.title) {
            tooltip.textContent = element.title;
            element.title = ''
        }
        

        console.log(element.querySelector('.tooltip'))

        /*if (element.title) {
            const newTag = document.createElement('div');
        
            document.body.appendChild(newTag);
            newTag.className = 'tooltip';
            newTag.textContent = element.title;

            element.title = ''
        }*/

        element.onclick = () => {
            const child = element.querySelector('.tooltip');
            if (child.classList.contains('tooltip_active')) {
                child.classList.remove('tooltip_active')
            } else {
                child.classList.add('tooltip_active')
            }
            
        }

    element.addEventListener('click', function(event) {
        event.preventDefault();

        /*element.style = 'pointer-events:auto;'*/
        
    })
        

        /*title = element.title;
        
        
        element.href = ''
        

        if (element.title.length > 0) {
            const ppp = element.title
            element.title = ''
        } else {
            element.title = ppp
        }
        element.onclick = () => {
            event.preventDefault();
            
            console.log('lfsdlsfdlkdsfdlk')
        }*/
        

        
        
    })
    /*element.addEventListener('click', function(e) {
        e.preventDefault();
        element.title = ppp
        element.classList.add('tooltip_active')
    })*/

});

