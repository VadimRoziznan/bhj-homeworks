const starElements = document.querySelectorAll(".star");

for (let i = 0; i < starElements.length; i++) {
    starElements[i].addEventListener("click", function() {
        if (this.classList.contains("star_active")) {
            for (let j = 0; j < starElements.length; j++) {
                starElements[j].classList.remove('star_active')
            }
        } else {
            for (let j = 0; j <= i; j++) {
                starElements[j].classList.add('star_active')
            }
        }
      });    
}