const mainCheckbox = document.getElementById('main-checkbox');
const subCheckboxs = document.querySelectorAll('.sub-checkbox');

mainCheckbox.addEventListener('click', function(event) {
    subCheckboxs.forEach((subCheckbox) => {
        subCheckbox.checked = mainCheckbox.checked;
    });
});

subCheckboxs.forEach(function(subCheckbox) {
    subCheckbox.addEventListener('change', function() {
        const allChecked = Array.from(subCheckboxs).every(function(subCheckbox) {
            return subCheckbox.checked;
        });
        if (allChecked) {
            mainCheckbox.checked = true;
        } else {
            mainCheckbox.checked = false;
        }
    });
});
