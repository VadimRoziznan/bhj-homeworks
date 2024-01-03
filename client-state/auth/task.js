const form = document.getElementById('signin__form');
const userId = document.getElementById('user_id');

if (restoreObject('user_id')) {
    userGreeting(restoreObject('user_id'));
} else {
    form.addEventListener('submit', (e) => {

        e.preventDefault();
        const xhr = new XMLHttpRequest();
    
        xhr.addEventListener('load', () => {

            const answer = xhr.response;
            const success = answer.success;
            const userId = answer.user_id;

            if (success) {
                userGreeting(userId);
                saveObject('user_id', userId);
            } else {
                alert('Неправильный логин или пароль!');
            }
            
        })
    
        const URL = 'https://students.netoservices.ru/nestjs-backend/auth';
        const method = 'POST';
    
        xhr.open(method, URL); 
        const formData = new FormData(form);
        xhr.responseType = 'json';
        xhr.send(formData);
        form.reset()
    })
}

function saveObject(key, object) {
    localStorage.setItem(key, object);
}

function restoreObject(key) {
    return localStorage.getItem(key);
}

function userGreeting(Id) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = Id;
}