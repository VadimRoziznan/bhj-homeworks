const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach(element => {
    element.addEventListener('mouseover', function(event) {
        event.preventDefault();
        
        
        /*const newTag = document.createElement('div');
        newTag.className = 'tooltip';
        newTag.textContent = element.title;

        console.log(newTag)*/
        if (element.title.length > 0) {
            const ppp = element.title
            element.title = ''
        }
        element.onclick = () => {
            element.title = ppp
        }
        console.log(element['data-tipsy'])

        
        
    })
    /*element.addEventListener('click', function(e) {
        e.preventDefault();
        element.title = ppp
        element.classList.add('tooltip_active')
    })*/

});

