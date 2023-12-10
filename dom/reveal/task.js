
window.addEventListener('scroll', function() {
    const el = document.querySelector('.reveal')
    const {top, bottom} = el.getBoundingClientRect();

    if (bottom < 0 || top > window.innerHeight) {
        if (el.classList.contains('reveal_active')) {
            el.classList.remove('reveal_active');
        }
        return false;
    } else {
        if (!el.classList.contains('reveal_active')) {
            el.classList.add('reveal_active');
        }
        return true;
    }
});