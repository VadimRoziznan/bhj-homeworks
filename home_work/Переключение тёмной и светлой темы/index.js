const body = document.body;
const checkbox = document.getElementById('checkbox');
let counter = false

checkbox.onclick = () => {
    if (counter) {
        body.style.color = "#fff";
        body.style.backgroundImage = "linear-gradient(to bottom, #222222, #ffffff)";
        counter = false;
    } else {
        body.style.color = "#333";
        body.style.backgroundImage = "linear-gradient(to bottom, #ffffff, #222222)";
        counter = true;
    }
}