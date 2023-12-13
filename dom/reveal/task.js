window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.reveal');

    elements.forEach(function(el) {
        const {top, bottom} = el.getBoundingClientRect();

        if (bottom < 0 || top > window.innerHeight) {
            if (el.classList.contains('reveal_active')) {
                el.classList.remove('reveal_active');
            }
        } else {
            if (!el.classList.contains('reveal_active')) {
                el.classList.add('reveal_active');
            }
        }
    });
});

