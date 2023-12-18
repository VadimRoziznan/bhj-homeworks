const form = document.querySelector('form');
const newDataOption = `<option value="drama">Драма</option>
                 <option value="comedy">Комедия</option>
                 <option value="sci-fi">Фантастика</option>`
const genre = document.querySelector('select');

genre.innerHTML = newDataOption;

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const content = document.querySelector('.content');
    const name = document.getElementById('name');
    const newDataContent = `<p>Название фильма: ${name.value}</p>
                            <p>Жанр: ${genre.options[genre.selectedIndex].text}</p>`;

    content.innerHTML = newDataContent;
    name.value = '';
    genre.value = '';
});