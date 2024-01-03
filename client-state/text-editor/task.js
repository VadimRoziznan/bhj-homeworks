const editor = document.getElementById('editor');

editor.textContent = restoreObject('editor')

editor.addEventListener('input', (event) => {
    const updateValue = event.target.value;
    const savedValue = restoreObject('editor')
    saveObject('editor', updateValue)
})

function saveObject(key, object) {
    localStorage.setItem(key, object);
}

function restoreObject(key) {
    return localStorage.getItem(key);
}