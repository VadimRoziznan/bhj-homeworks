const tasksAdd = document.querySelector('.tasks__add')
const form = document.querySelector('form')
const tasksList = document.querySelector('#tasks__list');
const newDiw = document.createElement('div');
const input = form.querySelector('#task__input')

form.addEventListener('submit', function(event) {
    event.preventDefault();
})

tasksAdd.onclick = () => {
    const newDiw = document.createElement('div');
    
    if (input.value) {
        newDiw.innerHTML = `<div class="task"><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a></div>`;
        tasksList.appendChild(newDiw);
        input.value = ''
        const taskRemove = document.querySelectorAll('.task__remove');

        taskRemove.forEach(link => {
            link.onclick = () => {
                const parentElement = link.closest('.task')
                parentElement.remove();
            }
        })  
    }
}
