window.onload = function() {
    let loader = document.querySelector(".preloader");
    setTimeout(function() {
        loader.parentNode.removeChild(loader);
    }, 3000);
}

const cards = document.querySelectorAll(".projects-card");
cards.forEach(el => {
    el.addEventListener("click", function() {
        cards.forEach(el => {
            el.classList.remove("projects-card-clicked");
        });
        el.classList.toggle("projects-card-clicked");
    });
});