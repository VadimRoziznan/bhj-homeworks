const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name');
    const feedback = document.getElementById('feedback');
    const content = document.querySelector('.content');
    const newData = `<p>Имя: ${name.value}</p>
                     <p>Текст: ${feedback.value}</p>`;

    content.innerHTML = newData;
    name.value = '';
    feedback.value = '';

});