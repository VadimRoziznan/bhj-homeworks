const tasksAdd = document.querySelector('.tasks__add')
const form = document.querySelector('form')
const tasksList = document.querySelector('#tasks__list');
const newDiw = document.createElement('div');

tasksAdd.addEventListener('click', (event) => {
    tasksAdd.setAttribute('type', 'button');
    
    const formData = new FormData(form);
    const input = form.querySelector('#task__input')

    tasksAdd.onclick = () => {
        const newDiw = document.createElement('div');
        newDiw.innerHTML = `<div class="task"><div class="task__title">Сходить в магазин</div><a href="#" class="task__remove">&times;</a></div>`;
        tasksList.appendChild(newDiw);
    }
    /*console.log(input.value)*/
})