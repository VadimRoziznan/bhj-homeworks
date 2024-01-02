const signin = document.getElementById('signin')
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE) {
            const answer = JSON.parse(xhr.responseText)
            const success = answer.success;
            const user_id = answer.user_id;
            if (success) {
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active')
                userId.textContent = user_id;
            }
        }
    })

    const URL = 'https://students.netoservices.ru/nestjs-backend/auth'

    xhr.open('POST', URL); 
    const formData = new FormData(form);
    xhr.send(formData); 
})