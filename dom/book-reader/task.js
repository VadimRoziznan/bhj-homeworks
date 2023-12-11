document.addEventListener("DOMContentLoaded", function() {
    const fontSize = document.querySelectorAll('.font-size');
    const bookContent = document.querySelector('.book__content');
    const bookControlColor = document.querySelector('.book__control_color').getElementsByTagName('a');
    const book = document.querySelector('.book');
    const bookControlBackground = document.querySelector('.book__control_background').getElementsByTagName('a');
    const bookContentTegP = document.querySelector('.book__content').getElementsByTagName('p')[0];
    
    fontSize.forEach(function(element, index) {
        element.onclick = (evt) => {
            evt.preventDefault();
            for (let i = 0; i < fontSize.length; i++) {
                const element = fontSize[i];
                const dataSize = element.getAttribute('data-size');

                if (i !== index) {
                    element.classList.remove('font-size_active');
                    bookContent.classList.remove(`book_fs-${dataSize}`);
                } else {
                    element.classList.add('font-size_active');
                    bookContent.classList.add(`book_fs-${dataSize}`);
                } 
            }
        }
    });

    for (let index = 0; index < bookControlBackground.length; index++) {
        const element = bookControlBackground[index];
        element.onclick = (evt) => {
            evt.preventDefault();
            for (let i = 0; i < bookControlBackground.length; i++) {
                const element = bookControlBackground[i];
                const dataBgColor = element.getAttribute('data-bg-color');

                if (i !== index) {
                    element.classList.remove('color_active');
                    book.classList.remove(`book_bg-${dataBgColor}`);
                } else {
                    element.classList.add('color_active');
                    book.classList.add(`book_bg-${dataBgColor}`);
                }
            }

        }
    }

    for (let index = 0; index < bookControlColor.length; index++) {
        const element = bookControlColor[index];
        element.onclick = (evt) => {
            evt.preventDefault();
            for (let i = 0; i < bookControlColor.length; i++) {
                const element = bookControlColor[i];
                const dataTextColor = element.getAttribute('data-text-color');
                
                if (i !== index) {
                    element.classList.remove('color_active');
                    book.classList.remove(`book_color-${dataTextColor}`);
                } else {
                    element.classList.add('color_active');
                    book.classList.add(`book_color-${dataTextColor}`);
                }
            }

        }
    }
});