const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');
const popupState = getCookie('popup');


if (popupState !== 'closed') {
    subscribeModal.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
    if (subscribeModal.classList.contains('modal_active')) {
        subscribeModal.classList.remove('modal_active');
        
        setCookie('popup', 'closed')
    }
});

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie.substring(name.length + 1);
}
