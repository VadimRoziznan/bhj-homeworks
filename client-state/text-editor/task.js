document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');

    editor.textContent = restoreObject('editor')
})

editor.addEventListener('change', (event) => {
    const updateValue = event.target.value;
    const savadValue = restoreObject('editor')
    saveObject('editor', updateValue)
    console.log('saveData = ', savadValue)
})

function saveObject(key, object) {
    localStorage.setItem(key, object);
}

function restoreObject(key) {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
}